<?php

namespace App\DTO;

final class Image
{
    public function __construct(
        public string $src,
        public string $class,
    ) {}
}
