import React from "react";
import "./style.css";
import About from "../About";
import Languages from "../Languages";
import Projects from "../Projects";
import Contact from "../Contact";
import History from "../History"

function Main() {
    return(
        <main id="main">
            <About />
            <Languages />
            <Projects />
            <History />
            <Contact />
        </main>
    )
}

export default Main;