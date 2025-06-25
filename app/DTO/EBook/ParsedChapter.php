<?php

namespace App\DTO\EBook;

final class ParsedChapter
{
    public function __construct(
        public array $images,
        public int $wordsCount,
        public string $htmlContent,
        public string $chapterTitle,
    ) {}
}
