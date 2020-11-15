-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 15, 2020 at 03:15 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `favourite_things`
--

-- --------------------------------------------------------

--
-- Table structure for table `ashwin_favourite`
--

DROP TABLE IF EXISTS `ashwin_favourite`;
CREATE TABLE IF NOT EXISTS `ashwin_favourite` (
  `Id` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `image` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ashwin_favourite`
--

INSERT INTO `ashwin_favourite` (`Id`, `Name`, `Description`, `image`) VALUES
(1, 'games', 'I love games and thats one of my favorite things. I game almost everyday', 'pc_games.jpg'),
(2, 'superheroes', 'I love reading or watching superhero movies or comics. I mean who doesn\'t', 'superheroes.jpg'),
(3, 'chatting ', 'chatting with friends using phone (during these trying times)', 'chatting.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
