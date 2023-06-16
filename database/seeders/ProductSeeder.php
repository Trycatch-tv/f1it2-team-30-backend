<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Products::create([
            'product_name' => 'Arroz Diana',
            'product_presentation' => 'bolsa 1kg',
            'id_brand_fk' => '1',
            'id_category_fk' => '1',
            'id_provider_fk' => '1',
            'id_user_fk' => '1',
            'product_date_in' => '2023-06-10',
            'product_date_caducity' => '2023-07-10',
            'product_quantity' => '1',
            'product_buy_price' => '5',
            'product_sell_price' => '10',
        ]);
    }
}
