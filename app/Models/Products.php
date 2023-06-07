<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $guarded = ['id', 'created_at', 'updated_at'];

    //Relaciones entre modelos

    //Relación uno a muchos entre Products-Subcategories
    public function subcategories(){
        return $this->hasMany(Subcategories::class);
    }

    //Relación uno a muchos entre Products-states
    public function states()
    {
        return $this->hasMany(States::class);
    }

    //Relacion inversa uno a muchos Products-Movements
    public function movements(){
        return $this->belongsTo(Movements::class);
    }
}
