import React from 'react';
import { Accordion, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';

const HeroArea = () => {
    return (
        <Container className="my-3 my-md-5">
            <Row>
                <Col md={4} className="order-2 order-md-1">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as="p" eventKey="0">
                          <p className="d-block d-md-none"> >> Choose Category</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" active>
                                    Cras justo odio
                                </ListGroup.Item>
                                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item as="li" disabled>
                                    Morbi leo risus
                                </ListGroup.Item>
                                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                    
                    </Accordion>
              
                </Col>
                <Col md={8} className="order-1 order-md-2 mb-3 mb-md-0">
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col md="6">
                                        <img
                                    className="d-block mx-auto col-md-12 h-100"
                                    src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvMWM3YjNkNmJlYWE4LTQ1MTMyYWJjLWY3ZjYtNDBjMy05YzRkLTgyMzRhM2I5ZmZmNC5qcGciLCAiZWRpdHMiOiB7InJlc2l6ZSI6IHsid2lkdGgiOiAxMzUwLCAiaGVpZ2h0IjogNDYwLCAiZml0IjogImNvbnRhaW4ifSwgImJhY2tncm91bmQiOiB7InIiOiAyNTUsICJnIjogMjU1LCAiYiI6IDI1NSwgImFscGhhIjogMX0sICJmbGF0dGVuIjogdHJ1ZSwgImpwZWciOiB7InF1YWxpdHkiOiA3NX19fQ=="
                                    alt="First slide"
                                    />
                                </Col>
                                <Col md="6">
                                    <img
                                    className="d-block w-100 h-100"
                                    src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvNzMzYjMyOWMwZjNmLTc2YWJkMzhiLWQ4YmItNDI4ZS05ZjRiLTI4ZmQ3Mzk4NDdjNS5qcGciLCAiZWRpdHMiOiB7InJlc2l6ZSI6IHsid2lkdGgiOiAxMzUwLCAiaGVpZ2h0IjogNDYwLCAiZml0IjogImNvbnRhaW4ifSwgImJhY2tncm91bmQiOiB7InIiOiAyNTUsICJnIjogMjU1LCAiYiI6IDI1NSwgImFscGhhIjogMX0sICJmbGF0dGVuIjogdHJ1ZSwgImpwZWciOiB7InF1YWxpdHkiOiA3NX19fQ=="
                                    alt="Third slide"
                                    />
                                </Col>
                            </Row>
                           
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvNzMzYjMyOWMwZjNmLTc2YWJkMzhiLWQ4YmItNDI4ZS05ZjRiLTI4ZmQ3Mzk4NDdjNS5qcGciLCAiZWRpdHMiOiB7InJlc2l6ZSI6IHsid2lkdGgiOiAxMzUwLCAiaGVpZ2h0IjogNDYwLCAiZml0IjogImNvbnRhaW4ifSwgImJhY2tncm91bmQiOiB7InIiOiAyNTUsICJnIjogMjU1LCAiYiI6IDI1NSwgImFscGhhIjogMX0sICJmbGF0dGVuIjogdHJ1ZSwgImpwZWciOiB7InF1YWxpdHkiOiA3NX19fQ=="
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                       
                    </Carousel>
                </Col>
            </Row>
        </Container>
        
    );
};

export default HeroArea;