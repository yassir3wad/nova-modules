<?php

namespace Yassir3wad\NovaModules\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Nova\Resource;
use Laravel\Nova\Tool;

class Module extends Model
{
    protected $fillable = ['name', 'class', 'active', 'type'];

    protected $casts = ['active' => 'boolean'];

    const TYPE_RESOURCE = 'resource';
    const TYPE_TOOL = 'tool';

    protected $attributes = [
        'active' => true
    ];

    protected static function boot()
    {
        parent::boot();

        self::saving(function (self $model) {
            if (is_subclass_of($model->class, Resource::class)) {
                $model->type = self::TYPE_RESOURCE;
            } elseif (is_subclass_of($model->class, Tool::class)) {
                $model->type = self::TYPE_TOOL;
            } else {
                throw new \Exception("Class {$model->class} is not a resource neither a tool");
            }
        });
    }

    public function isActive()
    {
        return $this->active;
    }

    public function isNotActive()
    {
        return !$this->active;
    }

    public function activate()
    {
        return !$this->active;
    }

    public static function isActiveModule($classOrName)
    {
        return self::where("class", $classOrName)->orWhere("name", $classOrName)->value('active');
    }
}
