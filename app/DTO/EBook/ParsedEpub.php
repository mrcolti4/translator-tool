<?php

namespace App\DTO\EBook;

final class ParsedEpub
{
    public function __construct(
        public EBookInfo $info,
        public array $chapters,
    ) {}
}
