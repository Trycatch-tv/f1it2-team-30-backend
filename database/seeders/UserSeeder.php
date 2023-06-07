<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
                'full_name' => 'Juan Acosta',
                'user_email' => 'admin@admin.com',
                'password' => Hash::make('administrador'),
        ])->assignRole('Administrador');
        User::create([
                'full_name' => 'Usuario Prueba',
                'user_email' => 'user@user.com',
                'password' => Hash::make('12345678'),
        ])->assignRole('Empleado');


    }
}
