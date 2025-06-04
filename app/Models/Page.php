<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Relations\BelongsTo;

class Page extends Model
{
    public const string TABLE_NAME = 'pages';
    /** @use HasFactory<\Database\Factories\PageFactory> */
    use HasFactory;

    protected $fillable = [
        'page_number',
        'chapter_id',
        'original_page_id',
        'text',
        'type',
        'original_language',
        'target_language',
    ];

    public function chapter(): BelongsTo
    {
        return $this->belongsTo(Chapter::class);
    }
}
