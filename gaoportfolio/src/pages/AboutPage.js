import React from 'react';
import Hero from '../components/Hero';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            width: 200,
            border: 0,
            backgroundColor: color,
            height: 5
        }}
    />
);

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <div className="py-1">
                <ColoredLine color='#FCE29F' />
            </div>
        </div>

    );
}



export default AboutPage;
