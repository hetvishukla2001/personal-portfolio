import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from 'react';
import logo from '../asserts/img/logo192.png';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
       const onScroll = () =>{
        if(window.scrollY > 50 ){
            setScrolled (true);
        }else {
            setScrolled(false);
        }
    }
        window.addEventListener("scroll",onScroll)
    })
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);

    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            React-Bootstrap
            {/* <img src={logo} alt='logo'/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
         <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === "experience" ? "active navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('experience')}>Experience </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <button className='vvd' onClick={() => console.log("let's connect")}>let's connect </button>
                
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;