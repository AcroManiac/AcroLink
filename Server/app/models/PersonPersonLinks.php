<?php

class PersonPersonLinks extends \Phalcon\Mvc\Model
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
     * @var integer
     * @Column(type="integer", length=11, nullable=false)
     */
    protected $firstPersonId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=11, nullable=false)
     */
    protected $secondPersonId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $positionId;

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
     * Method to set the value of field firstPersonId
     *
     * @param integer $firstPersonId
     * @return $this
     */
    public function setFirstPersonId($firstPersonId)
    {
        $this->firstPersonId = $firstPersonId;

        return $this;
    }

    /**
     * Method to set the value of field secondPersonId
     *
     * @param integer $secondPersonId
     * @return $this
     */
    public function setSecondPersonId($secondPersonId)
    {
        $this->secondPersonId = $secondPersonId;

        return $this;
    }

    /**
     * Method to set the value of field positionId
     *
     * @param integer $positionId
     * @return $this
     */
    public function setPositionId($positionId)
    {
        $this->positionId = $positionId;

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
     * Returns the value of field firstPersonId
     *
     * @return integer
     */
    public function getFirstPersonId()
    {
        return $this->firstPersonId;
    }

    /**
     * Returns the value of field secondPersonId
     *
     * @return integer
     */
    public function getSecondPersonId()
    {
        return $this->secondPersonId;
    }

    /**
     * Returns the value of field positionId
     *
     * @return integer
     */
    public function getPositionId()
    {
        return $this->positionId;
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("acrolink");
        $this->belongsTo('firstPersonId', '\Persons', 'id', ['alias' => 'Persons']);
        $this->belongsTo('secondPersonId', '\Persons', 'id', ['alias' => 'Persons']);
        $this->belongsTo('positionId', '\Positions', 'id', ['alias' => 'Positions']);
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return PersonPersonLinks[]|PersonPersonLinks
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return PersonPersonLinks
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
        return 'PersonPersonLinks';
    }

}
