<?php

namespace App\Services\EBook;

use App\DTO\EBook\EBookImage;
use App\DTO\EBook\ParsedChapter;
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
        $body = $dom->getElementsByTagName('body')->item(0);
        $bodyContent = $dom->saveHtml($body);
        $textContent = $dom->body->textContent;

        $images = $this->extractImages($dom);

        return new ParsedChapter(
            images: $images,
            charCount: strlen(trim($textContent)),
            wordsCount: count(preg_split('/\s+/', trim($textContent))),
            htmlContent: $bodyContent,
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

            if (false === array_key_exists('src', $attrs)) {
                continue;
            }

            $images[] = new EBookImage(
                src: $attrs['src'],
                alt: $attrs['alt'] ?? '',
                size: 0
            );
        }

        return $images;
    }
}
