import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Heading1 from '../ComponentTypography/Heading1'
import ExperienceDetail from "../ComponentDetails/ExperienceDetail"
import Heading3 from '../ComponentTypography/Heading3'
import Paragraph1 from '../ComponentTypography/Paragraph1'


const Experience = (props) => {
    return (
        <div className={`container-fluid p-1 p-lg-5 ${props.theme}-primary`}>
            <Parallax speed={1}>
                <Heading1 textValue="Life Experience"
                    theme={props.theme}
                    selector="primary" />
            </Parallax>




            <div className='p1 p-lg-5 row'>


                <ExperienceDetail title="Nestle Philippines Inc"
                    theme={props.theme}>

                    May 2021 - Jan 2022 <br />
                    Capacity Specialist<br /><br />

                    Dec 2019 - May 2021<br />
                    Service Specialist<br />

                </ExperienceDetail>

                <ExperienceDetail title="Lalamove Philippines Inc"
                    theme={props.theme}>

                    May 2019 - Dec 2019 <br />
                    Capacity Specialist<br /><br />

                    Nov 2018 - May 2019 <br />
                    Service Specialist<br />

                </ExperienceDetail>

                <ExperienceDetail title="Grab Philippines Inc"
                    theme={props.theme}>

                    May 2021 - Jan 2022 <br />
                    Business Process Improvement Intern<br /><br />

                </ExperienceDetail>

                <ExperienceDetail title="Sasonbi Solar Inc"
                    theme={props.theme}>

                    June - July 2017 <br />
                    Supply Chain and Marketing Intern<br /><br />

                </ExperienceDetail>


            </div>



            <Parallax speed={10}>

                <div className='px-1 px-lg-5 row g-5'>

                    <div className='py-1 col-12'>
                        <Heading3 textValue="University of the Philippines Diliman"
                            theme={props.theme}
                            selector="primary" /> <br />


                        <Paragraph1 theme={props.theme} selector="primary" >
                            June 2012 - June 2018 <br />
                            BS Industrial Engineering<br /><br />
                        </Paragraph1>
                    </div>


                </div>
            </Parallax>

        </div >
    )
}

export default Experience