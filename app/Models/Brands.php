<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brands extends Model
{
    use HasFactory;

    protected $fillable = ['brand_name'];

    //Relacion inversa uno a muchos Products-Brands
    public function products()
    {
        return $this->belongsTo(Products::class, 'id_brand_fk');
    }
}
