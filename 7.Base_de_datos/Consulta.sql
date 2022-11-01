-- ctrl+shift+f9 ejecuta de a una linea.

-- USE: selecciona una base de datos para operar
USE cac_fullstack;

-- DESCRIBE: muestra la estructura de las tablas
DESCRIBE regiones;
DESCRIBE departamentos;
DESCRIBE empleados;

-- INSERT: agrega filas(datos) a una tabla
INSERT INTO regiones (id, nombre)
VALUES (2, 'Mendoza');

-- insertar varias regiones en un solo INSERT
INSERT INTO regiones (id, nombre)
VALUES (3, 'La Rioja'),(4, 'Cordoba'),(5, 'San Luis');

-- crear departamentos
INSERT INTO departamentos (id, nombre, region_id)
VALUES (3, 'Soporte Tecnico', 3),(4, 'Desarrollo', 4),(5, 'Recursos Humanos', 5);

-- SELECT: selecciona tablas y columnas segun criterios dados
-- ej: consultar por empleado
SELECT * FROM empleados
WHERE nombre = "Juan"
AND apellido = "Perez";

SELECT * FROM empleados
WHERE id > 2 AND id < 5;

SELECT * FROM empleados
WHERE id between 2 AND 5;

SELECT * FROM empleados
WHERE nombre LIKE "J%";

SELECT * FROM empleados
WHERE nombre LIKE "%a%";

-- Unir datos de tablas

SELECT d.nombre, r.nombre
FROM departamentos d, regiones r
WHERE d.region_id = r.id;

SELECT e.nombre, e.apellido, d.nombre AS departamento
from empleados e, departamentos d
WHERE e.depto_id = d.id;

