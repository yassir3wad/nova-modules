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
        Module::firstOrCreate([
            'name' => 'Themes',
            'class' => Yassir3wad\NovaTheme\NovaTheme::class
        ]);

        Module::firstOrCreate([
            'name' => 'Settings',
            'class' => Yassir3wad\Settings\SettingsTool::class,
            'active' => false
        ]);

        Module::firstOrCreate([
            'name' => 'Posts',
            'class' => App\Nova\Post::class,
        ], [
            'active' => false
        ]);
    }
}
