"use client"
import styled from "styled-components"
import Navigation from "@/app/components/navigation";
import Link from "next/link"

const StyledHeader = styled.div`
    font-family: "Cascadia Code",serif;
    background-color: #FAFEED;
    display: flex;
    padding: 0 4vw;
    justify-content: space-between;
`


const StyledHeading = styled.h1`
    font-family: Tahoma,serif;
    font-size: calc(5px + 3vh);
    padding: 0 2vw;
    font-weight: bold;
    color: #AC9D56
`
const StyledSubHeading = styled.p`
    font-size: calc(10px + 1vh);
    padding: 0 2vw;
    font-weight: 400;
    color: #AC9D56
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

export default function Header(){
    return(
        <StyledHeader>
            <StyledLink href="/">
            <header>
                <StyledHeading>[Project Name]</StyledHeading>
                <StyledSubHeading>Find a Holiday For Any Day!</StyledSubHeading>
            </header>
            </StyledLink>
            <Navigation/>
        </StyledHeader>
    )

}