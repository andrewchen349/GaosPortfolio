import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from '../components/Content';


function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col className="text-center" md={8} sm={12}>
                        <h3 className="display-4 font-weight-light justift-content-center"> Miscellaneous <span style={{color:'#FCE29F'}}>Work</span></h3>
                    </Col>
                </Row>
                <Row className="offset-md-3">
                <Content className="col-md-2">
                    <p>I've done some side design work for fun that aren't big enough to be turned into case studies. Check them out below!</p>
                </Content>
            </Row>
            </Container>
        </Jumbotron>
    );
}
export default Hero;
