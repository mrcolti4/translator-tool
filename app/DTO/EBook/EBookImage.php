<?php

namespace App\DTO\EBook;

final class EBookImage
{
    public function __construct(
        public string $src,
        public string $alt,
        public float $size,
    ) {}
}
