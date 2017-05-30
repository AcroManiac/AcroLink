<?php

namespace App\Transformers;

use App\Model\Persons;
use PhalconRest\Transformers\ModelTransformer;

class PersonsTransformer extends ModelTransformer
{
    protected $modelClass = Persons::class;

    protected function excludedProperties()
    {
        return ['password'];
    }
}