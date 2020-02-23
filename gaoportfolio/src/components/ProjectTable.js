import React from 'react';

import microdot from '../assets/newMicro.png';
import snapchat from '../assets/newsnapirena.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card.js'


class ProjectTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Microdot',
                    subTitle: 'StartUp',
                    imgSrc: microdot,
                    link: 'https://medium.com/@ijg24/microdot-a-digital-currency-for-lagging-economies-5208708f4b0',
                    selected: false
                },
                {
                    id: 1,
                    title: 'SnapChat Case Study',
                    subTitle: 'Personal Project',
                    imgSrc: snapchat,
                    link: 'https://medium.com/@ijg24/snapchat-concept-designing-for-a-more-relevant-discover-page-999207ca4cea',
                    selected: false
                },
            ]
        }
    }

    //Make Card
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item}  />
        })
    }


    render() {
        return(
            <Container fluid={false} >
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default ProjectTable;
