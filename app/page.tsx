// Landing Page for application 

"use client"
import styled from "styled-components";
import SearchButton from "@/app/components/searchButton";

const StyledMain = styled.div`
    height: 86vh;
    background-color: #E7F3F3;
`
const MainContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
`
const ImgDiv = styled.div`
    width: 30vw;
`
const ImgFiller = styled.div`
    background-color: #FAFEED;
    height: 50vh;
    width: 30vw
`

const TextDiv = styled.div`
    width: 70vh;
    color: #61ACBF;
    gap: 1vh;
    align-items: center;
`

const StyledH1 = styled.h1`
    font-family: Tahoma ,serif;
    
`

const StyledDescription = styled.p`
    font-family: "Cascadia Code",serif;
    line-height: 1.6;
    font-size: calc(3px + 2vh);
    
`
const SearchButtonDiv = styled.div`
    width : 100%;
    display: flex;
    justify-content: flex-end;
`

export default function Home(){
  return(
      <StyledMain>
          <MainContainer>
              <ImgDiv>
                  <ImgFiller/>
              </ImgDiv>
              <TextDiv>
                  <StyledH1>[Project Title]</StyledH1>
                  <StyledDescription>Find what global holidays fall on any day of the year! This Application uses the Calendarific API to search for what holidays fall on any inputted day of the year. Navigate to search to start looking!</StyledDescription>
                  <SearchButtonDiv>
                      <SearchButton/>
                  </SearchButtonDiv>
              </TextDiv>
          </MainContainer>
      </StyledMain>
  );
}
