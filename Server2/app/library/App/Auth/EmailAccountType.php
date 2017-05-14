<?php

namespace App\Auth;

use App\Constants\Services;
use Phalcon\Di;

class EmailAccountType implements \PhalconApi\Auth\AccountType
{
    const NAME = "username";

    public function login($data)
    {
        /** @var \Phalcon\Security $security */
        $security = Di::getDefault()->get(Services::SECURITY);

        $email = $data[Manager::LOGIN_DATA_EMAIL];
        $password = $data[Manager::LOGIN_DATA_PASSWORD];

        /** @var \App\Model\Persons $person */
        $person = \App\Model\Persons::findFirst([
            'conditions' => 'email = :email:',
            'bind' => ['email' => $email]
        ]);

        if (!$person) {
            return null;
        }

        if (!$security->checkHash($password, $person->password)) {
            return null;
        }

        return (string)$person->id;
    }

    public function authenticate($identity)
    {
        return \App\Model\Persons::count([
            'conditions' => 'id = :id:',
            'bind' => ['id' => (int)$identity]
        ]) > 0;
    }
}