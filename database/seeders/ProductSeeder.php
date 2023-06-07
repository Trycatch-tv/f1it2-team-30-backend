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
            'product_description' => 'Arroz Cocina',
            'product_presentation' => 'bolsa 1kg',
            'sku' => '1234567890ab',
            'id_subcategory_fk' => '1',
            'id_state_fk' => '1'
        ]);
    }
}
