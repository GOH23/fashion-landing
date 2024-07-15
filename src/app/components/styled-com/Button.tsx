import styled from "styled-components"
import { motion } from 'framer-motion'
const CButton = styled(motion.button)`
        background-color: var(--button-back);
        color: var(--color-back);
        border-radius: 7px;
        text-transform: uppercase;
        font-size: 20px;
        width: fit-content;
        padding: 8px 20px;
        border: 2px solid transparent;
        transition: .5s ease-in-out;
        &:hover{
            background-color: white;
            color: var(--button-back);

            border: 2px solid var(--button-back);
        }

    `

export {CButton}