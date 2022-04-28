import React from "react";
import Heading1 from "../ComponentTypography/Heading1";
import '../index.css'
import TechStack from "./TechStack";
import Grid from '@mui/material/Grid';
import Paragraph1 from "../ComponentTypography/Paragraph1";
import ProjectRight from "./ProjectRight";


const Projects = (props) => {
    return (

        <div className={`${props.theme}-secondary py-1 pt-lg-5 px-1 ps-lg-5`} id="projects" style={{ overflowX: "hidden" }}>

            <Grid container
                columns={{ xs: 12, sm: 12, md: 12 }}>

                <Grid item xs={12} sm={12} md={5}>

                    <div id="projecttitle" style={{ height: "100vh", padding: "3em" }}>
                        <Heading1 textValue="Projects"
                            theme={props.theme}
                            selector="secondary" />

                        <br />
                        <br />
                        <Paragraph1 textValue="Here are my projects, and the web technologies used to create them. This website was made mostly with ReactJs and SASS, with some MUI components"
                            theme={props.theme}
                            selector="secondary" />

                        <div className={`stackcontainer pt-1 pt-lg-5`} style={{ height: "50%", width: "100%" }}>
                            <TechStack theme={props.theme} />

                        </div>

                    </div>

                </Grid>

                <Grid item xs={12} sm={12} md={7}>

                    <div className={`${props.theme}-primary projectswrapper pt-5 ps-5`} style={{ height: "100vh", margin: "5em 0 0 2em", overflowX: "hidden" }}>
                        <ProjectRight theme={props.theme} />
                    </div>

                </Grid>

            </Grid>
        </div>
    )

}

export default Projects