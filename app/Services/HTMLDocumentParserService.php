<?php

namespace App\Services;

use App\DTO\Image;
use App\DTO\ParsedChapter;
use Dom\HTMLDocument;
use Dom\HTMLElement;

final class HTMLDocumentParserService
{
    public function __construct(
    ) {}

    public function parseChapter(string $htmlContent): ParsedChapter
    {
        $htmlContent = trim($htmlContent);
        if ('' === $htmlContent) {
            # TODO: error handling
        }

        if (1 !== \preg_match('/^\s*<!DOCTYPE|^\s*<html/i', $htmlContent)) {
            $htmlContent = \sprintf('<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><div>%s</div></body></html>', $htmlContent);
        }

        $dom = HTMLDocument::createFromString($htmlContent);
        $textContent = $dom->body->textContent;

        $images = $this->extractImages($dom);

        return new ParsedChapter(
            images: $images,
            wordsCount: strlen(trim($textContent)),
            content: trim($textContent),
        );
    }

    private function extractImages(HTMLDocument $chapterDom): array
    {
        $allImagesInChapter = $chapterDom->getElementsByTagName('img');

        if (0 === $allImagesInChapter->length) {
            return [];
        }

        $images = [];

        foreach($allImagesInChapter as $image) {
            $attrs = [];

            foreach($image->attributes->getIterator() as $key => $value) {
                if ('src' === $key && true === str_starts_with($value->textContent, '/')) {
                    $attrs[$key] = substr($value->textContent, 1);
                    continue;
                }
                $attrs[$key] = $value->textContent;
            }

            $images[] = new Image(
                src: $attrs['src'],
                class: $attrs['class'],
            );
        }

        return $images;
    }
}
