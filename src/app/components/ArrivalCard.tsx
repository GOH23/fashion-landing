import { Col, Image, Row } from "react-bootstrap"
import styled from "styled-components"
import { motion } from 'framer-motion'
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
const ArivalTitle = styled.p`
    font-size: 26px;
    font-weight: 900;
    color: #191919;

`
const ArivalCard = styled(motion.div)`
    cursor: pointer;
    display: flex;
    flex-flow: column;
    justify-content: center;
`
const ArivalSubTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: var(--color-gray);
`
const ArrowNext = styled(motion.a)`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    font-size: 30px;
    font-weight: 500;
    color: var(--color-gray);
`
const SImage = styled(motion.img)`
    filter: saturate(0);
`
const ArrivalCard = ({ ImageSource, Href, TitleCard, TitleSubName }: { ImageSource: string, Href?: string, TitleCard?: string, TitleSubName?: string }) => {
    const [OnHovering,SetOnHovering] = useState(false);
    return (<ArivalCard initial={{opacity: 0}} whileInView={{opacity: 1}} onMouseEnter={()=>SetOnHovering(true)} onMouseLeave={()=>SetOnHovering(false)} transition={{duration: 1}}>
        <SImage animate={OnHovering ? {filter: "saturate(1)"} : {filter: "saturate(0)"}} transition={{duration: 1}} className="img-fluid" src={ImageSource} alt="" />
        {TitleCard || TitleSubName || Href ? <Row sm={2} md={2}>
            <Col xs={10} sm={10} md={10}>
                <ArivalTitle>{TitleCard}</ArivalTitle>
                <ArivalSubTitle>{TitleSubName}</ArivalSubTitle>
            </Col>
            <Col xs={2} sm={2} md={2}>
                <ArrowNext initial={{x: 0}} animate={OnHovering ? { x: 5} : {x: 0}} transition={ {repeat: OnHovering ? Infinity : 1, delay: 0, duration: 1, type: 'spring', repeatType: 'mirror'} } href={Href}><FaArrowRightLong /></ArrowNext>
            </Col>
        </Row> : null}


    </ArivalCard>)
}
export { ArrivalCard,ArivalSubTitle }