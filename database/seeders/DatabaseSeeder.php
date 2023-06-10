<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(SubcategorySeeder::class);
        $this->call(StateSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(DocumentSeeder::class);
        $this->call(ProviderSeeder::class);
        $this->call(TypeMovementSeeder::class);
        $this->call(BrandSeeder::class);
        $this->call(MovementSeeder::class);

    }
}
