<?php

class SocialNetworks extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     * @Primary
     * @Identity
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $id;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=false)
     */
    protected $name;

    /**
     *
     * @var string
     * @Column(type="string", length=255, nullable=false)
     */
    protected $url;

    /**
     *
     * @var string
     * @Column(type="string", length=255, nullable=true)
     */
    protected $logoUrl;

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
     * Method to set the value of field name
     *
     * @param string $name
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;

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
     * Method to set the value of field logoUrl
     *
     * @param string $logoUrl
     * @return $this
     */
    public function setLogoUrl($logoUrl)
    {
        $this->logoUrl = $logoUrl;

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
     * Returns the value of field name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
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
     * Returns the value of field logoUrl
     *
     * @return string
     */
    public function getLogoUrl()
    {
        return $this->logoUrl;
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("acrolink");
        $this->hasMany('id', 'EventSocialLinks', 'networkId', ['alias' => 'EventSocialLinks']);
        $this->hasMany('id', 'PersonSocialLinks', 'networkId', ['alias' => 'PersonSocialLinks']);
        $this->hasMany('id', 'TrainingSocialLinks', 'networkId', ['alias' => 'TrainingSocialLinks']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'SocialNetworks';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return SocialNetworks[]|SocialNetworks
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return SocialNetworks
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
