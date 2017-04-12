<?php

class TrainingSocialLinks extends \Phalcon\Mvc\Model
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
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $networkId;

    /**
     *
     * @var string
     * @Column(type="string", length=255, nullable=true)
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
     * Method to set the value of field networkId
     *
     * @param integer $networkId
     * @return $this
     */
    public function setNetworkId($networkId)
    {
        $this->networkId = $networkId;

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
     * Returns the value of field trainingId
     *
     * @return integer
     */
    public function getTrainingId()
    {
        return $this->trainingId;
    }

    /**
     * Returns the value of field networkId
     *
     * @return integer
     */
    public function getNetworkId()
    {
        return $this->networkId;
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
        $this->belongsTo('trainingId', '\Trainings', 'id', ['alias' => 'Trainings']);
        $this->belongsTo('networkId', '\SocialNetworks', 'id', ['alias' => 'SocialNetworks']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'TrainingSocialLinks';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TrainingSocialLinks[]|TrainingSocialLinks
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TrainingSocialLinks
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
