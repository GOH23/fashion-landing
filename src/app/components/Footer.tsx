"use client"
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { SocialsContainer } from "./SocialsContainer"
const FooterContainer = styled(Container)`
    background-color: var(--button-back);
    height: 545px;
    align-items: center;
    display: flex;
`
const FooterTitle = styled.p`
    font-size: 36px;
    font-weight: 900;
    color: var(--color-back);
    text-transform: uppercase;
`
const FooterSubTitle = styled.p`

    font-size: 20px;
    color: var(--color-gray);
`
const FooterTitleLink = styled.p`
    font-size: 20px;
    text-align: start;
    color: var(--color-gray);
    text-decoration: none;
`
const FooterLink = styled.a`
    display: block;
    text-align: start;
    font-size: 18px;
    color: #EAEAEA;
    text-decoration: none;
    transition: ease-in-out .5s;
    &:hover{
        color: var(--color-yellow);
    }
`
const FooterComponent = () => {
    return (<FooterContainer fluid>
        <Container>
            <Row md={2} >
                <Col md={4}>
                    <FooterTitle>fashion</FooterTitle>
                    <FooterSubTitle>
                        Complete your style with awesome clothes from us.
                    </FooterSubTitle>
                    <div className="d-flex flex-row justify-content-around">
                        <SocialsContainer Icon={FaFacebookF} />
                        <SocialsContainer Icon={CiInstagram} />
                        <SocialsContainer Icon={FaTwitter} />
                        <SocialsContainer Icon={FaLinkedinIn} />
                    </div>
                </Col>
                <Col md={8}>
                    <Row className="gy-2">
                        <Col >
                            <FooterTitleLink>Company</FooterTitleLink>
                            <FooterLink href="">About</FooterLink>
                            <FooterLink href="">Contact us</FooterLink>
                            <FooterLink href="">Support</FooterLink>
                            <FooterLink href="">Careers</FooterLink>
                        </Col>
                        <Col>
                            <FooterTitleLink>Quick Link</FooterTitleLink>
                            <FooterLink href="">Share Location</FooterLink>
                            <FooterLink href="">Orders Tracking</FooterLink>
                            <FooterLink href="">Size Guide</FooterLink>
                            <FooterLink href="">FAQs</FooterLink>
                        </Col>
                        <Col>
                            <FooterTitleLink>Legal</FooterTitleLink>
                            <FooterLink href="">Terms & conditions</FooterLink>
                            <FooterLink href="">Privacy Policy</FooterLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </FooterContainer>)
}
export { FooterTitle, FooterContainer, FooterLink, FooterSubTitle }
export default FooterComponent