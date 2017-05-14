<?php

namespace App\Resources;

use PhalconRest\Api\ApiResource;
use PhalconRest\Api\ApiEndpoint;
use App\Model\Persons;
use App\Transformers\PersonsTransformer;
use App\Controllers\PersonsController;
use App\Constants\AclRoles;

class PersonsResource extends ApiResource {

    public function initialize()
    {
        $this
            ->name('Persons')
            ->model(Persons::class)
            ->expectsJsonData()
            ->transformer(PersonsTransformer::class)
            ->handler(PersonsController::class)
            ->itemKey('person')
            ->collectionKey('persons')
            ->deny(AclRoles::UNAUTHORIZED, AclRoles::USER)

            ->endpoint(ApiEndpoint::all()
                ->allow(AclRoles::USER)
                ->description('Returns all registered users')
            )
            ->endpoint(ApiEndpoint::get('/me', 'me')
                ->allow(AclRoles::USER)
                ->description('Returns the currently logged in user')
            )
            ->endpoint(ApiEndpoint::post('/authenticate', 'authenticate')
                ->allow(AclRoles::UNAUTHORIZED)
                ->deny(AclRoles::AUTHORIZED)
                ->description('Authenticates user credentials provided in the authorization header and returns an access token')
                ->exampleResponse([
                    'token' => 'co126bbm40wqp41i3bo7pj1gfsvt9lp6',
                    'expires' => 1451139067
                ])
            );
    }
}