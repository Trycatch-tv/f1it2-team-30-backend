<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type_movement extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    //Relacion inversa uno a muchos Type_movemnets-Movements
    public function movements()
    {
        return $this->belongsTo(Movements::class);
    }
}
