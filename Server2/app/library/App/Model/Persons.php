<?php

namespace App\Model;

use Phalcon\Di;
use App\Constants\Services;
use Phalcon\Mvc\Model\Validator\Email as EmailValidator;

class Persons extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     * @Primary
     * @Identity
     * @Column(type="integer", length=11, nullable=false)
     */
    protected $id;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=false)
     */
    protected $userName;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=false)
     */
    protected $password;

    /**
     *
     * @var string
     * @Column(type="string", nullable=false)
     */
    protected $registerDate;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    protected $firstName;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    protected $secondName;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    protected $phone;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    protected $email;

    /**
     *
     * @var string
     * @Column(type="string", nullable=true)
     */
    protected $birthday;

    /**
     *
     * @var integer
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $levelId;

    /**
     *
     * @var string
     * @Column(type="string", nullable=true)
     */
    protected $practiceStartDate;

    /**
     *
     * @var integer
     * @Column(type="integer", length=6, nullable=true)
     */
    protected $countryId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=11, nullable=true)
     */
    protected $avatarId;

    /**
     *
     * @var string
     * @Column(type="string", nullable=true)
     */
    protected $details;

    /**
     *
     * @var integer
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $statusId;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    protected $userRole;

    /**
     * Method to set the value of field id
     *
     * @param integer $id
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Method to set the value of field userName
     *
     * @param string $userName
     * @return $this
     */
    public function setUserName($userName)
    {
        $this->userName = $userName;

        return $this;
    }

    /**
     * Method to set the value of field password
     *
     * @param string $password
     * @return $this
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Method to set the value of field registerDate
     *
     * @param string $registerDate
     * @return $this
     */
    public function setRegisterDate($registerDate)
    {
        $this->registerDate = $registerDate;

        return $this;
    }

    /**
     * Method to set the value of field firstName
     *
     * @param string $firstName
     * @return $this
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Method to set the value of field secondName
     *
     * @param string $secondName
     * @return $this
     */
    public function setSecondName($secondName)
    {
        $this->secondName = $secondName;

        return $this;
    }

    /**
     * Method to set the value of field phone
     *
     * @param string $phone
     * @return $this
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Method to set the value of field email
     *
     * @param string $email
     * @return $this
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Method to set the value of field birthday
     *
     * @param string $birthday
     * @return $this
     */
    public function setBirthday($birthday)
    {
        $this->birthday = $birthday;

        return $this;
    }

    /**
     * Method to set the value of field levelId
     *
     * @param integer $levelId
     * @return $this
     */
    public function setLevelId($levelId)
    {
        $this->levelId = $levelId;

        return $this;
    }

    /**
     * Method to set the value of field practiceStartDate
     *
     * @param string $practiceStartDate
     * @return $this
     */
    public function setPracticeStartDate($practiceStartDate)
    {
        $this->practiceStartDate = $practiceStartDate;

        return $this;
    }

    /**
     * Method to set the value of field countryId
     *
     * @param integer $countryId
     * @return $this
     */
    public function setCountryId($countryId)
    {
        $this->countryId = $countryId;

        return $this;
    }

    /**
     * Method to set the value of field avatarId
     *
     * @param integer $avatarId
     * @return $this
     */
    public function setAvatar($avatarId)
    {
        $this->avatarId = $avatarId;

        return $this;
    }

    /**
     * Method to set the value of field details
     *
     * @param string $details
     * @return $this
     */
    public function setDetails($details)
    {
        $this->details = $details;

        return $this;
    }

    /**
     * Method to set the value of field statusId
     *
     * @param integer $statusId
     * @return $this
     */
    public function setStatusId($statusId)
    {
        $this->statusId = $statusId;

        return $this;
    }

    /**
     * Method to set the value of field userRole
     *
     * @param string $userRole
     * @return $this
     */
    public function setUserRole($userRole)
    {
        $this->userRole = $userRole;

        return $this;
    }

    /**
     * Returns the value of field id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Returns the value of field userName
     *
     * @return string
     */
    public function getUserName()
    {
        return $this->userName;
    }

    /**
     * Returns the value of field password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Returns the value of field registerDate
     *
     * @return string
     */
    public function getRegisterDate()
    {
        return $this->registerDate;
    }

    /**
     * Returns the value of field firstName
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Returns the value of field secondName
     *
     * @return string
     */
    public function getSecondName()
    {
        return $this->secondName;
    }

    /**
     * Returns the value of field phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Returns the value of field email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Returns the value of field birthday
     *
     * @return string
     */
    public function getBirthday()
    {
        return $this->birthday;
    }

    /**
     * Returns the value of field levelId
     *
     * @return integer
     */
    public function getLevelId()
    {
        return $this->levelId;
    }

    /**
     * Returns the value of field practiceStartDate
     *
     * @return string
     */
    public function getPracticeStartDate()
    {
        return $this->practiceStartDate;
    }

    /**
     * Returns the value of field countryId
     *
     * @return integer
     */
    public function getCountryId()
    {
        return $this->countryId;
    }

    /**
     * Returns the value of field avatarId
     *
     * @return integer
     */
    public function getAvatarId()
    {
        return $this->avatarId;
    }

    /**
     * Returns the value of field details
     *
     * @return string
     */
    public function getDetails()
    {
        return $this->details;
    }

    /**
     * Returns the value of field statusId
     *
     * @return integer
     */
    public function getStatusId()
    {
        return $this->statusId;
    }

    /**
     * Returns the value of field userRole
     *
     * @return string
     */
    public function getUserRole()
    {
        return $this->userRole;
    }

    /**
     * Validations and business logic
     *
     * @return boolean
     */
    public function validation()
    {
        $validator = new Validation();

        $validator->add(
            'email',
            new EmailValidator(
                [
                    'model'   => $this,
                    'message' => 'Please enter a correct email address',
                ]
            )
        );

        return $this->validate($validator);
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema(Di::getDefault()->get(Services::CONFIG)->database->dbname);
        $this->hasMany('id', 'EventPersonLinks', 'personId', ['alias' => 'EventPersonLinks']);
        $this->hasMany('id', 'PersonPersonLinks', 'firstPersonId', ['alias' => 'PersonPersonLinks']);
        $this->hasMany('id', 'PersonPersonLinks', 'secondPersonId', ['alias' => 'PersonPersonLinks']);
        $this->hasMany('id', 'PersonPositionLinks', 'personId', ['alias' => 'PersonPositionLinks']);
        $this->hasMany('id', 'PersonRoleLinks', 'personId', ['alias' => 'PersonRoleLinks']);
        $this->hasMany('id', 'PersonSocialLinks', 'personId', ['alias' => 'PersonSocialLinks']);
        $this->hasMany('id', 'TrainingPersonLinks', 'personId', ['alias' => 'TrainingPersonLinks']);
        $this->belongsTo('avatarId', '\Images', 'id', ['alias' => 'Images']);
        $this->belongsTo('countryId', '\Countries', 'id', ['alias' => 'Countries']);
        $this->belongsTo('statusId', '\Statuses', 'id', ['alias' => 'Statuses']);
        $this->belongsTo('levelId', '\PersonLevels', 'id', ['alias' => 'PersonLevels']);
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Persons[]|Persons
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Persons
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'Persons';
    }

    public function columnMap()
    {
        return [ //parent::columnMap() + [
            'id'                => 'id',
            'userRole'          => 'userRole',
            'email'             => 'email',
            'userName'          => 'userName',
            'firstName'         => 'firstName',
            'secondName'        => 'secondName',
            'password'          => 'password',
            'registerDate'      => 'registerDate',
            'phone'             => 'phone',
            'birthday'          => 'birthday',
            'levelId'           => 'levelId',
            'practiceStartDate' => 'practiceStartDate',
            'countryId'         => 'countryId',
            'avatarId'          => 'avatarId',
            'details'           => 'details',
            'statusId'          => 'statusId'
        ];
    }

}
