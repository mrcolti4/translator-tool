<?php

namespace App\DTO\EBook;

final class EBookInfo
{
    public function __construct(
        public string $title,
        public string $creator,
        public string $language,
        public string $description,
    ) {}
}
