<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::group([], function () {
    Route::get('/book/create', [BookController::class, 'create']);
});
