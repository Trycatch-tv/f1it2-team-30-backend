<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Documents;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Documents::create([
            'document_number' => '0001',
            'document_type' => 'Factura',
            'document_date' => '2023-06-04',
        ]);
    }
}
