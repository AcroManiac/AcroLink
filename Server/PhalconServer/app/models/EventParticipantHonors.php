<?php

class EventParticipantHonors extends \Phalcon\Mvc\Model
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
    protected $eventPersonId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=6, nullable=false)
     */
    protected $honorId;

    /**
     *
     * @var string
     * @Column(type="string", length=255, nullable=true)
     */
    protected $description;

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
     * Method to set the value of field eventPersonId
     *
     * @param integer $eventPersonId
     * @return $this
     */
    public function setEventPersonId($eventPersonId)
    {
        $this->eventPersonId = $eventPersonId;

        return $this;
    }

    /**
     * Method to set the value of field honorId
     *
     * @param integer $honorId
     * @return $this
     */
    public function setHonorId($honorId)
    {
        $this->honorId = $honorId;

        return $this;
    }

    /**
     * Method to set the value of field description
     *
     * @param string $description
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;

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
     * Returns the value of field eventPersonId
     *
     * @return integer
     */
    public function getEventPersonId()
    {
        return $this->eventPersonId;
    }

    /**
     * Returns the value of field honorId
     *
     * @return integer
     */
    public function getHonorId()
    {
        return $this->honorId;
    }

    /**
     * Returns the value of field description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema($this->getDI()->getShared('config')->database->dbname);
        $this->belongsTo('eventPersonId', '\EventPersonLinks', 'id', ['alias' => 'EventPersonLinks']);
        $this->belongsTo('honorId', '\Honors', 'id', ['alias' => 'Honors']);
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return EventParticipantHonors[]|EventParticipantHonors
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return EventParticipantHonors
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
        return 'EventParticipantHonors';
    }

}
