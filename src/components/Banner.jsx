import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Banner = ({ text, img }) => {
  return (
    <section className='banner section'>
        <Container className='px-4'>
            <Row>
              <Col md={6}>
                <h1 className='banner-title'>
                    {text}
                </h1>
                <Button className='btn-orange'>Get Started</Button>
              </Col>
              <Col md={6}>
                <img src={img} alt="" />
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner