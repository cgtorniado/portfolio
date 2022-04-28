import { useState } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import '../index.css'
import WorkExp from "./WorkExp";
import Footer from "./Footer";
import FinalHero from "./FinalHero";
import Logo from '../Images/logo.png'


function Wrapper() {
    const [theme, setTheme] = useState("white");

    var MenuSpy = require('menuspy');
    var elm = document.querySelector('#main-header');
    var ms = new MenuSpy(elm);

    return (

        <div className="wrapper" style={{ overflow: "visible" }}>

            <header id="main-header" className="lavalamp-menu">
                <nav class="navbar navbar-expand-lg p-0">
                    <ul>

                        <button class="navbar-toggler shadow-sm text-dark fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="bi bi-list"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <li className="active"><a href="#welcome"> Cleo Torniado</a></li>
                            <li><a href="#aboutme"><span>About Me</span></a></li>
                            <li><a href="#projects"><span>Projects</span></a></li>
                            <li><a href="#work"><span>Prev Work</span></a></li>
                            <li><a href="#contact"><span>Contact</span></a></li>

                            <li>
                                <button className="btn-hover color-white"
                                    type="button"
                                    onClick={() => setTheme("white")} > <i class="bi bi-brightness-high-fill"></i></button>

                                <button className="btn-hover color-black"
                                    type="button"
                                    onClick={() => setTheme("black")} > <i class="bi bi-moon-fill"></i></button>

                                <button className="btn-hover color-gradient"
                                    type="button"
                                    onClick={() => setTheme("gradient")} > <i class="bi bi-rainbow"></i></button>
                            </li>
                        </div>

                    </ul>
                </nav>
            </header>

            <FinalHero />
            <AboutMe theme={theme} /> <br />
            <Projects theme={theme} /> <br />
            <WorkExp theme={theme} /> <br />
            <Footer theme={theme} />




        </div >

    )
}

export default Wrapper

