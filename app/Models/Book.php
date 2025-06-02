<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Book extends Model
{
    public const string TABLE_NAME = 'books'; 
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;
}
