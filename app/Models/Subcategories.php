<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Subcategories extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'subcategory_name'];

    //Relaciones entre modelos

    //Relación uno a muchos entre Subcategories-Category
    public function category(){
        return $this->hasMany(Category::class);
    }

    //Relación inversa uno a muchos entre Subcategories-Products
    public function products(){
        return $this->belongsTo(Product::class);
    }
}
