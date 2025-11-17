import React from 'react';
import { Form } from 'react-bootstrap';

const Ordenador = ({ sortOrder, setSortOrder }) => (
  <Form className="mb-3">
    <Form.Select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
      <option value="asc">Ordenar A-Z</option>
      <option value="desc">Ordenar Z-A</option>
    </Form.Select>
  </Form>
);

export default Ordenador;
