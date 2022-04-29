import React from "react";
import { Parallax } from 'react-scroll-parallax';
import Typewriter from "./Typewriter"
import Box from '@mui/material/Box'
import Logo from '../Images/logo.png'

const FinalHero = (props) => {
    return (

        <div className="container-fluid finalhero p-0 m-0" id="welcome">
            <div className="herobackground">
            </div>

            <div className="herohead pt-lg-5 m-0 text-center">
                <Parallax speed={-15}>
                    <img src={Logo} alt="logo" style={{ width: "25vh", textShadow: "0 1px 1px black" }} />
                </Parallax>

                <Parallax speed={-3}>
                    <Box style={{ fontSize: '10vh' }} className={`herotitle-${props.theme}`}>
                        <Typewriter />
                    </Box>
                </Parallax>

                <Parallax speed={-1}>
                    <Box style={{ fontSize: '4vh' }} className={`herobody-${props.theme}`}>
                        Helping you build responsive and animated websites
                    </Box>
                </Parallax>
            </div>

        </div>

    )
}

export default FinalHero