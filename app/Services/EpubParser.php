<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use lywzx\epub\EpubParser as EParser;

final class EpubParser
{
    public function __construct(
        public HTMLDocumentParserService $htmlParser,
    ) {}

    public function parse(UploadedFile $file)
    {
        $parser = new EParser($file->path());
        $pdf = $parser->parse();
        $spine = $parser->getSpine();


        $chapters = array_map(function($item) use ($parser) {
            $content = $parser->getChapter($item);
            $chapter = $this->htmlParser->parseChapter($content);

            return $chapter;
        }, $spine);
        dd($chapters);
    }
}
