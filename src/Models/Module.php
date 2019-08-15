<?php

namespace Yassir3wad\NovaModules\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Nova\Resource;

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
            if ($this->class instanceof Resource) {
                $this->type = self::TYPE_RESOURCE;
            } else {
                $this->type = self::TYPE_TOOL;
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

}
