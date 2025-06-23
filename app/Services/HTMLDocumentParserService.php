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

    public function parseChapter(string $htmlContent)
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
            content: $textContent,
        );
    }

    private function extractImages(HTMLDocument $chapterDom)
    {
        $allImagesInChapter = $chapterDom->getElementsByTagName('img');

        if (0 === $allImagesInChapter->length) {
            return [];
        }

        $images = [];

        foreach($allImagesInChapter as $image) {
            $attrs = [];

            foreach($image->attributes->getIterator() as $key => $value) {
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
