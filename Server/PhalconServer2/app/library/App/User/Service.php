<?php

namespace App\User;

use App\Constants\AclRoles;
use App\Model\Persons;

class Service extends \PhalconApi\User\Service
{
    protected $detailsCache = [];

    public function getRole()
    {
        /** @var Persons $userModel */
        $userModel = $this->getDetails();

        $role = AclRoles::UNAUTHORIZED;

        if($userModel && in_array($userModel->userRole, AclRoles::ALL_ROLES)){
            $role = $userModel->userRole;
        }

        return $role;
    }

    protected function getDetailsForIdentity($identity)
    {
        if (array_key_exists($identity, $this->detailsCache)) {
            return $this->detailsCache[$identity];
        }

        $details = Persons::findFirst((int)$identity);
        $this->detailsCache[$identity] = $details;

        return $details;
    }
}