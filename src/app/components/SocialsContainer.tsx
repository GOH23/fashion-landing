"use client"
import { IconType } from "react-icons"
import styled from "styled-components"

const SContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: var(--color-yellow);
    color: var(--button-back);
    border: 0;
    height: 52px;
    width: 52px;
    font-size: 30px;
    border: 2px solid transparent;
    transition: ease-in-out .5s;
    &:hover{
        color: var(--color-yellow);
        background-color: black;
        border: 2px solid var(--color-yellow);
    }
    border-radius: 15px;
`
const SocialsContainer = ({Icon,href}: {Icon: IconType,href?: string | undefined})=>{
    return(<SContainer href={href}>
        <Icon/>
    </SContainer>)
}
export {SContainer,SocialsContainer}