<?php

class TrainingPoseLinks extends \Phalcon\Mvc\Model
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
    protected $trainingId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=11, nullable=false)
     */
    protected $poseId;

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
     * Method to set the value of field poseId
     *
     * @param integer $poseId
     * @return $this
     */
    public function setPoseId($poseId)
    {
        $this->poseId = $poseId;

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
     * Returns the value of field poseId
     *
     * @return integer
     */
    public function getPoseId()
    {
        return $this->poseId;
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema($this->getConfig()->database->dbname);
        $this->hasMany('id', 'TrainingStudentMarks', 'trainingPoseId', ['alias' => 'TrainingStudentMarks']);
        $this->belongsTo('trainingId', '\Trainings', 'id', ['alias' => 'Trainings']);
        $this->belongsTo('poseId', '\Poses', 'id', ['alias' => 'Poses']);
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TrainingPoseLinks[]|TrainingPoseLinks
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TrainingPoseLinks
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
        return 'TrainingPoseLinks';
    }

}
