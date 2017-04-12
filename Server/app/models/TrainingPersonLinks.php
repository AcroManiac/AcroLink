<?php

class TrainingPersonLinks extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     * @Primary
     * @Identity
     * @Column(type="integer", length=20, nullable=false)
     */
    protected $id;

    /**
     *
     * @var integer
     * @Column(type="integer", length=20, nullable=false)
     */
    protected $trainingId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=11, nullable=false)
     */
    protected $personId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $roleId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $statusId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $mark;

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
     * Method to set the value of field trainingId
     *
     * @param integer $trainingId
     * @return $this
     */
    public function setTrainingId($trainingId)
    {
        $this->trainingId = $trainingId;

        return $this;
    }

    /**
     * Method to set the value of field personId
     *
     * @param integer $personId
     * @return $this
     */
    public function setPersonId($personId)
    {
        $this->personId = $personId;

        return $this;
    }

    /**
     * Method to set the value of field roleId
     *
     * @param integer $roleId
     * @return $this
     */
    public function setRoleId($roleId)
    {
        $this->roleId = $roleId;

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
     * Method to set the value of field mark
     *
     * @param integer $mark
     * @return $this
     */
    public function setMark($mark)
    {
        $this->mark = $mark;

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
     * Returns the value of field trainingId
     *
     * @return integer
     */
    public function getTrainingId()
    {
        return $this->trainingId;
    }

    /**
     * Returns the value of field personId
     *
     * @return integer
     */
    public function getPersonId()
    {
        return $this->personId;
    }

    /**
     * Returns the value of field roleId
     *
     * @return integer
     */
    public function getRoleId()
    {
        return $this->roleId;
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
     * Returns the value of field mark
     *
     * @return integer
     */
    public function getMark()
    {
        return $this->mark;
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("acrolink");
        $this->hasMany('id', 'TrainingStudentMarks', 'trainingPersonId', ['alias' => 'TrainingStudentMarks']);
        $this->belongsTo('trainingId', '\Trainings', 'id', ['alias' => 'Trainings']);
        $this->belongsTo('personId', '\Persons', 'id', ['alias' => 'Persons']);
        $this->belongsTo('roleId', '\Roles', 'id', ['alias' => 'Roles']);
        $this->belongsTo('statusId', '\Statuses', 'id', ['alias' => 'Statuses']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'TrainingPersonLinks';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TrainingPersonLinks[]|TrainingPersonLinks
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TrainingPersonLinks
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
