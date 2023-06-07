<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class States extends Model
{
    use HasFactory;
    protected $guarded = ['id', 'created_at', 'updated_at'];

    //Relaciones entre modelos

    //Relación uno a muchos inversa entre States-Products
    public function products(){
        return $this->belongsTo(Products::class);
    }

    //Relación uno a muchos inversa entre States-Products
    public function movements()
    {
        return $this->belongsTo(Movements::class);
    }
}


