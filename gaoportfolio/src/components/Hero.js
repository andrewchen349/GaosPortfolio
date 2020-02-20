import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ButtonToolbar} from 'react-bootstrap';
import { Button } from 'react-bootstrap';


//Social Media Bar
import ListGroup from 'react-bootstrap/ListGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col className="text-left" md={9} sm={12}>
                        <h3 className="display-4 font-weight-bolder justift-content-center"><span style={{color:'#AED9E2'}}>Hi I'm Irena!</span></h3>
                    </Col>
                    < Col className="text-left py-2" md={9} sm={12}>
                        { props.subTitle && <h4 className="display-6 font-weight-light">{props.subTitle}</h4> }
                        { props.text && <h4 className="display-6 font-weight-light">{props.text}</h4> }
                    </Col>
                    <Col className="text-left py-3 ml-0" md={9} sm={12}>
                        <FontAwesomeIcon className="ml-3" icon={faGithub} size='2x' />
                        <FontAwesomeIcon className="ml-3" icon={faLinkedin} size='2x' />
                        <FontAwesomeIcon className="ml-3" icon={faEnvelope} size='2x' />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;
