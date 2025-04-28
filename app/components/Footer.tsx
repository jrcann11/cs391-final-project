"use client"
import styled from "styled-components"
import Link from "next/link"

const StyledFooter = styled.div`
    background-color: #BAD6E1;
    display: flex;
    padding: 0 4vw;
    justify-content: center;
    text-align: center;
`

const StyledCredits = styled.p`
    font-family: "Cascadia Code",serif;
    color: #61ACBF;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #61ACBF;
    &:visited {
        color: #61ACBF;
    }
`

export default function Footer(){
    return(
        <StyledFooter>
            <StyledCredits>All rights reserved by Erin Cheng, Jessica Cannon, Elva Zou, Sophia Tang, and Alyssa Najera: <StyledLink href="">Credits</StyledLink> &#169;</StyledCredits>
        </StyledFooter>
    )

}