# Laravel Nova Modules

This package provides ability to manager nova resources and tools, so you can enable and disable any resource or module.

## Installation

Install the package via composer using:

```
composer require yassir3wad/nova-moudles
```

then publish the `ModulesSeeder` to add your insert your resource and tools into the database.


## Usage

1. Add the tool into the tools array in your `NovaServiceProvider` class:
```php
<?php
use Yassir3wad\NovaModules\NovaModules;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
      public function tools()
       {
           return [
               NovaModules::make()
                ];
        }
}
```

2. Call the `eliminateResourcesAndTools` function from the `ToolServiceProvider` in the boot method in your `NovaServiceProvider`
```php
<?php
use Yassir3wad\NovaModules\ToolServiceProvider;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    public function boot()
    {
        parent::boot();
        ToolServiceProvider::eliminateResourcesAndTools();
    }
}
```

![Screenshot](https://raw.githubusercontent.com/yassir3wad/nova-modules/master/modules.PNG)
