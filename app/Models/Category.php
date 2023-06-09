<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;



    protected $guarded = ['id', 'created_at', 'updated_at'];



    //Relación de los modelos

    //Relación inversa uno a muchos entre Category-Subcategories
    public function subcategories(){

        return $this->belongsTo(Subcategories::class);
    }

    //Traerme el category_name en lugar del id
    public function getRouteKeyName()
    {

    }
}
