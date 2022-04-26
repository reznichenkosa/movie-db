import React from 'react';

import { Col, Container, Row, Button } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className='py-3'>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col>Your movies 2022</Col>
                    <Col className='d-flex align-items-center justify-content-end'>
                        <Button variant='link'
                                href='https://github.com/reznichenkosa/movie-db'
                                className='d-flex align-items-center'>
                                    <Github className='me-1'/> GitHub
                        </Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;