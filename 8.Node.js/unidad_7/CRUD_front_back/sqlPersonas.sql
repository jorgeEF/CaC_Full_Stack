/* create database base22573; */

use base22573;

create table personas(
id 		 int(7) auto_increment,
nombre	varchar(45) not null,
apellido varchar(45) not null,
primary key(id)); 

describe personas;

insert into personas (nombre, apellido)
values("Cristina", "Suarez");

insert into personas (nombre, apellido)
values("Claudio", "Siman");

insert into personas (nombre, apellido)
values("Raquel", "Rodriguez");

insert into personas (nombre, apellido)
values("Juan", "Ramirez");

insert into personas (nombre, apellido)
values("Maria", "Serrano");

select *
from personas;

SELECT 2 AS solution;

select *
from personas
where id = 4;


update personas
set nombre = "Maria",
	apellido = "Sarrano"
where id = 5;

set sql_safe_updates = 0;

