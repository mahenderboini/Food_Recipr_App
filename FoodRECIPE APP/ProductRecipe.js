
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductRecipe({ data }) {
  return (
    <div>
      <div className='row'>
        {data.map(item => (
          <Card key={item.recipe.uri} style={{ width: '20rem', margin: '8px' }}>
            <Card.Img variant="top" src={item.recipe.image} alt={item.recipe.label} />
            <Card.Body>
              <Card.Title>{item.recipe.label}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Buy</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductRecipe;
