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
        
       Category::create(['category' => 'Despensa',]);
       Category::create(['category' => 'Lácteos, huevos y refrigerados',]);
       Category::create(['category' => 'Frutas y Verduras',]);
       Category::create(['category' => 'Pescados y Mariscos',]);
       Category::create(['category' => 'Carne y Pollo',]);
       Category::create(['category' => 'Panadería y Pastelería',]);
       Category::create(['category' => 'Dulces y postres',]);
       Category::create(['category' => 'Pasabocas',]);
       Category::create(['category' => 'Charcutería',]);
       Category::create(['category' => 'Vinos y Licores',]);
       Category::create(['category' => 'Bebidas',]);
       Category::create(['category' => 'Aseo del Hogar',]);
       Category::create(['category' => 'Cuidado Personal',]);
       Category::create(['category' => 'Belleza',]);
       Category::create(['category' => 'Cuidado de ropa y calzado',]);
       Category::create(['category' => 'Limpieza de cocina',]);
       Category::create(['category' => 'Platos Preparados',]);
       Category::create(['category' => 'Mundo parrilla',]);
       Category::create(['category' => 'Cuidado del bebé',]);

    
    }
}
