<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    //Relacion inversa uno a muchos Documents-Movements
    public function movements()
    {
        return $this->belongsTo(Movements::class);
    }
}
