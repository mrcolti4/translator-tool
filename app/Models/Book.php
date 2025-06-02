<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Relations\HasMany;

class Book extends Model
{
    public const string TABLE_NAME = 'books'; 
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;

    protected $fillable = [
        'author',
        'user_id',
        'poster',
        'release_year',
        'original_language',
        'target_language',
    ];

    public function chapters(): HasMany
    {
        return $this->hasMany(Chapter::class);
    }
}
