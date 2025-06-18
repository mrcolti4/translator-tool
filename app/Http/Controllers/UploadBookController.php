<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExtractBookRequest;
use App\Services\EpubParser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UploadBookController extends Controller
{
    public function __construct(
        public EpubParser $parser,
    ) {}

    public function getUploadPage()
    {
        return Inertia::render('app/book/upload-book');
    }

    public function upload(Request $request)
    {
        $this->parser->parse($request->file('file'));
    }
}
