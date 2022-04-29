import React from "react";
import Heading1 from "../ComponentTypography/Heading1";
import '../index.css'
import TechStack from "./TechStack";
import Grid from '@mui/material/Grid';
import Paragraph1 from "../ComponentTypography/Paragraph1";
import ProjectRight from "./ProjectRight";
import { Parallax } from "react-scroll-parallax";

const Projects = (props) => {
    return (

        <div className={`${props.theme}-secondary py-1 pt-lg-5 px-1 ps-lg-5`} id="projects" style={{ overflowX: "hidden" }}>

            <Grid container
                columns={{ xs: 12, sm: 12, md: 12 }}>

                <Grid item xs={12} sm={12} md={5}>

                    <div id="projecttitle" className="pt-lg-5" style={{ height: "100vh", padding: "3em" }}>
                        <Parallax speed={1}>
                            <Heading1 textValue="Projects"
                                theme={props.theme}
                                selector="secondary" />
                        </Parallax>

                        <br />
                        <br />


                        <Parallax speed={10}>
                            <Paragraph1 textValue="Here are my projects, and the web technologies used to create them."
                                theme={props.theme}
                                selector="secondary" />

                            <div className={`stackcontainer pt-1 pt-lg-5`} style={{ height: "50%", width: "100%" }}>
                                <TechStack theme={props.theme} />
                            </div>

                        </Parallax>



                    </div>

                </Grid>

                <Grid item xs={12} sm={12} md={7}>

                    <div className={`${props.theme}-primary projectswrapper pt-5 ps-5`} style={{ height: "100vh", margin: "5em 0 0 2em", overflowX: "hidden" }}>
                        <ProjectRight theme={props.theme} />
                    </div>

                </Grid>

            </Grid>
        </div >
    )

}

export default Projects