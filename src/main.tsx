import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlackWhiteProvider } from "@/contexts/BlackWhiteProvider.";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <BlackWhiteProvider>
      <GlobalStyle>
        <NavBar />
        <Home />
        <Footer />
      </GlobalStyle>
      </BlackWhiteProvider>
  </React.StrictMode>
);
