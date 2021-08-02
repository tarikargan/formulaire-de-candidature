-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 21 juin 2021 à 16:40
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `formulaire`
--

-- --------------------------------------------------------

--
-- Structure de la table `candidat`
--

CREATE TABLE `candidat` (
  `id` int(11) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `ville` varchar(99) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telephone` varchar(99) NOT NULL,
  `cnss` varchar(5) NOT NULL,
  `php` int(11) NOT NULL,
  `html` int(11) NOT NULL,
  `css` int(11) NOT NULL,
  `js` int(11) NOT NULL,
  `angular` int(11) NOT NULL,
  `bootstrap` int(11) NOT NULL,
  `uml` int(11) NOT NULL,
  `jquery` int(11) NOT NULL,
  `ajax` int(11) NOT NULL,
  `typescript` int(11) NOT NULL,
  `react` int(11) NOT NULL,
  `symphony` int(11) NOT NULL,
  `mysql` int(11) NOT NULL,
  `nodejs` int(11) NOT NULL,
  `expressjs` int(11) NOT NULL,
  `anciennete` varchar(99) NOT NULL,
  `front_back_full` varchar(99) NOT NULL,
  `nombre_prj` varchar(99) NOT NULL,
  `salaire` varchar(99) NOT NULL,
  `cv` varchar(255) NOT NULL,
  `question` varchar(100) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `candidat`
--

INSERT INTO `candidat` (`id`, `fullName`, `age`, `ville`, `email`, `telephone`, `cnss`, `php`, `html`, `css`, `js`, `angular`, `bootstrap`, `uml`, `jquery`, `ajax`, `typescript`, `react`, `symphony`, `mysql`, `nodejs`, `expressjs`, `anciennete`, `front_back_full`, `nombre_prj`, `salaire`, `cv`, `question`, `date`) VALUES
(144, 'tarik ', 25, 'kasba tadla', 'tarik@gmail.com', '0500000000', 'non', 1, 2, 3, 5, 3, 2, 1, 2, 3, 5, 3, 2, 1, 2, 3, 'Junior', 'full stack', 'Plus de 3', '4 000 - 6 000', 'test_221-06-211624285849.pdf', 'non', '2021-06-21 14:30:49'),
(145, 'mouhsine', 26, 'berrechid', 'mouhsine@gmail.com', '0500000000', 'oui', 2, 1, 2, 3, 5, 3, 2, 1, 2, 3, 5, 3, 2, 1, 2, 'Expert', 'full stack', 'Plus de 6', '8 000 - 10 000', 'test_221-06-211624285987.pdf', 'non', '2021-06-21 14:33:07'),
(146, 'hajar', 30, 'rabat', 'hajar@gmail.com', '0500000000', 'oui', 3, 2, 1, 2, 3, 5, 3, 2, 1, 2, 3, 5, 3, 2, 1, 'Senior', 'back end', 'Plus de 6', '10 000 - 12 000', 'test_221-06-211624286124.pdf', 'i can\'t to do it', '2021-06-21 14:35:24'),
(147, 'said', 33, 'sale', 'said@gmail.com', '0500000000', 'oui', 5, 3, 2, 1, 2, 3, 5, 3, 2, 1, 2, 3, 5, 3, 2, 'Expert', 'back end', 'Plus de 6', '10 000 - 12 000', 'test_221-06-211624286219.pdf', 'i can\'t to do it', '2021-06-21 14:36:59');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `candidat`
--
ALTER TABLE `candidat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `candidat`
--
ALTER TABLE `candidat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
