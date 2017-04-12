<?php

class Images extends \Phalcon\Mvc\Model
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
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $type;

    /**
     *
     * @var string
     * @Column(type="string", length=255, nullable=false)
     */
    protected $url;

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
     * Method to set the value of field type
     *
     * @param integer $type
     * @return $this
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Method to set the value of field url
     *
     * @param string $url
     * @return $this
     */
    public function setUrl($url)
    {
        $this->url = $url;

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
     * Returns the value of field type
     *
     * @return integer
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Returns the value of field url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("acrolink");
        $this->hasMany('id', 'Events', 'imageId', ['alias' => 'Events']);
        $this->hasMany('id', 'Persons', 'avatar', ['alias' => 'Persons']);
        $this->hasMany('id', 'PlaceImageLink', 'imageId', ['alias' => 'PlaceImageLink']);
        $this->hasMany('id', 'Poses', 'imageId', ['alias' => 'Poses']);
        $this->hasMany('id', 'Trainings', 'imageId', ['alias' => 'Trainings']);
        $this->belongsTo('type', '\ImageTypes', 'id', ['alias' => 'ImageTypes']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'Images';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Images[]|Images
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Images
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
