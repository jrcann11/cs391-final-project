// Purpose: Defines the basic page structure shared across the entire holiday app.
// Created by: Jessica Cannon
"use client";


import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";


// Styled body tag to apply page-wide background color, remove default margins,
// and set up flexbox for full-height layout
const Body = styled.body`
   background-color: #E7F3F3;
   margin: 0;
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;


// Styled main area where dynamic page content will be rendered
const Main = styled.main`
    flex: 1;
`;


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <Body>
            {/* Ensures header and footer are on each page */}
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Body>
        </html>
    );
}

