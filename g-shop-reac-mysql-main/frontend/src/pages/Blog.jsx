import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Blog = () => {
  const posts = [
    { 
      id: 1, 
      title: 'Novedades de productos', 
      excerpt: 'Descubre los últimos lanzamientos y novedades de nuestra tienda. Siempre traemos lo mejor en ropa urbana, accesorios y calzado.', 
      image: 'https://images.pexels.com/photos/29790060/pexels-photo-29790060.jpeg?auto=compress&cs=tinysrgb&w=600'  // foto streetwear con zapatillas y gorro :contentReference[oaicite:0]{index=0}
    },
    { 
      id: 2, 
      title: 'Consejos de compra', 
      excerpt: 'Aprende a elegir productos que se adapten a tu estilo y necesidades con nuestros tips exclusivos de compra.', 
      image: 'https://images.pexels.com/photos/28651403/pexels-photo-28651403.jpeg?auto=compress&cs=tinysrgb&w=600'  // moda urbana con zapatillas :contentReference[oaicite:1]{index=1}
    },
    { 
      id: 3, 
      title: 'Historias de clientes', 
      excerpt: 'Conoce los testimonios y experiencias reales de nuestros clientes y cómo han disfrutado nuestros productos.', 
      image: 'https://images.pexels.com/photos/30186761/pexels-photo-30186761.jpeg?auto=compress&cs=tinysrgb&w=600'  // ropa urbana y zapatillas :contentReference[oaicite:2]{index=2}
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Blog de Noticias</h2>
      <Row>
        {posts.map(post => (
          <Col key={post.id} md={4} className="mb-4">
            <Card className="shadow-sm h-100 hover-zoom">
              <Card.Img variant="top" src={post.image} style={{ borderRadius: '8px 8px 0 0' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <Button variant="primary" className="mt-auto">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
