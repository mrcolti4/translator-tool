<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ParsedEpub extends JsonResource
{
    public static $wrap = null;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'info' => [
                'title' => $this->resource->info->title,
                'creator' => $this->resource->info->creator,
                'language' => $this->resource->info->language,
                'description' => $this->resource->info->description,
            ],
            'chapters' => Chapter::collection($this->resource->chapters),
        ];
    }
}
