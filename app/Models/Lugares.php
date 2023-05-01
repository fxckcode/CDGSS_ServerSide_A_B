<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lugares extends Model
{
    use HasFactory;
    protected $table = 'lugares';
    protected $fillable = [
        'id',
        'nombre',
        'descripcion',
        'imagen'
    ];

    public $timestamps = false;
}
