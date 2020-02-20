import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Import Pages, Componets, Resources
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Resume from './assets/mainresume.pdf';

//Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Other Imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

library.add(fab, faGithub, faEnvelope, faLinkedin)

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: 'Irena Gao',
            headerLinks:
            [
                { title: 'work', path: "/"},
                { title: 'me',   path: "/me"},
                { title: 'resume', path: "/resume"}
            ],
            home:{
                title: "Hi I'm Irena",
                subTitle: "I am a product designer, marketer, and front-end developer, creating technologies for communities.",
                text: "Recently, I interned at Dynalec Corp. Check out some of my work below!"
            },
            resume:{
                title: "resume",
            },
            me:{
                title: "About Me",
            }
        }
    }
    render(){
       return(
           <Router>
               <Container fluid={true}>
                   <Navbar bg="transparent" expand="lg">
                       <Navbar.Toggle aria-controls="navbar-toggle"/>
                       <Navbar.Collapse id="navbar-toggle">
                           <Nav className="ml-auto">
                               <h5> <Link className="nav-link display-5 font-weight-semibold" to="/">work</Link></h5>
                               <h5> <Link className="nav-link display-5 font-weight-semibold" to="/me">me</Link></h5>
                               <h5> <a className="nav-link display-5 font-weight-semibold" href={Resume} target="_blank"><span style={{color:'#FCE29F'}}>resume</span></a></h5>
                           </Nav>
                       </Navbar.Collapse>
                   </Navbar>
                   <Route path="/" exact render={() => <HomePage title={this.state.home.title}  subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                   <Route path="/me" render={() => <AboutPage title={this.state.me.title} />} />
               </Container>
           </Router>
       );
   }
}
export default App;
