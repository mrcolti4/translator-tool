<?php

namespace App\Services;

use Cloudinary\Api\Upload\UploadApi;

final class UploadImageService
{
    public function __construct(
        public UploadApi $api
    ) {}

    public function uploadImage(string $imageData)
    {
        $this->createArrayBufferFromImage($imageData);
    }

    private function createArrayBufferFromImage(string $imageData)
    {
        $image = 'data:image/jpeg;base64,' . base64_encode($imageData);

        // $response = $this->api->upload($image, [
        //     'public_id' => 'test',
        //     'resource_type' => 'image',
        // ]);
        // dd($response->getArrayCopy());
    }
}
