import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const VehicleCard = ({ img }) => {
  return (
    <Card>
      <Card.Img variant="top" className='rounded p-2' src={img} />
      <Card.Body>
        <Card.Title className='bold'>Lucid Air Pure</Card.Title>
        <Row className='align-items-center justify-content-between'>
            <Col md={6}>
                <Card.Text>
                    <p className='bold m-0'>$100 / Day</p>
                </Card.Text>
            </Col>
            <Col md={6}>
                <div className="text-end">
                    <Button className='btn-orange'>Rent</Button>
                </div>
            </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default VehicleCard