"use client"
import { Container, Nav, Navbar } from "react-bootstrap"
import styled from "styled-components"
import { CButton } from "./styled-com/Button"
const NavBarBrand = styled(Navbar.Brand)`
    font-size: 36px;
    display: flex;
    align-items: center;
    font-weight: 900;
`
const NavLink = styled(Nav.Link)`
    font-size: 18px;
`
const HeaderComponent = () => {
    return (
        <Navbar expand="lg" bg="white" sticky="top">
            <Container>
                <NavBarBrand className="text-uppercase"><img src="./Vector.png" alt="" />FASHION</NavBarBrand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Item>
                            <NavLink>CATALOGUE</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink>FASHION</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink>FAVOURITE</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink>LIFESTYLE</NavLink>
                        </Nav.Item>
                        <Nav.Item >
                            <CButton>Sign Up</CButton>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default HeaderComponent