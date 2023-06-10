<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movements;

class MovementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Movements::create([
            'price_unitary' => '8',
            'lote' => '0002',
            'movement_caducity' => '2023-06-30',
            'movement_quantity' => '30',
            'id_provider_fk' => '1',
            'id_brands_fk' => '1',
            'id_users_fk' => '1',
            'id_document_fk' => '1',
            'id_type_movement_fk' => '1',
            'id_product_fk' => '1',
            'id_state_fk' => '1',
        ]);
    }
}
