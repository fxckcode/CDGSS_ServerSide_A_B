<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            'id' => 1,
            'nombre' => 'administrador',
            'email' => 'admin@colombia.co',
            'password' => bcrypt('adminpass'),
            'rol' => 1
        ]);


        User::insert([
            'id' => 2,
            'nombre' => 'john doe',
            'email' => 'johndoe@gmail.com',
            'password' => bcrypt('johnpass'),
            'rol' => 2
        ]);
    }   
}
