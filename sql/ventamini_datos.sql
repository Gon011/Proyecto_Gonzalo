-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-criticraft.alwaysdata.net
-- Generation Time: Jun 28, 2024 at 03:52 AM
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

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`IDcategoria`, `tipo`, `created_at`) VALUES
(1, 'música', '2024-05-30 23:12:31'),
(2, 'libros', '2024-05-30 23:12:31'),
(3, 'revistas', '2024-05-30 23:12:31'),
(4, 'películas', '2024-05-30 23:12:31'),
(5, 'ropa', '2024-06-14 00:59:41'),
(6, 'tecnología', '2024-06-14 01:00:54');

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`IDproducto`, `IDcategoria`, `nombre`, `descripcion`, `precio`, `imagen`, `cantidad`, `created_at`) VALUES
(1, 1, 'El Mejor Album De Voces Del Mundo 2 Cds Emi Music', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_984341-MLM71436271288_092023-O.webp', 1, '2024-05-30 23:22:00'),
(2, 2, 'Nostalgia De La Muerte Xavier Villaurrutia', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_621311-MLM48838864822_012022-O.webp ', 1, '2024-05-30 23:22:00'),
(14, 1, 'Grupo Dulcimer Música Mexicana Con Salterio', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_778924-MLM71436963424_092023-O.webp', 1, '2024-06-28 00:44:40'),
(15, 3, 'Revista R & R 81 Portishead', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_746257-MLA49471963008_032022-O.webp', 1, '2024-06-28 00:44:40'),
(16, 3, 'La Mosca En La Pared 39 Limp Bizkit', NULL, 60, 'https://http2.mlstatic.com/D_NQ_NP_696281-MLM49314572752_032022-O.webp', 1, '2024-06-28 00:44:40'),
(17, 1, 'Pink Floyd Ummagumma 2 Cds Digital Re-masters 1994', NULL, 89, 'https://http2.mlstatic.com/D_NQ_NP_624808-MLM71371979934_082023-O.webp', 1, '2024-06-28 00:44:40'),
(18, 5, 'Pantalón Casual Crofts & Barrow Azul M T 36x30 100% Algodón', NULL, 89, 'https://http2.mlstatic.com/D_NQ_NP_740101-MLM76903771625_062024-O.webp', 1, '2024-06-28 00:44:40');

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`IDrol`, `nombre`, `created_at`) VALUES
(1, 'administrador', '2024-06-18 16:20:29'),
(2, 'comprador', '2024-06-18 16:20:29');

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`usuario`, `correo`, `contrasena`, `created_at`) VALUES
('a', 'hello@world', '$2b$12$gaBLPFseANlukbnehQE7Hu8cNtnTZxaxyQ8XrYgQ09xsbjZvkqJ4y', '2024-06-21 00:21:40'),
('Cristian', 'a01710680@tec.mx', 'CAGC040125h@', '2024-06-10 22:08:58'),
('gon123', 'gon123@gmail.com', 'Gon123#123', '2024-06-07 21:14:30'),
('Gon1234', 'Gon1234@gmail.com', '$2b$12$Pm1wU4I2qW9hhij2iPwICeUSsVO.ySnICh3H3S2peyBPAHK3OTgDG', '2024-06-20 21:46:18'),
('hola', 'dkidk@djd', 'holaBola123,', '2024-05-31 07:46:15'),
('hola gon', 'd@d', '$2b$12$GkV8TxiOxm5Kzvct9WJWJOtIKC5q8X/t/xkTfAo5Hiz4gv6V6Ox1e', '2024-06-24 03:01:34'),
('j', 'd@d', '$2b$12$wgRT5ki01/6i.xx91As9.ONN8Rsw5ZWbZE5FPjMcpBCkCEdRAufHW', '2024-06-13 23:37:12'),
('k', 'aaaaaa@djd', '$2b$12$9vnW0zaA3fzELA/VcEwr8.KKJmIF.Oene6q.WdjCeo6k8IcBUBD6m', '2024-06-13 23:33:47'),
('m', 'm@g.com', 'A1234567_a', '2024-06-13 23:10:03'),
('ventAdmin0', 'jefichulo@gmail.com', ',sqlSQL248,', '2024-05-30 21:50:31'),
('z', 'dkidk@djd', '$2b$12$Zzq4appiskyXBR3X3OgrdeMYFII02efjN3RhDxdL4Bvpbn4pyGik2', '2024-06-13 23:24:25');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
