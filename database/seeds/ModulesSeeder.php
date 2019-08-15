<?php

use Illuminate\Database\Seeder;
use \Yassir3wad\NovaModules\Models\Module;

class ModulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Module::create([
            'name' => 'Posts',
            'class' => App\Nova\Post::class
        ]);

        Module::create([
            'name' => 'Settings',
            'class' => Yassir3wad\Settings\SettingsTool::class,
            'active' => false
        ]);
    }
}
