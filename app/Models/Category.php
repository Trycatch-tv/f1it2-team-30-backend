<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;



    protected $fillable = ['id', 'category_name', 'created_at'];



    //Relación de los modelos

    //Relación inversa uno a muchos entre Category-Subcategories
    public function subcategories(){

        return $this->belongsTo(Subcategories::class);
    }


}
