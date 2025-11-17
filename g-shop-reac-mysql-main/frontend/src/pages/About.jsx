import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => (
  <Container className="my-5">
    <h2 className="mb-5 text-center" style={{ fontWeight: '700', fontSize: '2.5rem' }}>
      Quiénes Somos
    </h2>

    <Row className="align-items-center mb-5">
      <Col md={6}>
        <p className="lead">
          En <strong>G-SHOP</strong> nos dedicamos a ofrecer productos de calidad que combinan estilo y funcionalidad. 
          Desde ropa urbana hasta accesorios y calzado, cada artículo ha sido cuidadosamente seleccionado.
        </p>
        <p className="lead">
          Nuestra misión es brindar innovación, comodidad y satisfacción en cada compra, creando una experiencia única 
          y confiable para nuestros clientes.
        </p>
        <Button 
          as={Link} 
          to="/" 
          variant="primary" 
          style={{ padding: '12px 30px', fontSize: '1.1rem', borderRadius: '10px' }}
        >
          Volver al inicio
        </Button>
      </Col>

      <Col md={6}>
        <Card className="shadow-sm border-0" style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Card.Img 
            variant="top" 
            src="https://images.pexels.com/photos/29790060/pexels-photo-29790060.jpeg?auto=compress&cs=tinysrgb&w=600" 
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>Nuestra Filosofía</Card.Title>
            <Card.Text>
              Calidad, estilo y compromiso: tres pilares que guían todo lo que hacemos.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="text-center">
      <Col md={4}>
        <Card className="border-0 shadow-sm mb-3 hover-zoom" style={{ borderRadius: '12px', padding: '20px' }}>
          <Card.Body>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤝</div>
            <Card.Title>Transparencia</Card.Title>
            <Card.Text>
              Operamos de manera clara y confiable en todas nuestras transacciones.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="border-0 shadow-sm mb-3 hover-zoom" style={{ borderRadius: '12px', padding: '20px' }}>
          <Card.Body>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💡</div>
            <Card.Title>Innovación</Card.Title>
            <Card.Text>
              Siempre buscamos mejorar y ofrecer lo último en tendencias urbanas.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="border-0 shadow-sm mb-3 hover-zoom" style={{ borderRadius: '12px', padding: '20px' }}>
          <Card.Body>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>👥</div>
            <Card.Title>Comunidad</Card.Title>
            <Card.Text>
              Nuestros clientes son parte de nuestra comunidad; su satisfacción es nuestra prioridad.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About;
