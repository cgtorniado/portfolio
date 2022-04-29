import React from 'react'
import Heading3 from '../ComponentTypography/Heading3'
import Paragraph1 from '../ComponentTypography/Paragraph1'
import { Parallax } from 'react-scroll-parallax'

const ExperienceDetail = (props) => {
    return (


        <div className='py-1 py-lg-5 col-12 col-lg-6'>

            <Parallax speed={1}>
                <Heading3 textValue={props.title}
                    theme={props.theme}
                    selector="primary" /> <br />
            </Parallax>

            <Parallax speed={5}>
                <Paragraph1 theme={props.theme} selector="primary" >
                    {props.children}
                </Paragraph1>
            </Parallax>
        </div>

    )
}

export default ExperienceDetail