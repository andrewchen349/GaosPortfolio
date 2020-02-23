import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Card(props) {
    return(
        <Row>
            <div className="mt-4">
                <i onClick={()=> window.open(props.item.link, "_blank")}>
                    <img className="g-card-image" width="544" height="377" style={{height:'auto', width:'100%'}} src={props.item.imgSrc} alt={props.item.imgSrc} />
                </i>
            </div>
        </Row>
    );

}

export default Card;
