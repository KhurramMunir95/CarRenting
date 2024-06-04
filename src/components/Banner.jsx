import React from 'react'
import { Container } from 'react-bootstrap'

const Banner = ({ text }) => {
  return (
    <div className='banner section'>
        <Container>
            <h1 className='banner-title'>
                {text}
            </h1>
        </Container>
    </div>
  )
}

export default Banner