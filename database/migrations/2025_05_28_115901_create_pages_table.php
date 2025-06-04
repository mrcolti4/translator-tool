<?php

use App\Models\Chapter;
use App\Models\Page;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const string TABLE_NAME = Page::TABLE_NAME;
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->id();
            $table->integer('page_number');
            $table->foreignIdFor(Chapter::class)->constrained()->cascadeOnDelete();
            $table->foreignId('original_page_id')->constrained(self::TABLE_NAME)->cascadeOnDelete();
            $table->text('text');
            $table->string('type');
            $table->string('original_language');
            $table->string('target_language');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(self::TABLE_NAME);
    }
};
