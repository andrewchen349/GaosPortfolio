import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListGroup from 'react-bootstrap/ListGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){

    return(

        <footer className="mt-5">
            <Container className="justify-content-center" fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <p> Developed with
                            <a href="https://andrewchen349.github.io/"> Andrew Chen </a>
                        </p>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <ListGroup horizontal variant="flush" className="bg-transparent">
                          <ListGroup.Item action href="https://github.com/IrenaGao/" target="_blank"><FontAwesomeIcon icon={faGithub} /></ListGroup.Item>
                          <ListGroup.Item action href="mailto:ijg24@cornell.edu" target="_blank"><FontAwesomeIcon icon="envelope" /></ListGroup.Item>
                          <ListGroup.Item action href="https://www.linkedin.com/in/irena-g-936b69128/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer;
