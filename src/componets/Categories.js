import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Categories = () => {
    return (
        <section>
            <Container>
                <h3>Categories</h3>
                <Row className="text-white mt-4 categories">
                    <Col md={4}>
                        <div className="mb-3 d-flex flex-column flex-lg-row  bg-success rounded justify-content-between align-items-center px-3">
                            <h1 className="order-2 order-lg-1">Watch</h1>
                            <img className="order-1 order-lg-2" src="https://solaimanshadin.github.io/panda-commerce/images/categories/watch.png" alt="..." />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="mb-3 d-flex bg-warning rounded justify-content-between align-items-center px-3">
                            <h1 className="col-7">Bagpack</h1>
                            <div className="col-5">
                                <img className="img-fluid"  src="https://solaimanshadin.github.io/panda-commerce/images/categories/bag.png" alt="..." />
                            </div>
                           
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="mb-3 d-flex bg-primary rounded justify-content-between align-items-center px-3">
                            <h1>Shoe</h1>
                            <img src="https://solaimanshadin.github.io/panda-commerce/images/categories/shoes.png" alt="..." />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Categories;