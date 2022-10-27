-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.9.2-MariaDB-log - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para cac_fullstack
CREATE DATABASE IF NOT EXISTS `cac_fullstack` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cac_fullstack`;

-- Volcando estructura para tabla cac_fullstack.departamentos
CREATE TABLE IF NOT EXISTS `departamentos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `region_id` (`region_id`),
  CONSTRAINT `region_FK` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cac_fullstack.departamentos: ~1 rows (aproximadamente)
INSERT IGNORE INTO `departamentos` (`id`, `nombre`, `region_id`) VALUES
	(1, 'ventas', 1);

-- Volcando estructura para tabla cac_fullstack.empleados
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `apellido` varchar(50) NOT NULL DEFAULT '',
  `fecha_nacimiento` date DEFAULT NULL,
  `email` varchar(50) NOT NULL DEFAULT '',
  `telefono` varchar(50) DEFAULT NULL,
  `depto_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `depto_id` (`depto_id`),
  CONSTRAINT `empleado_depto_fk` FOREIGN KEY (`depto_id`) REFERENCES `departamentos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cac_fullstack.empleados: ~1 rows (aproximadamente)
INSERT IGNORE INTO `empleados` (`id`, `nombre`, `apellido`, `fecha_nacimiento`, `email`, `telefono`, `depto_id`) VALUES
	(1, 'Juan', 'Perez', '1998-10-27', 'juanpe@mail.com', '11235235', 1);

-- Volcando estructura para tabla cac_fullstack.region
CREATE TABLE IF NOT EXISTS `region` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cac_fullstack.region: ~1 rows (aproximadamente)
INSERT IGNORE INTO `region` (`id`, `nombre`) VALUES
	(1, 'Buenos Aires');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
