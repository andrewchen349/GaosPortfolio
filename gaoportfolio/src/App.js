import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Import Pages
import HomePage from './pages/HomePage';

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
                subTitle: "I am a product designer, marketer, and front-end developer, creating technologies for communities",
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
                               <h5> <Link className="nav-link display-5 font-weight-semibold" to="/me"><span style={{color:'#fed25f'}}>resume</span></Link></h5>
                           </Nav>
                       </Navbar.Collapse>
                   </Navbar>
                   <Route path="/" exact render={() => <HomePage title={this.state.home.title}  subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
               </Container>
           </Router>
       );
   }
}
export default App;
