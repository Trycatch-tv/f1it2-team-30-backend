<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brands extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    //Relacion inversa uno a muchos Brands-Movements
    public function movements()
    {
        return $this->belongsTo(Movements::class);
    }
}
