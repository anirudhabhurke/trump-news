import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Error = (props) => {
      return (
            <Container className={'d-flex justify-content-md-center'}>
                  <Card text={'white'} style={{ width: '18rem', margin: '2em', background: '#e77681' }}>
                        <Card.Body>
                              <Card.Title>Oops! Something is wrong</Card.Title>
                              <Card.Text>{props.errorMessage}</Card.Text>{' '}
                        </Card.Body>{' '}
                  </Card>
            </Container>
      );
};

export default Error;
