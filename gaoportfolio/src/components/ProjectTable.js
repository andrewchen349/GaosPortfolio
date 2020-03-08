import React from 'react';

import microdot from '../assets/newMicro.png';
import snapchat from '../assets/newsnapirena.png';
import chett from '../assets/chettban.png';
import lcl from '../assets/lifechanginglabscard.png';
import agua from '../assets/aguaclara.png';
import dyn from '../assets/dyn.png';
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
                    title: 'Chet Case Study',
                    subTitle: 'Personal Project',
                    imgSrc: chett,
                    link: 'https://medium.com/@ijg24/chet-motivating-chore-completion-through-a-virtual-pet-7ecf5d5934a',
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
                {
                    id: 4,
                    title: 'AguaClara',
                    subTitle: 'Design',
                    imgSrc: agua,
                    link: 'https://medium.com/@ijg24/aguaclara-redefining-the-need-for-clean-water-30a93810b4d0',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Microdot',
                    subTitle: 'StartUp',
                    imgSrc: microdot,
                    link: 'https://medium.com/@ijg24/microdot-a-digital-currency-for-lagging-economies-5208708f4b0',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Life Changing Lab',
                    subTitle: 'Design',
                    imgSrc: lcl,
                    link: '/misc',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Dynalec',
                    subTitle: 'Design',
                    imgSrc: dyn,
                    link: 'https://medium.com/@ijg24/dynalec-corporation-managing-employees-and-courses-313e2c34e2c6',
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
