import { Col, Container, Row } from "react-bootstrap"
import { styled } from "styled-components"

const YellowContainer = styled(Container) <{ setheight: number }>`
    background-color: var(--color-yellow);
    display: flex;
    height: ${p => p.setheight}px;
    align-items: center;
    justify-content: space-around;
`
const GradientContainer = styled(Container)<{ setheight: number }>`
    background: linear-gradient(#E0C340 0%,#DFC23E 4%,#E1C441 7%,#E3C743 10%,
    #E4C542 13%,
    #E6C744 16%,
    #E7C845 20%,
    #E5C643 24%,
    #E6C945 31%,
    #E3C743 37%,
    #E9CA48 43%,
    #EDCE49 50%,
    #F0D44C 57%,
    #F4D84F 63%,
    #F6DA52 67%,
    #F7DB53 74%,
    #F9DD55 79%,
    #F9DF56 86%,
    #FAE157 93%,
    #F9DF56 100%);

    display: flex;
    height: ${p => p.setheight}px auto;
`
const HeaderSubContainer = styled(Row)`
    border-radius: 59px;
    background-color: var(--color-back);
    z-index: 0;
    padding: 0px 20px;
`
const ColDflexContainer = styled(Col)`
    display: flex;
    flex-flow: column;
    justify-content: center;
`
const PositionAdaptiveCol = styled(Col)`

`
export {ColDflexContainer,HeaderSubContainer,GradientContainer,YellowContainer,PositionAdaptiveCol}