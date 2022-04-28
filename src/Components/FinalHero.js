import React from "react";
import { Parallax } from 'react-scroll-parallax';
import Typewriter from "./Typewriter"
import Box from '@mui/material/Box'
import Logo from '../Images/logo.png'

const FinalHero = () => {
    return (

        <div className="container-fluid finalhero" id="welcome">
            <div className="herobackground">
            </div>

            <div className="pt-lg-5">
            </div>


            <div className="herohead row pt-lg-5">
                <div className="col-12 col-lg-4 p-2 text-lg-end">
                    <Parallax speed={-15}>
                        <img src={Logo} alt="logo" style={{ width: "25vh" }} />
                    </Parallax>
                </div>
                <div className="col-12 col-lg-7 text-lg-start p-2 pt-lg-5">
                    <Parallax speed={-3}>
                        <Box style={{ fontSize: '12vh' }} >
                            <Typewriter />
                        </Box>
                    </Parallax>

                    <Parallax speed={-1}>
                        <Box style={{ fontSize: '4vh' }} >
                            Helping you build responsive and animated websites
                        </Box>
                    </Parallax>
                </div>
            </div>
        </div>

    )
}

export default FinalHero