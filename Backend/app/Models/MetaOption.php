<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MetaOption extends Model
{
    use HasFactory;

    protected $fillable = [
        'meta_id',
        'option_id',
        'option_key',
        'option_value',
    ];

}
