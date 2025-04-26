import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({children,}:
    Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>
      <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
