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
`

export default function SearchButton(){
    return(
        <ButtonDiv>
            <StyledLink href="/search">
                To Search
            </StyledLink>
        </ButtonDiv>


    );
}
