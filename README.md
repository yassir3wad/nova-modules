# Laravel Nova Modules

This package provides the ability to manager nova resources and tools, so you can enable and disable any resource or module. Disabling the resource or tool
means that they will not be accessible anymore.
## Installation

Install the package via composer using:

```
composer require yassir3wad/nova-moudles
```

then publish the `ModulesSeeder` to add your insert your resource and tools into the database.


```
php artisan vendor:publish --provider="Yassir3wad\NovaModules\ToolServiceProvider" --tag=seeds
```

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
##  Screenshots

Modules List
![Modules List](https://raw.githubusercontent.com/yassir3wad/nova-modules/master/modules.png)

Change Modules Status (active-inactive)
![Modules List](https://raw.githubusercontent.com/yassir3wad/nova-modules/master/status.png)

Then Nova looks like
![Modules List](https://raw.githubusercontent.com/yassir3wad/nova-modules/master/results.png)
