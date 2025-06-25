<?php

namespace App\DataMappers;

use App\DTO\EBook\EBookInfo;

final class EBookInfoDataMapper
{
    public string $title = '';
    public string $creator = '';
    public string $language = '';
    public string $description = '';

    public function mapToEBookInfo(array $rawData): EBookInfo
    {

        if (true === array_key_exists('description', $rawData)) {
            $this->description = trim(strip_tags($rawData['description']));
        }

        if (true === array_key_exists('title', $rawData)) {
            $this->title = $rawData['title'];
        }

        if (true === array_key_exists('creator', $rawData)) {
            $this->creator = $rawData['creator'];
        }

        if (true === array_key_exists('language', $rawData)) {
            $this->language = $rawData['language'];
        }

        return new EBookInfo(
            title: $this->title,
            creator: $this->creator,
            language: $this->language,
            description: $this->description,
        );
    }
}
