<?php

namespace App\Controllers;

use PhalconRest\Mvc\Controllers\CrudResourceController;

class PersonsController extends CrudResourceController
{
    public function me()
    {
        die(var_dump($this->userService));
        return $this->createResourceResponse($this->userService->getDetails());
    }

    public function authenticate()
    {
        $username = $this->request->getUsername();
        $password = $this->request->getPassword();

        $session = $this->authManager->loginWithUsernamePassword(\App\Auth\UsernameAccountType::NAME,
            $username,
            $password);

        $transformer = new \App\Transformers\PersonsTransformer;
        $transformer->setModelClass('App\Model\Persons');

        $person = $this->createItemResponse(\App\Model\Persons::findFirst($session->getIdentity()), $transformer);

        $response = [
            'token' => $session->getToken(),
            'expires' => $session->getExpirationTime(),
            'person' => $person
        ];

        return $this->createArrayResponse($response, 'data');
    }

    public function whitelist()
    {
        return [
            'firstName',
            'secondName',
            'password'
        ];
    }
}
