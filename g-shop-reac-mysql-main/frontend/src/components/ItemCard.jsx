import React from 'react';
import { Card } from 'react-bootstrap';

const ItemCard = ({ item }) => (
  <Card className="mb-4 shadow-sm h-100">
    <div style={{ height: '250px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
      <Card.Img 
        variant="top" 
        src={item.imagen} 
        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
      />
    </div>

    <Card.Body className="d-flex flex-column">
      <Card.Title style={{ fontSize: '1.1rem', fontWeight: '600', minHeight: '48px' }}>
        {item.nombre}
      </Card.Title>

      <Card.Text style={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', fontSize: '0.9rem' }}>
        {item.descripcion}
      </Card.Text>

      <div className="mt-2">
        <strong style={{ fontSize: '1.1rem' }}>${item.precio}</strong>
      </div>
    </Card.Body>
  </Card>
);

export default ItemCard;
