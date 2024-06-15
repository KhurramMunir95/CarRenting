import React from 'react'
import { Card } from 'react-bootstrap'

const Features = ({ feature, image }) => {
  return (
    <Card>
      <Card.Body>
        <div className='d-flex align-items-center gap-3'>
            <Card.Header className='border-0 p-0 bg-transparent'>{ image ? <a href={feature.url} target='_blank'><img src={feature.image} width='100' /></a>  :  feature.image}</Card.Header>
            <div>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Subtitle className="text-muted">{feature.subtitle}</Card.Subtitle>
            </div>
        </div>
        <Card.Text className='font-wight-bold'>
            {feature.content}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Features