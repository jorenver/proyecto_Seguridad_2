Create DataBase BaseProductos;

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
