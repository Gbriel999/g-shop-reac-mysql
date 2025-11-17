import React from 'react';
import { Form } from 'react-bootstrap';

const Buscador = ({ searchTerm, setSearchTerm }) => (
  <Form className="mb-3">
    <Form.Control
      placeholder="Buscar producto..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  </Form>
);

export default Buscador;
