// Purpose: Page navigation. To homepage/instructions and search section
//Created by: Alyssa Najera

"use client"
import styled from "styled-components"
import Link from "next/link"

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 750px){
        width: 100%;
        justify-content: center;
    }
`

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 750px){
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
        padding-bottom: 2vh;
    }

`
const StyledLink = styled(Link)`
    font-family: "Cascadia Code",serif;
    padding: 0 2vw;
    text-decoration: none;
    font-size: calc(8px + 2vh);
    color: #AC9D56;
    &:visited {
        color: #AC9D56;
    }
    @media screen and (max-width: 750px){
        font-size: calc(5px + 2vh);
    }
`

export default function Navigation() {
    return(
        <StyledNav>
            <StyledList>
                {/* Navigate to Landing Page */}
                <li><StyledLink href={'/'}>How to Use</StyledLink></li>
                {/* Navigate to Search*/}
                <li><StyledLink href={'/search'}>Search</StyledLink></li>
            </StyledList>
        </StyledNav>


    )

}