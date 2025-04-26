import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

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
