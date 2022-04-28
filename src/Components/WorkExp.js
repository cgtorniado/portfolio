import React from "react";
import Heading1 from "../ComponentTypography/Heading1";
import '../index.css'
import Paragraph1 from '../ComponentTypography/Paragraph1'
import Box from '@mui/material/Box';
import { Parallax } from 'react-scroll-parallax';
import WorkDetails from "../ComponentDetails/WorkDetails"
import Grid from '@mui/material/Grid';
import nestle from '../Images/nestle.png';
import lalamove from '../Images/lalamove.png';
import grab from '../Images/grab.png';
import sasonbi from '../Images/sasonbi.png';


const WorkExp = (props) => {
    return (


        <Box className={`${props.theme}-primary text-center pt-5`} id="work">
            <Box className="workcontainer p-5">
                <Parallax speed={5}>
                    <Heading1 textValue="Work Experience"
                        theme={props.theme}
                        selector="primary" />
                </Parallax>
            </Box>


            <Parallax speed={10}>
                <div className="p-5">
                    <Paragraph1 textValue="Since I am a career shifter, all of my previous work experience is related to supply chain."
                        theme={props.theme}
                        selector="primary" />
                </div>
            </Parallax>

            <div className="p-5">
                <Grid container
                    columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={12} sm={12} md={6}>

                        <WorkDetails range="Dec 2020 to Jan 2022"
                            title="Nestle Phils Inc"
                            theme={props.theme}
                            workimg={nestle}
                            selector="secondary"
                            roledesc="Capacity Specialist, Service Specialist" />

                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <WorkDetails range="Nov 2018 - Dec 2019"
                            title="Lalamove Phils Inc"
                            workimg={lalamove}
                            roledesc="Driver Acquisition, Driver Retention"
                            theme={props.theme}
                            selector="secondary" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>

                        <WorkDetails range="Sept - Nov 2017"
                            title="Grab Phils Inc"
                            workimg={grab}
                            roledesc="Business Process Improvement Intern"
                            theme={props.theme}
                            selector="secondary" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <WorkDetails range="June - July 2017"
                            title="Sasonbi Solar Inc"
                            workimg={sasonbi}
                            roledesc="Supply Chain & Marketing Intern"
                            theme={props.theme}
                            selector="secondary" />
                    </Grid>

                </Grid>


            </div>


        </Box >


    )

}

export default WorkExp