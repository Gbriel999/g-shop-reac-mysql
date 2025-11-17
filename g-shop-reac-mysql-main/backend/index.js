const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb', 
  password: '',
  port: 5432
});

app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la base de datos');
  }
});

app.post('/productos', async (req, res) => {
  const { nombre, descripcion, precio, imagen } = req.body;
  try {
    await pool.query(
      'INSERT INTO productos(nombre, descripcion, precio, imagen) VALUES($1,$2,$3,$4)',
      [nombre, descripcion, precio, imagen]
    );
    res.send('Producto agregado');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la base de datos');
  }
});

app.listen(5000, () => console.log('API corriendo en http://localhost:5000'));

// POST mensaje de contacto
app.post('/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    await pool.query(
      'INSERT INTO mensajes(nombre, email, mensaje) VALUES($1, $2, $3)',
      [nombre, email, mensaje]
    );
    res.status(200).json({ mensaje: 'Mensaje recibido correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en la base de datos' });
  }

});
