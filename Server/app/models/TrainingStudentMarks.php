<?php

class TrainingStudentMarks extends \Phalcon\Mvc\Model
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
    protected $trainingPersonId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=20, nullable=false)
     */
    protected $trainingPoseId;

    /**
     *
     * @var integer
     * @Column(type="integer", length=4, nullable=false)
     */
    protected $positionId;

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
     * Method to set the value of field trainingPersonId
     *
     * @param integer $trainingPersonId
     * @return $this
     */
    public function setTrainingPersonId($trainingPersonId)
    {
        $this->trainingPersonId = $trainingPersonId;

        return $this;
    }

    /**
     * Method to set the value of field trainingPoseId
     *
     * @param integer $trainingPoseId
     * @return $this
     */
    public function setTrainingPoseId($trainingPoseId)
    {
        $this->trainingPoseId = $trainingPoseId;

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
     * Returns the value of field trainingPersonId
     *
     * @return integer
     */
    public function getTrainingPersonId()
    {
        return $this->trainingPersonId;
    }

    /**
     * Returns the value of field trainingPoseId
     *
     * @return integer
     */
    public function getTrainingPoseId()
    {
        return $this->trainingPoseId;
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
        $this->belongsTo('trainingPersonId', '\TrainingPersonLinks', 'id', ['alias' => 'TrainingPersonLinks']);
        $this->belongsTo('trainingPoseId', '\TrainingPoseLinks', 'id', ['alias' => 'TrainingPoseLinks']);
        $this->belongsTo('positionId', '\Positions', 'id', ['alias' => 'Positions']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'TrainingStudentMarks';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TrainingStudentMarks[]|TrainingStudentMarks
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TrainingStudentMarks
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
