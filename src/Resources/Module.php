<?php

namespace Yassir3wad\NovaModules\Resources;

use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Resource;
use Yassir3wad\NovaModules\Resources\Actions\ModuleAction;
use Yassir3wad\NovaModules\Resources\Filters\StatusFilter;

class Module extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \Yassir3wad\NovaModules\Models\Module::class;

    public static $displayInNavigation = false;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id', 'name', 'class', 'active', 'type', 'updated_at'
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),

            Text::make("Name")->sortable(),

            Text::make("Type")->sortable(),

            Boolean::make('Active')
                ->sortable(),

            DateTime::make("Last Update", "updated_at")->sortable(),
        ];
    }

    public function filters(Request $request)
    {
        return [new StatusFilter()];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [
            (new ModuleAction())->canRun(function () {
                return true;
            })
        ];
    }

    public static function authorizedToCreate(Request $request)
    {
        return false;
    }

    public function authorizedToUpdate(Request $request)
    {
        return false;
    }

    public function authorizedToDelete(Request $request)
    {
        return false;
    }
}
