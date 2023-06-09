<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Subcategories;

class SubcategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Subcategories::create([
            'subcategory_name' => 'Arroz y granos',
            'id_category_fk' => '1'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Aceite',
            'id_category_fk' => '1'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Leche',
            'id_category_fk' => '2'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Huevos',
            'id_category_fk' => '2'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Hortalizas',
            'id_category_fk' => '3'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Frutas',
            'id_category_fk' => '3'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Pescados y Mariscos',
            'id_category_fk' => '4'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Carne Res',
            'id_category_fk' => '5'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Panadería Artesanal',
            'id_category_fk' => '6'
        ]);
        Subcategories::create([
            'subcategory_name' => 'Dulces y postres',
            'id_category_fk' => '7'
        ]);
    }
}
