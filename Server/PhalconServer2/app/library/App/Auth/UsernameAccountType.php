<?php

namespace App\Auth;

use App\Constants\Services;
use Phalcon\Di;

class UsernameAccountType implements \PhalconApi\Auth\AccountType
{
    const NAME = "username";

    public function login($data)
    {
        /** @var \Phalcon\Security $security */
        $security = Di::getDefault()->get(Services::SECURITY);

        $username = $data[Manager::LOGIN_DATA_USERNAME];
        $password = $data[Manager::LOGIN_DATA_PASSWORD];

        /** @var \App\Model\Persons $person */
        $person = \App\Model\Persons::findFirst([
            'conditions' => 'userName = :username:',
            'bind' => ['username' => $username]
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
