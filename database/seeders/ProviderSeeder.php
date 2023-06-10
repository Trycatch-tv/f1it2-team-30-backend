<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Providers;

class ProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Providers::create([
            'provider_name' => 'Arroz Diana',
            'provider_contact_phone' => '5716231799',
        ]);
    }
}
