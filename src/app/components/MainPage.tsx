"use client"

import { Col, Container, Image, Row } from "react-bootstrap"
import styled from "styled-components"
import { CButton } from "./styled-com/Button"
import { ArivalSubTitle, ArrivalCard } from "./ArrivalCard"
import { motion } from 'framer-motion'
import { PartnerSwiper } from "./PartnersSwiper"
import { SubTitleFooterWhite, TextInputWithButton, TitleFooterWhite } from "./styled-com/FooterComponents"
import { ColDflexContainer, GradientContainer, HeaderSubContainer, YellowContainer, PositionAdaptiveCol } from "./styled-com/Containers"
import { DefaultTitle } from "./styled-com/Titles"

const SubContainerTitle = styled.p`
    font-size: 96px;
    position: relative;
    z-index: 3;
    width: fit-content;
    margin-bottom: 5px;
    line-height: 0.9;
    font-weight: 900;
    @media screen and (max-width: 1000px) {
        font-size: 50px;
        &::after{
            background-color: transparent;
        }
    }
`
const TitleStyles = styled(motion.h1)`
    text-transform: uppercase;
    font-size: 48px;
    font-weight: 900;
    position: relative;
    width: fit-content;
    &::after{
        position: absolute;
        content: '';
        bottom: 0;
        right: 0;
        z-index: -1;
        height: 35px;
        transform: skewX(-0.06turn);
        border-left: 186px solid var(--color-yellow);
        border-bottom-right-radius: 70px;
        border-top-left-radius: 50px;
    }
    

`
const SubContainerTitleWithRotatedBG = styled.p<{ backcolor: string }>`
    font-size: 96px;
    position: relative;
    z-index: 2;
    width: fit-content;
    margin-bottom: 5px;
    line-height: 0.9;
    font-weight: 900;
    &::after{
        content: '';
        left: 0;
        position: absolute;
        height: 100%;
        z-index: -1;
        width: 100%;
        padding: 60px;
        background-color: ${(p) => p.backcolor};
        transform: translate(0px, -20px) rotate(-2deg);
    }
    @media screen and (max-width: 1000px) {
        font-size: 50px;
        &::after{
            background-color: transparent;
        }
    }
`
export const MainPage = () => {
    const PartnersPaths = ["Rectangle 36.png", "Rectangle 38.png", "Rectangle 41.png", "Rectangle 43.png", "Rectangle 44.png", "Rectangle 45.png"]
    return (<main>
        <Container>

            <HeaderSubContainer sm={1} xs={1} md={2}>
                <ColDflexContainer>
                    <SubContainerTitleWithRotatedBG backcolor="white">
                        LET’S
                    </SubContainerTitleWithRotatedBG>
                    <SubContainerTitle>
                        EXPLORE
                    </SubContainerTitle>
                    <SubContainerTitleWithRotatedBG backcolor="#EBD96B">
                        UNIQUE
                    </SubContainerTitleWithRotatedBG>
                    <SubContainerTitle>
                        CLOTHES.
                    </SubContainerTitle>
                    <p>Live for Influential and Innovative fashion!</p>
                    <CButton>Shop Now</CButton>
                </ColDflexContainer>
                <PositionAdaptiveCol>
                    <img src="./site-imgs/girl.png" alt="" className="img-fluid" />
                </PositionAdaptiveCol>
            </HeaderSubContainer>

        </Container>
        <YellowContainer setheight={156} className="mt-5" fluid>
            <PartnerSwiper PartnerPaths={PartnersPaths} />

        </YellowContainer>

        <Container>
            <div className="d-flex justify-content-sm-center justify-content-xs-center">
                <TitleStyles className="h2  mt-5">new arrivals</TitleStyles>
            </div>
            <Row xs={1} sm={1} md={3}>
                <Col>
                    <ArrivalCard TitleCard="Hoodies & Sweetshirt" TitleSubName="Explore Now!" ImageSource="./clothes-images/Rectangle 20.png" />
                </Col>
                <Col>
                    <ArrivalCard TitleCard="Coats & Parkas" TitleSubName="Explore Now!" ImageSource="./clothes-images/Rectangle 21.png" />
                </Col>
                <Col>
                    <ArrivalCard TitleCard="Tees & T-Shirt" TitleSubName="Explore Now!" ImageSource="./clothes-images/Rectangle 22.png" />
                </Col>
            </Row>



        </Container>
        <GradientContainer setheight={900} className="mt-5" fluid>
            <Row className="h-100 w-100  m-0 justify-content-center align-items-center">
                <Col md={6} className="p-0">
                    <img src="./site-imgs/image 12.png" className="img-fluid" alt="" />
                </Col>
                <Col md={6}>
                    <SubContainerTitleWithRotatedBG style={{ color: 'black' }} backcolor="white">
                        PAYDAY
                    </SubContainerTitleWithRotatedBG>
                    <SubContainerTitle style={{ color: 'black' }}>
                        SALE NOW
                    </SubContainerTitle>
                    <DefaultTitle size={36}>Spend minimal $100 get 30% off
                        voucher code for your next purchase
                    </DefaultTitle>
                    <DefaultTitle size={36} bold>
                        1 June - 10 June 2021
                    </DefaultTitle>
                    <DefaultTitle size={36}>*Terms & Conditions apply</DefaultTitle>
                    <CButton>Shop now</CButton>
                </Col>
            </Row>
        </GradientContainer>
        <Container fluid="sm">
            <div className="d-flex d-flex justify-content-sm-center justify-content-xs-center">
                <TitleStyles className="h2 mt-5">Young’s Favourite</TitleStyles>
            </div>
            <Row sm={1} xs={1} className="mt-5" md={2}>
                <Col>
                    <ArrivalCard TitleCard="Trending on instagram" TitleSubName="Explore Now!" ImageSource="./clothes-images/Rectangle 49.png" />
                </Col>
                <Col>
                    <ArrivalCard TitleCard="All Under $40" TitleSubName="Explore Now!" ImageSource="./clothes-images/Rectangle 50.png" />
                </Col>
            </Row>
        </Container>
        <Container fluid="md">
            <Row xs={1} md={2} sm={1} className="justify-content-center text-sm-center align-items-center">
                <Col>
                    <DefaultTitle size={48} uppercase bold>DOWNLOAD APP &
                        GET THE VOUCHER!
                    </DefaultTitle>
                    <ArivalSubTitle>Get 30% off for first transaction using
                        Rondovision mobile app for now.</ArivalSubTitle>
                    <Row className="text-center">
                        <Col >
                            <a><img src="./site-imgs/Rectangle 18.png" alt="" /></a>
                        </Col>
                        <Col>
                            <a ><img src="./site-imgs/Rectangle 55.png" alt="" /></a>
                        </Col>

                    </Row>
                </Col>
                <Col>
                    <Image src="./site-imgs/Group 87.png" alt="" fluid />
                </Col>
            </Row>
        </Container>
        <YellowContainer setheight={600} className="mt-5" fluid>
            <Row className="justify-content-center" style={{ maxWidth: '1010px' }}>
                <TitleFooterWhite>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</TitleFooterWhite>
                <SubTitleFooterWhite>Type your email down below and be young wild generation</SubTitleFooterWhite>
                <TextInputWithButton />
            </Row>
        </YellowContainer>
    </main>)
}