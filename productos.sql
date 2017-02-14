Create DataBase BaseProductos;
use BaseProductos;
CREATE TABLE Producto(
	idProducto integer AUTO_INCREMENT,
	nombre varchar(30),
	precio float,
	PRIMARY KEY (idProducto)
);

CREATE TABLE Usuario(
	usuario varchar(20),
	clave varchar(30),
	PRIMARY KEY (usuario)
);


CREATE TABLE Comentario(
	idComentario integer AUTO_INCREMENT,
	texto varchar(200),
	PRIMARY KEY (idComentario)
);

insert into Producto(nombre,precio) values("Leche1", 0.76);
insert into Producto(nombre,precio) values("Leche2", 0.76);
insert into Producto(nombre,precio) values("Leche3", 0.76);
insert into Producto(nombre,precio) values("LaLeche4", 0.76);
insert into Producto(nombre,precio) values("Carne", 0.76);
insert into Producto(nombre,precio) values("Pollo", 0.76);

