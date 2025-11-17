-- Crear base de datos
CREATE DATABASE testdb;

-- Crear tabla productos
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  imagen TEXT
);

-- Crear tabla mensajes
CREATE TABLE mensajes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar productos de ejemplo
INSERT INTO productos (nombre, descripcion, precio, imagen) 
VALUES 
  ('Laptop HP', 'Laptop HP con procesador i7 y 16GB de RAM', 12000.99, 'https://media.falabella.com/falabellaCL/143850061_02/w=650,h=650,fit=pad'),
  ('Smartphone Samsung', 'Smartphone Samsung Galaxy con cámara de 64MP', 7990.00, 'https://cl-dam-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/cl/paris/924024999/variant/6821ff368c47d89fabc1f831/images/509053c2-1102-4eea-8bb0-d74b2d6c8f62/924024999-0000-001.jpg'),
  ('Auriculares Bose', 'Auriculares Bose con cancelación de ruido', 2999.00, 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/251_environmental_speakers/product_silo_images/251_black_EC.psd/jcr:content/renditions/cq5dam.web.600.600.png');

-- Insertar mensajes de ejemplo
INSERT INTO mensajes (nombre, email, mensaje) 
VALUES 
  ('Juan Pérez', 'juan.perez@example.com', 'Quiero saber más sobre el precio de la Laptop HP'),
  ('Maria López', 'maria.lopez@example.com', '¿Tienen disponibilidad de los auriculares Bose?'),
  ('Carlos García', 'carlos.garcia@example.com', 'Me gustaría hacer una consulta sobre los smartphones.');
