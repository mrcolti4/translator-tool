<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\UploadBookController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'book',
    'as' => 'book.'
], function () {
    Route::get('/upload-book', [UploadBookController::class, 'getUploadPage'])->name('uploadPage');
    Route::post('/upload-book', [UploadBookController::class, 'upload'])->name('upload');
    Route::get('/create', [BookController::class, 'create'])->name('create');
    Route::post('/store', [BookController::class, 'store'])->name('store');
});
