import styled from "styled-components";
import { CButton } from "./Button";
import { Col, Row } from "react-bootstrap";

const TitleFooterWhite = styled.p`
    font-size: 55px;
    font-weight: 900;
    color: white;
    line-height: 60px;
    text-align: center;
    @media screen and (max-width: 450px) {
        font-size: 30px;
        line-height: 40px;
    }
`
const SubTitleFooterWhite = styled.p`
font-size: 32px;
font-weight: 900;
color: #FFFCF8;
text-align: center;
@media screen and (max-width: 450px) {
        font-size: 20px;

    }
`
const InputRowContainer = styled(Row)`
    justify-content: center;
    width: fit-content;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
`
const TextInput = styled.input`
    border: 0;
    font-size: 24px;
    height: 100%;
    &:focus{
        border: 0;
    }
    @media screen and (max-width: 450px) {
        font-size: 14px;

    }
`
const TextInputWithButton = () => {
    return (<InputRowContainer >
        <Col className="p-0">
            <TextInput placeholder="Add your email here" />
        </Col>
        <Col className="p-0">
            <CButton>Send</CButton>
        </Col>

    </InputRowContainer>)
}
export { TitleFooterWhite, SubTitleFooterWhite, TextInputWithButton, TextInput }