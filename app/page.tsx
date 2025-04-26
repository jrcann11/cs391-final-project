// Landing Page for application

"use client"
import styled from "styled-components";
import SearchButton from "@/app/components/searchButton";
import {useState} from "react";
import {Holiday} from "@/app/interfaces/holidays";

const StyledMain = styled.div`
    height: 86vh;
    width: auto;
    background-color: #E7F3F3;
`
const MainContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1vw;
    gap: 1vw;
    @media screen and (max-width: 750px){
        flex-direction: column;

    }
`
const ImgDiv = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 750px){
        width: 80%;

    }
`
const Img = styled.img`
    height: auto;
    width: 25vw;
    @media screen and (max-width: 750px){
        width: 50vw;

    }
`

const TextDiv = styled.div`
    width: 30%;
    color: #61ACBF;
    align-items: center;
    @media screen and (max-width: 750px){
        width: 80%;
    }
`

const StyledH1 = styled.h1`
    font-family: Tahoma ,serif;
    font-size: calc(10px + 3vh);
    @media screen and (max-width: 750px){
        text-align: center;
    }
`

const StyledDescription = styled.p`
    font-family: "Cascadia Code",serif;
    line-height: 1.6;
    font-size: calc(3px + 2vh);
    @media screen and (max-width: 750px){
        font-size: calc(10px + 1vh);
        text-align: center;
    }
    
`
const SearchButtonDiv = styled.div`
    width : 100%;
    display: flex;
    justify-content: flex-end;
`
export default function Home(){
    // Local state to store the holidays returned by the API
    const [holidays, setHolidays] = useState<Holiday[]>([]);

    // fetchHolidays is triggered when the user submits a date via the input form
    // It calls the API route with query parameters for month and day, and updates state with the result
    // Completed by Jessica Cannon
    const fetchHolidays = async (month: string, day: string) => {
        const res = await fetch(`/api/holidays?month=${month}&day=${day}`);
        const data = await res.json();
        setHolidays(data.holidays || []); // Default to empty array if response is invalid or empty
    };

    // fetchHolidays can be used with the input form UI component below
    // holidays can be used with holiday display UI component below (will delete these comments later)

    return(
      <StyledMain>
          <MainContainer>
              <ImgDiv>
                  <Img src="logo.png" alt="logo" />
              </ImgDiv>
              <TextDiv>
                  <StyledH1>Holiday Twins</StyledH1>
                  <StyledDescription>Find what US holidays fall on any day of the year! This Application uses the Calendarific API to search for what holidays fall on any inputted day of the year. Navigate to search to start looking!</StyledDescription>
                  <SearchButtonDiv>
                      <SearchButton/>
                  </SearchButtonDiv>
              </TextDiv>
          </MainContainer>
      </StyledMain>
  );
}
