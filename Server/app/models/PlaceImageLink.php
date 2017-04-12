<?php

class PlaceImageLink extends \Phalcon\Mvc\Model
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
    protected $placeId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=11, nullable=false)
     */
    protected $imageId;

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
     * Method to set the value of field placeId
     *
     * @param integer $placeId
     * @return $this
     */
    public function setPlaceId($placeId)
    {
        $this->placeId = $placeId;

        return $this;
    }

    /**
     * Method to set the value of field imageId
     *
     * @param integer $imageId
     * @return $this
     */
    public function setImageId($imageId)
    {
        $this->imageId = $imageId;

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
     * Returns the value of field placeId
     *
     * @return integer
     */
    public function getPlaceId()
    {
        return $this->placeId;
    }

    /**
     * Returns the value of field imageId
     *
     * @return integer
     */
    public function getImageId()
    {
        return $this->imageId;
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("acrolink");
        $this->belongsTo('placeId', '\Places', 'id', ['alias' => 'Places']);
        $this->belongsTo('imageId', '\Images', 'id', ['alias' => 'Images']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'PlaceImageLink';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return PlaceImageLink[]|PlaceImageLink
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return PlaceImageLink
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
