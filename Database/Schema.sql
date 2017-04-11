CREATE DATABASE  IF NOT EXISTS `acrolink` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `acrolink`;
-- MySQL dump 10.13  Distrib 5.5.54, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: acrolink
-- ------------------------------------------------------
-- Server version	5.5.54-0+deb8u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Countries`
--

DROP TABLE IF EXISTS `Countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Countries` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `code` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EventParticipantHonors`
--

DROP TABLE IF EXISTS `EventParticipantHonors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EventParticipantHonors` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `eventPersonId` bigint(20) NOT NULL,
  `honorId` smallint(6) NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_EventParticipantHonors_1_idx` (`eventPersonId`),
  KEY `fk_EventParticipantHonors_2_idx` (`honorId`),
  CONSTRAINT `fk_EventParticipantHonors_1` FOREIGN KEY (`eventPersonId`) REFERENCES `EventPersonLinks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_EventParticipantHonors_2` FOREIGN KEY (`honorId`) REFERENCES `Honors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EventPersonLinks`
--

DROP TABLE IF EXISTS `EventPersonLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EventPersonLinks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `eventId` bigint(20) NOT NULL,
  `personId` int(11) NOT NULL,
  `roleId` tinyint(4) NOT NULL,
  `statusId` tinyint(4) NOT NULL,
  `mark` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_EventPersonLinks_1_idx` (`eventId`),
  KEY `fk_EventPersonLinks_2_idx` (`personId`),
  KEY `fk_EventPersonLinks_3_idx` (`roleId`),
  KEY `fk_EventPersonLinks_4_idx` (`statusId`),
  CONSTRAINT `fk_EventPersonLinks_1` FOREIGN KEY (`eventId`) REFERENCES `Events` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_EventPersonLinks_2` FOREIGN KEY (`personId`) REFERENCES `Persons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_EventPersonLinks_3` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_EventPersonLinks_4` FOREIGN KEY (`statusId`) REFERENCES `Statuses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EventSocialLinks`
--

DROP TABLE IF EXISTS `EventSocialLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EventSocialLinks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eventId` bigint(20) NOT NULL,
  `networkId` tinyint(4) NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_EventSocialLinks_1_idx` (`eventId`),
  KEY `fk_EventSocialLinks_2_idx` (`networkId`),
  CONSTRAINT `fk_EventSocialLinks_1` FOREIGN KEY (`eventId`) REFERENCES `Events` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_EventSocialLinks_2` FOREIGN KEY (`networkId`) REFERENCES `SocialNetworks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Events`
--

DROP TABLE IF EXISTS `Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Events` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeStart` datetime NOT NULL,
  `timeStop` datetime NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `imageId` int(11) NOT NULL,
  `placeId` int(11) NOT NULL,
  `statusId` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Events_1_idx` (`imageId`),
  KEY `fk_Events_3_idx` (`statusId`),
  KEY `fk_Events_2_idx` (`placeId`),
  CONSTRAINT `fk_Events_1` FOREIGN KEY (`imageId`) REFERENCES `Images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Events_2` FOREIGN KEY (`placeId`) REFERENCES `Places` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Events_3` FOREIGN KEY (`statusId`) REFERENCES `Statuses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Honors`
--

