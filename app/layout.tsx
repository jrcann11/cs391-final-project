"use client";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const Body = styled.body`
    background-color: #E7F3F3;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

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
