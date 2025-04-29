// Purpose: Search button on Landing Page. Used as a quick navigation to Search functionality
// Created by: Alyssa Najera

"use client"
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
    font-family: "Cascadia Code",serif;
    text-decoration: none;
    color: #AC9D56;
    font-size: calc(5px + 2vh);
`

const ButtonDiv = styled.div`
    background-color: #FAFEED;
    padding: 2vh;
    width: 20vh;
    text-align: center;
    margin: 5vh 0;
    &:hover {
        background-color: #dcefdc;
        cursor: pointer;
    }

`

export default function SearchButton(){
    return(
        <ButtonDiv>
            {/* Navigate to Search page --> where all the functionality is found */}
            <StyledLink href="/search">
                To Search
            </StyledLink>
        </ButtonDiv>


    );
}
