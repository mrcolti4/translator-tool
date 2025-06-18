<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use lywzx\epub\EpubParser as EParser;

final class EpubParser
{
    public function __construct(
    ) {}

    public function parse(UploadedFile $file)
    {
        $parser = new EParser($file->path());
        $pdf = $parser->parse();
        $toc = $parser->getTOC();
        $id = $parser->getSpine()[9];

        dd($parser->getChapterRaw($id));
    }
}
