<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use lywzx\epub\EpubParser as EParser;

final class EpubParser
{
    public const string JPEG_TYPE = 'image/jpeg';
    public const string PNG_TYPE = 'image/png';

    public function __construct(
        public HTMLDocumentParserService $htmlParser,
        public UploadImageService $imageService,
    ) {}

    public function parse(UploadedFile $file): array
    {
        $parser = new EParser($file->path());
        $pdf = $parser->parse();
        $spine = $parser->getSpine();

        $chapters = array_map(function($item) use ($parser) {
            $content = $parser->getChapter($item);
            $chapter = $this->htmlParser->parseChapter($content);
            $this->getImages($parser, $chapter->images);

            return $chapter;
        }, $spine);
        dd($chapters);
    }

    private function getImages(EParser $parser, array $imagesInChapter)
    {
        $manifest = $parser->getManifest();
        $allImagesInEpub = array_filter($manifest, function(array $item) {
            if (self::JPEG_TYPE === $item['media-type'] ||
                self::PNG_TYPE === $item['media-type']
            ) {
                return $item;
            }
        });

        $allImagesHrefInEpub = array_column($allImagesInEpub, 'href');
        foreach($imagesInChapter as $image) {
            if (true === in_array($image->src, $allImagesHrefInEpub)) {
                $imageId = array_find_key($allImagesInEpub, function(array $item) use($image) {
                    return $item['href'] === $image->src;
                });
                $image = $parser->getImage($imageId);

                $this->imageService->uploadImage($image);
            }
        }
    }
}
