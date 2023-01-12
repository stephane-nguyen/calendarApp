-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 12 jan. 2023 à 18:46
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dbcalendar`
--

-- --------------------------------------------------------

--
-- Structure de la table `exam`
--

DROP TABLE IF EXISTS `exam`;
CREATE TABLE IF NOT EXISTS `exam` (
  `idExam` int(11) NOT NULL AUTO_INCREMENT,
  `startDate` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `Room_idRoom` int(11) NOT NULL,
  `Subjects_idSubject` int(11) NOT NULL,
  PRIMARY KEY (`idExam`),
  KEY `fk_Exam_Room1_idx` (`Room_idRoom`),
  KEY `fk_Exam_Subjects1_idx` (`Subjects_idSubject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequences`
--

DROP TABLE IF EXISTS `hibernate_sequences`;
CREATE TABLE IF NOT EXISTS `hibernate_sequences` (
  `sequence_name` varchar(255) NOT NULL,
  `next_val` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sequence_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `hibernate_sequences`
--

INSERT INTO `hibernate_sequences` (`sequence_name`, `next_val`) VALUES
('default', 150);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id_role` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id_role`, `name`) VALUES
(1, 'Nothing'),
(2, 'Student'),
(3, 'Teacher');

-- --------------------------------------------------------

--
-- Structure de la table `room`
--

DROP TABLE IF EXISTS `room`;
CREATE TABLE IF NOT EXISTS `room` (
  `idRoom` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  PRIMARY KEY (`idRoom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `speciality`
--

DROP TABLE IF EXISTS `speciality`;
CREATE TABLE IF NOT EXISTS `speciality` (
  `idSpeciality` int(11) NOT NULL AUTO_INCREMENT,
  `nameSpeciality` varchar(45) NOT NULL,
  `id_speciality` int(11) NOT NULL,
  `name_speciality` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idSpeciality`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `speciality_has_subjects`
--

DROP TABLE IF EXISTS `speciality_has_subjects`;
CREATE TABLE IF NOT EXISTS `speciality_has_subjects` (
  `Speciality_idSpeciality` int(11) NOT NULL,
  `Subjects_idSubject` int(11) NOT NULL,
  `speciality_id_speciality` int(11) NOT NULL,
  `subjects_id_subject` int(11) NOT NULL,
  PRIMARY KEY (`Speciality_idSpeciality`,`Subjects_idSubject`),
  KEY `fk_Speciality_has_Subjects_Subjects1_idx` (`Subjects_idSubject`),
  KEY `fk_Speciality_has_Subjects_Speciality_idx` (`Speciality_idSpeciality`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `subject`
--

DROP TABLE IF EXISTS `subject`;
CREATE TABLE IF NOT EXISTS `subject` (
  `id_subject` int(11) NOT NULL,
  `name_subject` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
CREATE TABLE IF NOT EXISTS `subjects` (
  `idSubject` int(11) NOT NULL AUTO_INCREMENT,
  `nameSubject` varchar(45) NOT NULL,
  PRIMARY KEY (`idSubject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `email`, `firstname`, `lastname`, `password`, `role`) VALUES
(1, 'graci@tapeur.fr', 'Graci', 'TAPEUR', 'gracita', 2),
(2, 'alex@sansdrap.fr', 'Alex', 'Sansdrap', 'alexandre', 1),
(3, 'Steph@anatik.fr', 'Steph', 'anatik', 'stephane', 1),
(4, 'jay-b@sy.fr', 'Jay-B', 'sy', 'jb', 1),
(5, 'sebas@tien.fr', 'sebas', 'tient', 'sebastien', 3),
(6, 'infor@matic.fr', 'infor', 'matic', 'informatique', 1),
(7, 'napoleonbonapart.fr', 'Napoleon', 'bonappart', 'napoleon', 3),
(8, 'emmanuel@macaron.fr', 'Emmanuel', 'macaron', 'emmanuel', 1),
(9, 'isaac@newton.fr', 'isaac', 'newton', 'isaac', 1),
(10, 'lavoi@zier.fr', 'lavoi', 'zier', 'lavoisier', 1),
(11, 'peeta@gore.fr', 'peeta', 'Gore', 'pythagore', 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `exam`
--
ALTER TABLE `exam`
  ADD CONSTRAINT `fk_Exam_Room1` FOREIGN KEY (`Room_idRoom`) REFERENCES `room` (`idRoom`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Exam_Subjects1` FOREIGN KEY (`Subjects_idSubject`) REFERENCES `subjects` (`idSubject`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `speciality_has_subjects`
--
ALTER TABLE `speciality_has_subjects`
  ADD CONSTRAINT `fk_Speciality_has_Subjects_Speciality` FOREIGN KEY (`Speciality_idSpeciality`) REFERENCES `speciality` (`idSpeciality`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Speciality_has_Subjects_Subjects1` FOREIGN KEY (`Subjects_idSubject`) REFERENCES `subjects` (`idSubject`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
