/*
Purpose: This component displays a loading indicator while data is being fetched.
It visually informs the user that a request is in progress by showing the text "Loading..."
along with an animated spinning icon.
Created by: Jessica Cannon
*/

import styled, { keyframes } from "styled-components";

// Define a keyframe animation to spin the loader in a full 360-degree rotation
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

// Styled wrapper to lay out the spinner and "Loading..." text side by side
const StyledLoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Cascadia Code", serif;
    color: #61ACBF;
    font-size: calc(10px + 3vh);
    text-align: center;
    gap: 1rem;
`;

// Styled circular spinner with border animation
const Spinner = styled.div`
    width: 2.5vh;
    height: 2.5vh;
    border: 0.4vh solid #61ACBF;
    border-top: 0.4vh solid transparent;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

// Functional component that renders the spinner and loading message
export default function Loading() {
    return (
        <StyledLoadingWrapper>
            <Spinner />
            Loading...
        </StyledLoadingWrapper>
    );
}