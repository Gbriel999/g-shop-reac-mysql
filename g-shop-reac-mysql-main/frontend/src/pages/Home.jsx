import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Form } from 'react-bootstrap';
import ItemCard from '../components/ItemCard.jsx';
import Buscador from '../components/Buscador.jsx';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orden, setOrden] = useState('A-Z');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductosDB = fetch('http://localhost:5000/productos').then(res => res.json());
    const fetchProductosAPI = fetch('https://fakestoreapi.com/products').then(res => res.json());

    Promise.all([fetchProductosDB, fetchProductosAPI])
      .then(([dbData, apiData]) => {
        const dbProductos = dbData.map(p => ({
          id: `db-${p.id}`,
          nombre: p.nombre,
          descripcion: p.descripcion,
          precio: p.precio,
          imagen: p.imagen
        }));

        const apiProductos = apiData.map(p => ({
          id: `api-${p.id}`,
          nombre: p.title,
          descripcion: p.description,
          precio: p.price,
          imagen: p.image
        }));

        setProductos([...dbProductos, ...apiProductos]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error cargando productos:', err);
        setLoading(false);
      });
  }, []);

  let productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  productosFiltrados.sort((a, b) => {
    if (orden === 'A-Z') return a.nombre.localeCompare(b.nombre);
    if (orden === 'Z-A') return b.nombre.localeCompare(a.nombre);
    return 0;
  });

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Productos</h2>

      <Buscador searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Form className="mb-4 text-end">
        <Form.Select
          style={{ width: '200px', display: 'inline-block' }}
          value={orden}
          onChange={e => setOrden(e.target.value)}
        >
          <option value="A-Z">Orden A → Z</option>
          <option value="Z-A">Orden Z → A</option>
        </Form.Select>
      </Form>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <Row>
          {productosFiltrados.map(item => (
            <Col key={item.id} md={4}>
              <ItemCard item={item} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;
