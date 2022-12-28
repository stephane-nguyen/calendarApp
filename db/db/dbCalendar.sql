-- MySQL Script generated by MySQL Workbench
<<<<<<< HEAD:db/db/dbCalendar.sql
-- Sat Dec 24 17:47:08 2022
=======
-- Sat Dec 24 16:56:23 2022
>>>>>>> db:back/db/dbCalendar.sql
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema default_schema
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbCalendar
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dbCalendar` ;

-- -----------------------------------------------------
-- Schema dbCalendar
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbCalendar` DEFAULT CHARACTER SET utf8 ;
USE `dbCalendar` ;

-- -----------------------------------------------------
-- Table `dbCalendar`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`User` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`User` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Student`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Student` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Student` (
  `User_idUser` INT NOT NULL,
  `idStudent` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idStudent`, `User_idUser`),
  INDEX `fk_Student_User1_idx` (`User_idUser` ASC) ,
  CONSTRAINT `fk_Student_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `dbCalendar`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Teacher`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Teacher` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Teacher` (
  `User_idUser` INT NOT NULL,
  `idTeacher` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idTeacher`, `User_idUser`),
  INDEX `fk_Teacher_User_idx` (`User_idUser` ASC) ,
  CONSTRAINT `fk_Teacher_User`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `dbCalendar`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Subject`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Subject` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Subject` (
  `id_subject` INT NOT NULL AUTO_INCREMENT,
  `name_subject` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_subject`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Speciality`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Speciality` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Speciality` (
  `idSpeciality` INT NOT NULL AUTO_INCREMENT,
  `nameSpeciality` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idSpeciality`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Room`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Room` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Room` (
  `idRoom` INT NOT NULL,
  `capacity` INT NOT NULL,
  PRIMARY KEY (`idRoom`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Exam`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Exam` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Exam` (
  `idExam` INT NOT NULL AUTO_INCREMENT,
  `startDate` DATETIME NOT NULL,
  `duration` INT NOT NULL,
  `Subjects_idSubject` INT NOT NULL,
  `Room_idRoom` INT NOT NULL,
  PRIMARY KEY (`idExam`),
  INDEX `fk_Exam_Subjects1_idx` (`Subjects_idSubject` ASC) ,
  INDEX `fk_Exam_Room1_idx` (`Room_idRoom` ASC) ,
  CONSTRAINT `fk_Exam_Subjects1`
    FOREIGN KEY (`Subjects_idSubject`)
    REFERENCES `dbCalendar`.`Subject` (`id_subject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Exam_Room1`
    FOREIGN KEY (`Room_idRoom`)
    REFERENCES `dbCalendar`.`Room` (`idRoom`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Speciality_has_Subjects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Speciality_has_Subjects` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Speciality_has_Subjects` (
  `Speciality_idSpeciality` INT NOT NULL,
  `Subjects_idSubject` INT NOT NULL,
  PRIMARY KEY (`Speciality_idSpeciality`, `Subjects_idSubject`),
  INDEX `fk_Speciality_has_Subjects_Subjects1_idx` (`Subjects_idSubject` ASC) ,
  INDEX `fk_Speciality_has_Subjects_Speciality1_idx` (`Speciality_idSpeciality` ASC) ,
  CONSTRAINT `fk_Speciality_has_Subjects_Speciality1`
    FOREIGN KEY (`Speciality_idSpeciality`)
    REFERENCES `dbCalendar`.`Speciality` (`idSpeciality`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Speciality_has_Subjects_Subjects1`
    FOREIGN KEY (`Subjects_idSubject`)
    REFERENCES `dbCalendar`.`Subject` (`id_subject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Monitor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Monitor` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Monitor` (
  `Exam_idExam` INT NOT NULL,
  `Teacher_User_idUser` INT NOT NULL,
  PRIMARY KEY (`Exam_idExam`, `Teacher_User_idUser`),
  INDEX `fk_Exam_has_Teacher_Teacher1_idx` (`Teacher_User_idUser` ASC) ,
  INDEX `fk_Exam_has_Teacher_Exam1_idx` (`Exam_idExam` ASC) ,
  CONSTRAINT `fk_Exam_has_Teacher_Exam1`
    FOREIGN KEY (`Exam_idExam`)
    REFERENCES `dbCalendar`.`Exam` (`idExam`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Exam_has_Teacher_Teacher1`
    FOREIGN KEY (`Teacher_User_idUser`)
    REFERENCES `dbCalendar`.`Teacher` (`User_idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCalendar`.`Register`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbCalendar`.`Register` ;

CREATE TABLE IF NOT EXISTS `dbCalendar`.`Register` (
  `Student_User_idUser` INT NOT NULL,
  `Exam_idExam` INT NOT NULL,
  PRIMARY KEY (`Student_User_idUser`, `Exam_idExam`),
  INDEX `fk_Student_has_Exam_Exam1_idx` (`Exam_idExam` ASC) ,
  INDEX `fk_Student_has_Exam_Student1_idx` (`Student_User_idUser` ASC) ,
  CONSTRAINT `fk_Student_has_Exam_Student1`
    FOREIGN KEY (`Student_User_idUser`)
    REFERENCES `dbCalendar`.`Student` (`User_idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_has_Exam_Exam1`
    FOREIGN KEY (`Exam_idExam`)
    REFERENCES `dbCalendar`.`Exam` (`idExam`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
