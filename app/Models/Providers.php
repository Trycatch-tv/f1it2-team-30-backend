<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Providers extends Model
{
    use HasFactory;
    protected $fillable = ['provider_name'];

    //Relacion inversa uno a muchos Products-Providers
    public function products()
    {
        return $this->belongsTo(Products::class);
    }

}
