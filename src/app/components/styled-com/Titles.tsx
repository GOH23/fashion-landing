import styled from "styled-components";

const DefaultTitle = styled.p<{bold?: boolean,uppercase?: boolean,size: number}>`
    font-size: ${p=>p.size}px;
    font-weight: ${p=>(!p.bold ? 'normal': 900)};
    text-transform: ${p=>(!p.uppercase ? 'capitalize' : 'uppercase')} ;
    color: black;
    @media screen and (max-width: 840px) {
        font-size: ${p=>p.size-10}px;

    }
`
export {DefaultTitle}