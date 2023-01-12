-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 12 jan. 2023 à 20:52
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
-- Base de données : `db_calendar`
--

-- --------------------------------------------------------

--
-- Structure de la table `exam`
--

DROP TABLE IF EXISTS `exam`;
CREATE TABLE IF NOT EXISTS `exam` (
  `id_exam` int(11) NOT NULL AUTO_INCREMENT,
  `duration` int(11) NOT NULL,
  `subjects_id_subjects` int(11) NOT NULL,
  `room_id_room` int(11) NOT NULL,
  `start_date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_exam`),
  KEY `fk_Exam_Subjects1_idx` (`subjects_id_subjects`),
  KEY `fk_Exam_Room1_idx` (`room_id_room`)
) ENGINE=InnoDB AUTO_INCREMENT=353 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `exam`
--

INSERT INTO `exam` (`id_exam`, `duration`, `subjects_id_subjects`, `room_id_room`, `start_date`) VALUES
(1, 2, 1, 1, '2023-01-11 10:32:08.000000'),
(2, 3, 5, 2, '2023-01-26 10:32:39.000000');

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
('default', 450);

-- --------------------------------------------------------

--
-- Structure de la table `monitor`
--

DROP TABLE IF EXISTS `monitor`;
CREATE TABLE IF NOT EXISTS `monitor` (
  `Exam_idExam` int(11) NOT NULL,
  `Teacher_User_idUser` int(11) NOT NULL,
  PRIMARY KEY (`Exam_idExam`,`Teacher_User_idUser`),
  KEY `fk_Exam_has_Teacher_Teacher1_idx` (`Teacher_User_idUser`),
  KEY `fk_Exam_has_Teacher_Exam1_idx` (`Exam_idExam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `monitor`
--

INSERT INTO `monitor` (`Exam_idExam`, `Teacher_User_idUser`) VALUES
(1, 7),
(2, 11);

-- --------------------------------------------------------

--
-- Structure de la table `register`
--

DROP TABLE IF EXISTS `register`;
CREATE TABLE IF NOT EXISTS `register` (
  `Student_User_idUser` int(11) NOT NULL,
  `Exam_idExam` int(11) NOT NULL,
  PRIMARY KEY (`Student_User_idUser`,`Exam_idExam`),
  KEY `fk_Student_has_Exam_Exam1_idx` (`Exam_idExam`),
  KEY `fk_Student_has_Exam_Student1_idx` (`Student_User_idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `register`
--

INSERT INTO `register` (`Student_User_idUser`, `Exam_idExam`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `room`
--

DROP TABLE IF EXISTS `room`;
CREATE TABLE IF NOT EXISTS `room` (
  `id_room` int(11) NOT NULL AUTO_INCREMENT,
  `capacity` int(11) NOT NULL,
  PRIMARY KEY (`id_room`)
) ENGINE=InnoDB AUTO_INCREMENT=203 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `room`
--

INSERT INTO `room` (`id_room`, `capacity`) VALUES
(1, 250),
(2, 30),
(3, 10),
(202, 15);

-- --------------------------------------------------------

--
-- Structure de la table `speciality`
--

DROP TABLE IF EXISTS `speciality`;
CREATE TABLE IF NOT EXISTS `speciality` (
  `id_speciality` int(11) NOT NULL AUTO_INCREMENT,
  `name_speciality` varchar(45) NOT NULL,
  PRIMARY KEY (`id_speciality`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `speciality`
--

INSERT INTO `speciality` (`id_speciality`, `name_speciality`) VALUES
(1, 'Scientifique'),
(2, 'Economique_et_Sociale'),
(3, 'Literraire');

-- --------------------------------------------------------

--
-- Structure de la table `speciality_has_subjects`
--

DROP TABLE IF EXISTS `speciality_has_subjects`;
CREATE TABLE IF NOT EXISTS `speciality_has_subjects` (
  `Speciality_idSpeciality` int(11) NOT NULL,
  `Subjects_idSubject` int(11) NOT NULL,
  PRIMARY KEY (`Speciality_idSpeciality`,`Subjects_idSubject`),
  KEY `fk_Speciality_has_Subjects_Subjects1_idx` (`Subjects_idSubject`),
  KEY `fk_Speciality_has_Subjects_Speciality1_idx` (`Speciality_idSpeciality`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `speciality_has_subjects`
--

INSERT INTO `speciality_has_subjects` (`Speciality_idSpeciality`, `Subjects_idSubject`) VALUES
(1, 1),
(2, 1),
(1, 2),
(2, 2),
(3, 2),
(1, 3),
(2, 3),
(3, 3),
(2, 4),
(1, 5);

-- --------------------------------------------------------

--
-- Structure de la table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `user_id_user` int(11) NOT NULL,
  `id_student` int(11) NOT NULL AUTO_INCREMENT,
  UNIQUE KEY `id_student` (`id_student`,`user_id_user`) USING BTREE,
  UNIQUE KEY `fk_Student_User1_idx` (`user_id_user`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `student`
--

INSERT INTO `student` (`user_id_user`, `id_student`) VALUES
(1, 2),
(2, 1),
(3, 4),
(4, 3),
(6, 15),
(10, 6),
(11, 14);

-- --------------------------------------------------------

--
-- Structure de la table `subject`
--

DROP TABLE IF EXISTS `subject`;
CREATE TABLE IF NOT EXISTS `subject` (
  `id_subject` int(11) NOT NULL AUTO_INCREMENT,
  `name_subject` varchar(45) NOT NULL,
  PRIMARY KEY (`id_subject`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `subject`
--

INSERT INTO `subject` (`id_subject`, `name_subject`) VALUES
(1, 'Mathématique'),
(2, 'Francais'),
(3, 'Histoire'),
(4, 'SES'),
(5, 'Physique'),
(6, 'Littérature');

-- --------------------------------------------------------

--
-- Structure de la table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
CREATE TABLE IF NOT EXISTS `teacher` (
  `user_id_user` int(11) NOT NULL,
  `id_teacher` int(11) NOT NULL AUTO_INCREMENT,
  UNIQUE KEY `fk_Teacher_User_idx` (`user_id_user`) USING BTREE,
  UNIQUE KEY `id_teacher` (`id_teacher`,`user_id_user`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `teacher`
--

INSERT INTO `teacher` (`user_id_user`, `id_teacher`) VALUES
(7, 1),
(11, 2),
(6, 3),
(5, 7);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `password` varchar(120) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `firstname`, `lastname`, `password`, `email`) VALUES
(1, 'Graci', 'TAPEUR', 'gracita', 'graci@tapeur.fr'),
(2, 'Alex', 'Sansdrap', 'alexandre', 'alex@sansdrap.fr'),
(3, 'Steph', 'anatik', 'stephane', 'Steph@anatik.fr'),
(4, 'Jay-B', 'sy', 'jb', 'jay-b@sy.fr'),
(5, 'sebas', 'tient', 'sebastien', 'sebas@tien.fr'),
(6, 'infor', 'matic', 'informatique', 'infor@matic.fr'),
(7, 'Napoleon', 'bonappart', 'napoleon', 'napoleonbonapart.fr'),
(8, 'Emmanuel', 'macaron', 'emmanuel', 'emmanuel@macaron.fr'),
(9, 'isaac', 'newton', 'isaac', 'isaac@newton.fr'),
(10, 'lavoi', 'zier', 'lavoisier', 'lavoi@zier.fr'),
(11, 'peeta', 'Gore', 'pythagore', 'peeta@gore.fr');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `speciality_has_subjects`
--
ALTER TABLE `speciality_has_subjects`
  ADD CONSTRAINT `fk_Speciality_has_Subjects_Speciality1` FOREIGN KEY (`Speciality_idSpeciality`) REFERENCES `speciality` (`id_speciality`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Speciality_has_Subjects_Subjects1` FOREIGN KEY (`Subjects_idSubject`) REFERENCES `subject` (`id_subject`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk_Student_User1` FOREIGN KEY (`user_id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `fk_Teacher_User` FOREIGN KEY (`user_id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
