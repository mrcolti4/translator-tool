<?php

namespace App\DTO;

final class ParsedChapter
{
    public function __construct(
        public array $images,
        public int $wordsCount,
        public string $content
    ) {}
}
