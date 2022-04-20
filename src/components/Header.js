import React, {useState} from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import {AiOutlineUser, AiOutlineFileText, AiOutlineFundProjectionScreen, } from "react-icons/ai";
import {BsFillEmojiHeartEyesFill} from "react-icons/bs";


function Header() {
    const [navUnderline, updateNavbar] = useState(false);
    function scrollHandler() {
        if(window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);
    return (
        <Navbar bg="light" expand="lg" className={navUnderline ? "sticky" : "navbar"}>
            <Container>
                <Navbar.Brand className="name" href="/">Laura Lou</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="about" href="/about">
                            <AiOutlineUser style={{marginBottom: '4px', marginRight: '4px'}}/>
                            About</Nav.Link>
                        <Nav.Link className="resume" href="/resume">
                            <AiOutlineFileText style={{marginBottom: '4px', marginRight: '4px'}}/>
                            Resume</Nav.Link>
                        <Nav.Link className="projects" href="/Projects">
                            <AiOutlineFundProjectionScreen style={{marginBottom: '4px', marginRight: '4px'}}/>
                            Projects</Nav.Link>
                        <Nav.Link className="cuties" href="/cuties">
                            <BsFillEmojiHeartEyesFill style={{marginBottom: '4px', marginRight: '4px'}}/>
                            Cuties</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;