<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Type_movement;

class TypeMovementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Type_movement::create([
            'type_movement_name' => 'Ingreso',
        ]);
        Type_movement::create([
            'type_movement_name' => 'Egreso',
        ]);
    }
}