DROP TABLE IF EXISTS `Honors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Honors` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imageUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ImageTypes`
--

DROP TABLE IF EXISTS `ImageTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ImageTypes` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Images_1_idx` (`type`),
  CONSTRAINT `fk_Images_1` FOREIGN KEY (`type`) REFERENCES `ImageTypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `PersonPersonLinks`
--

DROP TABLE IF EXISTS `PersonPersonLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PersonPersonLinks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstPersonId` int(11) NOT NULL,
  `secondPersonId` int(11) NOT NULL,
  `positionId` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_PersonPersonLinks_1_idx` (`firstPersonId`),
  KEY `fk_PersonPersonLinks_2_idx` (`secondPersonId`),
  KEY `fk_PersonPersonLinks_3_idx` (`positionId`),
  CONSTRAINT `fk_PersonPersonLinks_1` FOREIGN KEY (`firstPersonId`) REFERENCES `Persons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PersonPersonLinks_2` FOREIGN KEY (`secondPersonId`) REFERENCES `Persons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PersonPersonLinks_3` FOREIGN KEY (`positionId`) REFERENCES `Positions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `PersonPositionLinks`
--

DROP TABLE IF EXISTS `PersonPositionLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PersonPositionLinks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personId` int(11) DEFAULT NULL,
  `positionId` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `personId_idx` (`personId`),
  KEY `positionId_idx` (`positionId`),
  KEY `fk_PersonPositionLinks_1_idx` (`personId`),
  KEY `fk_PersonPositionLinks_2_idx` (`positionId`),
  CONSTRAINT `fk_PersonPositionLinks_1` FOREIGN KEY (`personId`) REFERENCES `Persons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PersonPositionLinks_2` FOREIGN KEY (`positionId`) REFERENCES `Positions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `PersonRoleLinks`
--

DROP TABLE IF EXISTS `PersonRoleLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PersonRoleLinks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personId` int(11) NOT NULL,
  `roleId` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_PersonRoleLinks_1_idx` (`personId`),
  KEY `fk_PersonRoleLinks_2_idx` (`roleId`),
  CONSTRAINT `fk_PersonRoleLinks_1` FOREIGN KEY (`personId`) REFERENCES `Persons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PersonRoleLinks_2` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `PersonSocialLinks`
--

DROP TABLE IF EXISTS `PersonSocialLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PersonSocialLinks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personId` int(11) NOT NULL,
  `networkId` tinyint(4) NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `personId_idx` (`personId`),
  KEY `networkId_idx` (`networkId`),
  CONSTRAINT `fk_PersonSocialLinks_1` FOREIGN KEY (`networkId`) REFERENCES `SocialNetworks` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_PersonSocialLinks_2` FOREIGN KEY (`personId`) REFERENCES `Persons` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Persons`
--

DROP TABLE IF EXISTS `Persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `registerDate` datetime NOT NULL,
  `firstName` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `secondName` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `country` smallint(6) DEFAULT NULL,
  `avatar` int(11) DEFAULT NULL,
  `details` mediumtext COLLATE utf8mb4_unicode_ci,
  `userRole` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Persons_1_idx` (`avatar`),
  KEY `fk_Persons_2_idx` (`country`),
  CONSTRAINT `fk_Persons_1` FOREIGN KEY (`avatar`) REFERENCES `Images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Persons_2` FOREIGN KEY (`country`) REFERENCES `Countries` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `PlaceImageLink`
--

DROP TABLE IF EXISTS `PlaceImageLink`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PlaceImageLink` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `placeId` int(11) NOT NULL,
  `imageId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_PlaceImageLink_1_idx` (`placeId`),
  KEY `fk_PlaceImageLink_2_idx` (`imageId`),
  CONSTRAINT `fk_PlaceImageLink_1` FOREIGN KEY (`placeId`) REFERENCES `Places` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PlaceImageLink_2` FOREIGN KEY (`imageId`) REFERENCES `Images` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Places`
--

DROP TABLE IF EXISTS `Places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Places` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `geoLocation` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `PoseTypes`
--

DROP TABLE IF EXISTS `PoseTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PoseTypes` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Poses`
--

DROP TABLE IF EXISTS `Poses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Poses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `typeId` tinyint(4) DEFAULT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `imageId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Poses_1_idx` (`typeId`),
  KEY `fk_Poses_2_idx` (`imageId`),
  CONSTRAINT `fk_Poses_1` FOREIGN KEY (`typeId`) REFERENCES `PoseTypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Poses_2` FOREIGN KEY (`imageId`) REFERENCES `Images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Positions`
--

