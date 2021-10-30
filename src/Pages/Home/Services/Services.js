import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Services = () => {
    const {elements}=useAuth();
    return (
        <div>
            {elements.length}
            <h1>This is services</h1>
            <Row xs={1} md={5} className="g-4">

                {
                    elements.map(event =>




                        <Col>
                            <Link to={`/service/${event._id}`}>
                                <Card>
                                    <Card.Img variant="top" src={event.img} />
                                    <Card.Body className='bg-warning'>
                                        <Card.Title >{event.name}</Card.Title>
                                    </Card.Body>
                                </Card></Link>
                        </Col>





                    )
                }
            </Row>
        </div>
    );
};

export default Services;