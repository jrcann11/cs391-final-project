"use client"
import styled from "styled-components"
import Link from "next/link"

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
`

const StyledList = styled.ul`
    display: flex;
    list-style: none;
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
`

export default function Navigation() {
    return(
        <StyledNav>
            <StyledList>
                <li><StyledLink href={'/'}>How to Use</StyledLink></li>
                <li><StyledLink href={'/search'}>Search</StyledLink></li>
            </StyledList>
        </StyledNav>


    )

}