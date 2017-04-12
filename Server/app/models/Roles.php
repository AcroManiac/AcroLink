<?php

class Roles extends \Phalcon\Mvc\Model
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
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("acrolink");
        $this->hasMany('id', 'EventPersonLinks', 'roleId', ['alias' => 'EventPersonLinks']);
        $this->hasMany('id', 'PersonRoleLinks', 'roleId', ['alias' => 'PersonRoleLinks']);
        $this->hasMany('id', 'TrainingPersonLinks', 'roleId', ['alias' => 'TrainingPersonLinks']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'Roles';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Roles[]|Roles
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Roles
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
