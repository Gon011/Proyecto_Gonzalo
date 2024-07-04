-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-criticraft.alwaysdata.net
-- Generation Time: Jul 04, 2024 at 04:34 PM
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
-- Dumping data for table `asigna`
--

INSERT INTO `asigna` (`usuario`, `IDrol`) VALUES
('a', 2),
('Cristian', 2),
('gon123', 2),
('Gon1234', 2),
('Gonzalo', 2),
('hola', 2),
('hola gon', 2),
('j', 2),
('k', 2),
('m', 2),
('prueba', 2),
('ventAdmin0', 2),
('ventAdmin01', 1),
('y', 2),
('z', 2);

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
-- Dumping data for table `compra`
--

INSERT INTO `compra` (`IDcompra`, `usuario`, `estado`, `fecha`, `created_at`) VALUES
(1, 'a', 'terminada', '2024-01-01', '2024-06-28 19:50:58'),
(2, 'Cristian', 'pendiente', '2024-01-02', '2024-06-28 19:50:58'),
(3, 'gon123', 'terminada', '2024-01-03', '2024-06-28 19:50:58'),
(4, 'Gon1234', 'pendiente', '2024-01-04', '2024-06-28 19:50:58'),
(5, 'hola', 'terminada', '2024-01-05', '2024-06-28 19:50:58'),
(6, 'hola gon', 'terminada', '2024-01-06', '2024-06-28 19:50:58'),
(7, 'j', 'pendiente', '2024-01-07', '2024-06-28 19:50:58'),
(8, 'k', 'terminada', '2024-01-08', '2024-06-28 19:50:58'),
(9, 'm', 'pendiente', '2024-01-09', '2024-06-28 19:50:58'),
(10, 'ventAdmin0', 'terminada', '2024-01-10', '2024-06-28 19:50:58'),
(11, 'z', 'pendiente', '2024-01-11', '2024-06-28 19:50:58');

--
-- Dumping data for table `comproducto`
--

INSERT INTO `comproducto` (`IDcompra`, `IDproducto`, `cantidad`, `precio`) VALUES
(1, 1, 1, 50),
(1, 2, 1, 50),
(1, 21, 1, 69),
(2, 14, 2, 50),
(2, 22, 1, 50),
(3, 1, 1, 50),
(3, 15, 1, 50),
(3, 16, 1, 60),
(4, 2, 1, 50),
(4, 17, 1, 89),
(5, 14, 1, 50),
(5, 18, 1, 89),
(5, 19, 3, 50),
(6, 15, 1, 50),
(7, 16, 1, 60),
(7, 21, 1, 69),
(8, 1, 2, 50),
(8, 17, 1, 89),
(8, 22, 1, 50),
(9, 2, 1, 50),
(9, 14, 1, 50),
(9, 18, 1, 89),
(10, 15, 1, 50),
(10, 16, 1, 60),
(10, 17, 1, 89),
(10, 19, 1, 50),
(11, 18, 1, 89),
(11, 19, 2, 50);

--
-- Dumping data for table `posee`
--

INSERT INTO `posee` (`IDrol`, `IDprivilegio`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 5),
(1, 6),
(1, 7),
(2, 4);

--
-- Dumping data for table `privilegio`
--

INSERT INTO `privilegio` (`IDprivilegio`, `funcionalidad`, `created_at`) VALUES
(1, 'registra productos', '2024-07-03 22:26:24'),
(2, 'modifica productos', '2024-07-03 22:26:24'),
(3, 'elimina productos', '2024-07-03 22:26:24'),
(4, 'realiza compras', '2024-07-03 22:26:24'),
(5, 'consulta todas las compras', '2024-07-03 22:26:24'),
(6, 'consulta gráficos', '2024-07-03 22:26:24'),
(7, 'modifica estado de compra', '2024-07-03 22:26:24');

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
(18, 5, 'Pantalón Casual Crofts & Barrow Azul M T 36x30 100% Algodón', NULL, 89, 'https://http2.mlstatic.com/D_NQ_NP_740101-MLM76903771625_062024-O.webp', 1, '2024-06-28 00:44:40'),
(19, 1, 'Lo Mejor De Clasificación R Radioactivo', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_763941-MLM70021384286_062023-O.webp', 1, '2024-06-28 19:15:04'),
(20, 3, 'Recetario Tamales Ricos Y Calientitos Radar Editores', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_981030-MLM50009013282_052022-O.webp', 1, '2024-06-28 19:15:04'),
(21, 4, 'Dobermann Y La Fuga Dvd Doble', 'Dobermann de Jan Kounen con Monica Belluci y Vincent Cassel\r\n\r\nLa Fuga de Tony Scott Guion de Quentin Tarantino', 69, 'https://http2.mlstatic.com/D_NQ_NP_696685-MLM54871459129_042023-O.webp', 1, '2024-06-28 19:15:04'),
(22, 4, 'Click Adam Sandler Special Edition Idiomas Inglés Y Frances', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_979667-MLM71617215729_092023-O.webp', 1, '2024-06-28 19:15:04'),
(23, 6, 'Mouse', 'Mouse para computadora', 50, '', 1, '2024-06-29 02:13:46');

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
('Gonzalo', 'gmoran@hotmail.com', '$2a$12$hpSHPQahGNG9m2E1O9JWc.mjG3APmV4XPgrOJBZ9LC5QH0nI6wqem', '2024-06-29 02:08:35'),
('hola', 'dkidk@djd', 'holaBola123,', '2024-05-31 07:46:15'),
('hola gon', 'd@d', '$2b$12$GkV8TxiOxm5Kzvct9WJWJOtIKC5q8X/t/xkTfAo5Hiz4gv6V6Ox1e', '2024-06-24 03:01:34'),
('j', 'd@d', '$2b$12$wgRT5ki01/6i.xx91As9.ONN8Rsw5ZWbZE5FPjMcpBCkCEdRAufHW', '2024-06-13 23:37:12'),
('k', 'aaaaaa@djd', '$2b$12$9vnW0zaA3fzELA/VcEwr8.KKJmIF.Oene6q.WdjCeo6k8IcBUBD6m', '2024-06-13 23:33:47'),
('m', 'm@g.com', 'A1234567_a', '2024-06-13 23:10:03'),
('prueba', 'y@z', 'xd', '2024-07-04 01:28:19'),
('ventAdmin0', 'jefichulo@gmail.com', ',sqlSQL248,', '2024-05-30 21:50:31'),
('ventAdmin01', 'jefichulo@gmail.com', '$2a$12$mXj./6qfyEUng8PPrCOnvum8l0LcUeGD7Ftl7yjkC.mtxPiHBpp3C', '2024-07-03 22:46:29'),
('y', 'buenota@xd', '$2a$12$uWObOKkp7ZI1MajnnvG9rOXn6pnn.1D6ENRjebfqmq1UGINKoS06W', '2024-07-04 01:45:00'),
('z', 'dkidk@djd', '$2b$12$Zzq4appiskyXBR3X3OgrdeMYFII02efjN3RhDxdL4Bvpbn4pyGik2', '2024-06-13 23:24:25');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
