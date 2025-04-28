// Purpose: apply scrolling style to all pages, prevent bounce scrolling
// Created by: Sophia Tang

import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        overscroll-behavior: none; // Disable bounce scroll
        overflow-x: hidden; // No horizontal scrolling
        scroll-behavior: smooth; // smooth scrolling
    }
`;

export default GlobalStyle;