<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Page extends Model
{
    public const string TABLE_NAME = 'pages';
    /** @use HasFactory<\Database\Factories\PageFactory> */
    use HasFactory;
}
