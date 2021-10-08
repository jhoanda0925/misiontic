CREATE TABLE IF NOT EXISTS usuarios (
    id INT NOT NULL,
    usuario VARCHAR(256) NOT NULL,
    contrasena VARCHAR(256) NOT NULL,
    anoNacimiento INT NOT NULL,
    fecha_registro INT DEFAULT 2021
)ENGINE=INNODB;
