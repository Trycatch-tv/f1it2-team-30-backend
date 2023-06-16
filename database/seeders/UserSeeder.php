<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Ejecuta las semillas de la base de datos.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'full_name' => 'Administrador',
            'email' => 'admin@admin.com',
            'password' => Hash::make('administrador')
        ]);

        User::factory(8)->create();
    }
}
