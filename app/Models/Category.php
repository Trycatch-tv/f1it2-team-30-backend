<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['category_name'];

    //Relacion inversa uno a muchos Products-Category
    public function products()
    {
        return $this->belongsTo(Products::class, 'id_category_fk');
    }
}
