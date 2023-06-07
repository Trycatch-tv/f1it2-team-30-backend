<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movements extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    //Relaciones entre modelos

    //Relación uno a muchos entre Movements-Products
    public function products(){
        return $this->hasMany(Products::class);
    }

    //Relación uno a muchos entre Movements-Documents
    public function documents()
    {
        return $this->hasMany(Documents::class);
    }

    //Relación uno a muchos entre Movements-Brands
    public function brands()
    {
        return $this->hasMany(Brands::class);
    }

    //Relación uno a muchos entre Movements-Providers
    public function providers()
    {
        return $this->hasMany(Providers::class);
    }

    //Relación uno a muchos entre Movements-Type_movements
    public function type_movements()
    {
        return $this->hasMany(type_movements::class);
    }

    //Relación uno a muchos entre Movemets-states
    public function states()
    {
        return $this->hasMany(States::class);
    }

    //Relación uno a muchos entre Movemets-Users
    public function users()
    {
        return $this->hasMany(Users::class);
    }
}
