<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create(['category_name' => 'Despensa',]);
        Category::create(['category_name' => 'Lácteos, huevos y refrigerados',]);
        Category::create(['category_name' => 'Frutas y Verduras',]);
        Category::create(['category_name' => 'Pescados y Mariscos',]);
        Category::create(['category_name' => 'Carne y Pollo',]);
        Category::create(['category_name' => 'Panadería y Pastelería',]);
        Category::create(['category_name' => 'Dulces y postres',]);
        Category::create(['category_name' => 'Pasabocas',]);
        Category::create(['category_name' => 'Charcutería',]);
        Category::create(['category_name' => 'Vinos y Licores',]);
        Category::create(['category_name' => 'Bebidas',]);
        Category::create(['category_name' => 'Aseo del Hogar',]);
        Category::create(['category_name' => 'Cuidado Personal',]);
        Category::create(['category_name' => 'Belleza',]);
        Category::create(['category_name' => 'Cuidado de ropa y calzado',]);
        Category::create(['category_name' => 'Limpieza de cocina',]);
        Category::create(['category_name' => 'Platos Preparados',]);
        Category::create(['category_name' => 'Mundo parrilla',]);
        Category::create(['category_name' => 'Cuidado del bebé',]);
    }
}
