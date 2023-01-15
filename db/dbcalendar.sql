-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 15 jan. 2023 à 21:33
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
  `id_exam` int(11) NOT NULL AUTO_INCREMENT,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `room_id_room` int(11) NOT NULL,
  `subjects_id_subjects` int(11) NOT NULL,
  PRIMARY KEY (`id_exam`),
  KEY `fk_Exam_Room1_idx` (`room_id_room`),
  KEY `fk_Exam_Subjects1_idx` (`subjects_id_subjects`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `exam`
--

INSERT INTO `exam` (`id_exam`, `start_date`, `end_date`, `room_id_room`, `subjects_id_subjects`) VALUES
(1, '2022-12-12 09:00:00', '2022-12-12 10:00:00', 1, 1),
(2, '2022-12-12 13:30:00', '2022-12-12 14:00:00', 2, 5);

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
('default', 0);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id_role` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id_role`, `name`) VALUES
(1, 'Student'),
(2, 'Teacher');

-- --------------------------------------------------------

--
-- Structure de la table `room`
--

DROP TABLE IF EXISTS `room`;
CREATE TABLE IF NOT EXISTS `room` (
  `id_room` int(11) NOT NULL AUTO_INCREMENT,
  `capacity` int(11) NOT NULL,
  PRIMARY KEY (`id_room`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `room`
--

INSERT INTO `room` (`id_room`, `capacity`) VALUES
(1, 15),
(2, 30),
(3, 10);

-- --------------------------------------------------------

--
-- Structure de la table `speciality`
--

DROP TABLE IF EXISTS `speciality`;
CREATE TABLE IF NOT EXISTS `speciality` (
  `id_speciality` int(11) NOT NULL AUTO_INCREMENT,
  `name_speciality` varchar(45) NOT NULL,
  PRIMARY KEY (`id_speciality`)
) ENGINE=InnoDB AUTO_INCREMENT=454 DEFAULT CHARSET=utf8;

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
  `speciality_id_speciality` int(11) NOT NULL,
  `subjects_id_subject` int(11) NOT NULL,
  PRIMARY KEY (`speciality_id_speciality`,`subjects_id_subject`),
  KEY `fk_Speciality_has_Subjects_Subjects1_idx` (`subjects_id_subject`),
  KEY `fk_Speciality_has_Subjects_Speciality_idx` (`speciality_id_speciality`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `speciality_has_subjects`
--

INSERT INTO `speciality_has_subjects` (`speciality_id_speciality`, `subjects_id_subject`) VALUES
(1, 2),
(2, 2),
(3, 2),
(1, 3),
(2, 3),
(3, 3),
(2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `user_id_user` int(11) NOT NULL,
  `id_student` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `student_has_exam`
--

DROP TABLE IF EXISTS `student_has_exam`;
CREATE TABLE IF NOT EXISTS `student_has_exam` (
  `User_id_user` int(11) NOT NULL,
  `Exam_idExam` int(11) NOT NULL,
  PRIMARY KEY (`User_id_user`,`Exam_idExam`),
  KEY `fk_User_has_Exam_Exam1_idx` (`Exam_idExam`),
  KEY `fk_User_has_Exam_User1_idx` (`User_id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `student_has_exam`
--

INSERT INTO `student_has_exam` (`User_id_user`, `Exam_idExam`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `subject`
--

DROP TABLE IF EXISTS `subject`;
CREATE TABLE IF NOT EXISTS `subject` (
  `id_subject` int(11) NOT NULL AUTO_INCREMENT,
  `name_subject` varchar(45) NOT NULL,
  PRIMARY KEY (`id_subject`)
) ENGINE=InnoDB AUTO_INCREMENT=413 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `subject`
--

INSERT INTO `subject` (`id_subject`, `name_subject`) VALUES
(1, 'Mathématiques'),
(2, 'Francais'),
(3, 'Histoire'),
(4, 'SES'),
(5, 'Physique');

-- --------------------------------------------------------

--
-- Structure de la table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
CREATE TABLE IF NOT EXISTS `teacher` (
  `user_id_user` int(11) NOT NULL,
  `id_teacher` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `teacher_monitor_exam`
--

DROP TABLE IF EXISTS `teacher_monitor_exam`;
CREATE TABLE IF NOT EXISTS `teacher_monitor_exam` (
  `User_id_user` int(11) NOT NULL,
  `Exam_idExam` int(11) NOT NULL,
  PRIMARY KEY (`User_id_user`,`Exam_idExam`),
  KEY `fk_User_has_Exam_Exam2_idx` (`Exam_idExam`),
  KEY `fk_User_has_Exam_User2_idx` (`User_id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(120) NOT NULL,
  `role` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_user`),
  KEY `fk_role_idx` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=362 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `firstname`, `lastname`, `email`, `password`, `role`) VALUES
(1, 'Graci', 'TAPEUR', 'graci@tapeur.fr', 'gracita', 1),
(2, 'Alex', 'Sansdrap', 'alex@sansdrap.fr', 'alexandre', 1),
(3, 'Steph', 'anatik', 'Steph@anatik.fr', 'stephane', 1),
(4, 'Jay-B', 'sy', 'jay-b@sy.fr', 'jb', 1),
(9, 'isaac', 'newton', 'isaac@newton.fr', 'isaac', 1),
(359, 'caca', 'fqsfdq', 'fsdqfsq', 'fqdqsfq', 1),
(360, 'Alexandreggfsd', 'UYgdsfgdsfdsqfqs', 'alexandre@gmail.com', 'fdsqfdsq', 2),
(361, 'fsqdfqs', 'fqsfsq', 'fdqsfsq', 'fdqfsq', 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `exam`
--
ALTER TABLE `exam`
  ADD CONSTRAINT `fk_Exam_Room1` FOREIGN KEY (`room_id_room`) REFERENCES `room` (`id_room`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Exam_Subjects1` FOREIGN KEY (`subjects_id_subjects`) REFERENCES `subject` (`id_subject`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `speciality_has_subjects`
--
ALTER TABLE `speciality_has_subjects`
  ADD CONSTRAINT `fk_Speciality_has_Subjects_Speciality` FOREIGN KEY (`speciality_id_speciality`) REFERENCES `speciality` (`id_speciality`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Speciality_has_Subjects_Subjects1` FOREIGN KEY (`subjects_id_subject`) REFERENCES `subject` (`id_subject`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `student_has_exam`
--
ALTER TABLE `student_has_exam`
  ADD CONSTRAINT `fk_User_has_Exam_Exam1` FOREIGN KEY (`Exam_idExam`) REFERENCES `exam` (`id_exam`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_User_has_Exam_User1` FOREIGN KEY (`User_id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `teacher_monitor_exam`
--
ALTER TABLE `teacher_monitor_exam`
  ADD CONSTRAINT `fk_User_has_Exam_Exam2` FOREIGN KEY (`Exam_idExam`) REFERENCES `exam` (`id_exam`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_User_has_Exam_User2` FOREIGN KEY (`User_id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_role` FOREIGN KEY (`role`) REFERENCES `role` (`id_role`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
