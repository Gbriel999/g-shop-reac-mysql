import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const enviarMensaje = async e => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch('http://localhost:5000/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje })
      });

      if (res.ok) {
        setSuccess(true);
        setNombre('');
        setEmail('');
        setMensaje('');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: '700px' }}>
      <Card className="shadow-sm p-4 border-0" style={{ borderRadius: '12px', background: '#f9f9f9' }}>
        <h2 className="mb-4 text-center">Contáctanos</h2>

        {success && <Alert variant="success" className="fade show">✅ Mensaje enviado correctamente</Alert>}
        {error && <Alert variant="danger" className="fade show">❌ Error al enviar el mensaje</Alert>}

        <Form onSubmit={enviarMensaje}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={mensaje}
              onChange={e => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje..."
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button 
              type="submit" 
              variant="primary" 
              style={{ padding: '10px 30px', fontSize: '1.1rem', borderRadius: '8px' }}
            >
              Enviar
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Contact;
