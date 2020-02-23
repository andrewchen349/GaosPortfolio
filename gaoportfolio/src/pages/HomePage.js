import React from 'react';
import Hero from '../components/Hero';
import ProjectTable from '../components/ProjectTable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            width: 120,
            border: 0,
            backgroundColor: color,
            height: 5
        }}
    />
);

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <div className="py-1">
                <ColoredLine color='#FCE29F' />
            </div>
            <div>
                <ProjectTable />
            </div>
        </div>

    );
}
export default HomePage;
