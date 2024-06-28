-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-criticraft.alwaysdata.net
-- Generation Time: Jun 28, 2024 at 03:50 AM
-- Server version: 10.6.16-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `criticraft_ventamini`
--

-- --------------------------------------------------------

--
-- Table structure for table `asigna`
--

CREATE TABLE `asigna` (
  `usuario` varchar(64) NOT NULL,
  `IDrol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `IDcategoria` int(11) NOT NULL,
  `tipo` varchar(16) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `compra`
--

CREATE TABLE `compra` (
  `IDticket` int(11) NOT NULL,
  `usuario` varchar(64) NOT NULL,
  `estado` varchar(32) NOT NULL,
  `fecha` date NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comproducto`
--

CREATE TABLE `comproducto` (
  `IDticket` int(11) NOT NULL,
  `IDproducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posee`
--

CREATE TABLE `posee` (
  `IDrol` int(11) NOT NULL,
  `IDprivilegio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `privilegio`
--

CREATE TABLE `privilegio` (
  `IDprivilegio` int(11) NOT NULL,
  `funcionalidad` varchar(256) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `IDproducto` int(11) NOT NULL,
  `IDcategoria` int(11) NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `descripcion` varchar(1024) DEFAULT NULL,
  `precio` float NOT NULL,
  `imagen` varchar(512) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `IDrol` int(11) NOT NULL,
  `nombre` varchar(32) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `usuario` varchar(64) NOT NULL,
  `correo` varchar(256) NOT NULL,
  `contrasena` varchar(128) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asigna`
--
ALTER TABLE `asigna`
  ADD KEY `usuario` (`usuario`),
  ADD KEY `IDrol` (`IDrol`);

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`IDcategoria`);

--
-- Indexes for table `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`IDticket`),
  ADD KEY `usuario` (`usuario`);

--
-- Indexes for table `comproducto`
--
ALTER TABLE `comproducto`
  ADD KEY `IDticket` (`IDticket`),
  ADD KEY `IDproducto` (`IDproducto`);

--
-- Indexes for table `posee`
--
ALTER TABLE `posee`
  ADD KEY `IDrol` (`IDrol`),
  ADD KEY `IDprivilegio` (`IDprivilegio`);

--
-- Indexes for table `privilegio`
--
ALTER TABLE `privilegio`
  ADD PRIMARY KEY (`IDprivilegio`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`IDproducto`),
  ADD KEY `IDcategoria` (`IDcategoria`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`IDrol`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `IDcategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `privilegio`
--
ALTER TABLE `privilegio`
  MODIFY `IDprivilegio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `IDproducto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `IDrol` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asigna`
--
ALTER TABLE `asigna`
  ADD CONSTRAINT `asigna_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`usuario`),
  ADD CONSTRAINT `asigna_ibfk_2` FOREIGN KEY (`IDrol`) REFERENCES `rol` (`IDrol`);

--
-- Constraints for table `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`usuario`);

--
-- Constraints for table `comproducto`
--
ALTER TABLE `comproducto`
  ADD CONSTRAINT `comproducto_ibfk_1` FOREIGN KEY (`IDticket`) REFERENCES `compra` (`IDticket`),
  ADD CONSTRAINT `comproducto_ibfk_2` FOREIGN KEY (`IDproducto`) REFERENCES `productos` (`IDproducto`);

--
-- Constraints for table `posee`
--
ALTER TABLE `posee`
  ADD CONSTRAINT `posee_ibfk_1` FOREIGN KEY (`IDrol`) REFERENCES `rol` (`IDrol`),
  ADD CONSTRAINT `posee_ibfk_2` FOREIGN KEY (`IDprivilegio`) REFERENCES `privilegio` (`IDprivilegio`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`IDcategoria`) REFERENCES `categoria` (`IDcategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
