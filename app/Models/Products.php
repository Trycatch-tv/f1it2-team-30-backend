<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $fillable = ['product_name', 'product_presentation', 'id_brand_fk', 'id_category_fk', 'id_provider_fk', 'id_user_fk', 'product_date_in', 'product_date_caducity', 'product_quantity', 'product_buy_price', 'product_sell_price'];

    //Relación uno a muchos entre Products-Brands
    public function brands()
    {
        return $this->hasMany(Brands::class, 'id_brand_fk', 'id');
    }

    //Relación uno a muchos entre Products-Category
    public function category()
    {
        return $this->hasMany(Category::class, 'id_category_fk', 'id');
    }

    //Relación uno a muchos entre Products-Providers
    public function providers()
    {
        return $this->hasMany(Providers::class, 'id_provider_fk', 'id');
    }

    //Relación uno a muchos entre Products-Users
    public function user()
    {
        return $this->hasMany(User::class, 'id_user_fk', 'id');
    }
}