DROP TABLE IF EXISTS `Positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Positions` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Roles`
--

DROP TABLE IF EXISTS `Roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Roles` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `SocialNetworks`
--

DROP TABLE IF EXISTS `SocialNetworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SocialNetworks` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logoUrl` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Statuses`
--

DROP TABLE IF EXISTS `Statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Statuses` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `TrainingPersonLinks`
--

DROP TABLE IF EXISTS `TrainingPersonLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TrainingPersonLinks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `trainingId` bigint(20) NOT NULL,
  `personId` int(11) NOT NULL,
  `roleId` tinyint(4) NOT NULL,
  `statusId` tinyint(4) NOT NULL,
  `mark` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_TrainingPersonLinks_1_idx` (`trainingId`),
  KEY `fk_TrainingPersonLinks_2_idx` (`personId`),
  KEY `fk_TrainingPersonLinks_3_idx` (`roleId`),
  KEY `fk_TrainingPersonLinks_4_idx` (`statusId`),
  CONSTRAINT `fk_TrainingPersonLinks_1` FOREIGN KEY (`trainingId`) REFERENCES `Trainings` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_TrainingPersonLinks_2` FOREIGN KEY (`personId`) REFERENCES `Persons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_TrainingPersonLinks_3` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_TrainingPersonLinks_4` FOREIGN KEY (`statusId`) REFERENCES `Statuses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `TrainingPoseLinks`
--

DROP TABLE IF EXISTS `TrainingPoseLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TrainingPoseLinks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `trainingId` bigint(20) NOT NULL,
  `poseId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_TrainingPoseLinks_1_idx` (`trainingId`),
  KEY `fk_TrainingPoseLinks_2_idx` (`poseId`),
  CONSTRAINT `fk_TrainingPoseLinks_1` FOREIGN KEY (`trainingId`) REFERENCES `Trainings` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_TrainingPoseLinks_2` FOREIGN KEY (`poseId`) REFERENCES `Poses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `TrainingSocialLinks`
--

DROP TABLE IF EXISTS `TrainingSocialLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TrainingSocialLinks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `trainingId` bigint(20) NOT NULL,
  `networkId` tinyint(4) NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_TrainingSocialLinks_1_idx` (`trainingId`),
  KEY `fk_TrainingSocialLinks_2_idx` (`networkId`),
  CONSTRAINT `fk_TrainingSocialLinks_1` FOREIGN KEY (`trainingId`) REFERENCES `Trainings` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_TrainingSocialLinks_2` FOREIGN KEY (`networkId`) REFERENCES `SocialNetworks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `TrainingStudentMarks`
--

DROP TABLE IF EXISTS `TrainingStudentMarks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TrainingStudentMarks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `trainingPersonId` bigint(20) NOT NULL,
  `trainingPoseId` bigint(20) NOT NULL,
  `positionId` tinyint(4) NOT NULL,
  `mark` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_TrainingStudentMarks_1_idx` (`trainingPersonId`),
  KEY `fk_TrainingStudentMarks_2_idx` (`trainingPoseId`),
  KEY `fk_TrainingStudentMarks_3_idx` (`positionId`),
  CONSTRAINT `fk_TrainingStudentMarks_1` FOREIGN KEY (`trainingPersonId`) REFERENCES `TrainingPersonLinks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_TrainingStudentMarks_2` FOREIGN KEY (`trainingPoseId`) REFERENCES `TrainingPoseLinks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_TrainingStudentMarks_3` FOREIGN KEY (`positionId`) REFERENCES `Positions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Trainings`
--

DROP TABLE IF EXISTS `Trainings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Trainings` (
  `id` bigint(20) NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeStart` datetime NOT NULL,
  `timeStop` datetime NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `imageId` int(11) DEFAULT NULL,
  `placeId` int(11) DEFAULT NULL,
  `statusId` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Trainings_1_idx` (`imageId`),
  KEY `fk_Trainings_2_idx` (`placeId`),
  KEY `fk_Trainings_3_idx` (`statusId`),
  CONSTRAINT `fk_Trainings_1` FOREIGN KEY (`imageId`) REFERENCES `Images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Trainings_2` FOREIGN KEY (`placeId`) REFERENCES `Places` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Trainings_3` FOREIGN KEY (`statusId`) REFERENCES `Statuses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'acrolink'
--

--
-- Dumping routines for database 'acrolink'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-11 19:12:59
