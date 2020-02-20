import React from 'react';
import Hero from '../components/Hero';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>

    );
}
export default HomePage;
