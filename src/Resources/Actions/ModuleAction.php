<?php

namespace Yassir3wad\NovaModules\Resources\Actions;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\ActionFields;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Laravel\Nova\Fields\Boolean;
use Yassir3wad\NovaModules\Models\Module;

class ModuleAction extends Action
{
    use InteractsWithQueue, Queueable, SerializesModels;

    public $name = "Change Status";

    /**
     * Perform the action on the given models.
     *
     * @param \Laravel\Nova\Fields\ActionFields $fields
     * @param \Illuminate\Support\Collection $models
     * @return mixed
     */
    public function handle(ActionFields $fields, Collection $models)
    {
        Module::whereIn("id", $models->pluck("id")->toArray())->update(['active' => !!$fields->get("is_active")]);

        return self::redirect($this->getRedirectedUrl());
    }

    /**
     * Get the fields available on the action.
     *
     * @return array
     */
    public function fields()
    {
        return [
            Boolean::make("Is Active")->rules("required", "boolean")
        ];
    }

    private function getRedirectedUrl()
    {
        $novaPath = rtrim(config("nova.path"), "/");
        return rtrim(config("nova.url"), "/") . ($novaPath ? "/$novaPath" : "") . "/modules";
    }
}
