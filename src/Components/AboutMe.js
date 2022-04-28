import '../index.css';
import * as React from 'react';
import Paragraph1 from '../ComponentTypography/Paragraph1'
import Paragraph2 from '../ComponentTypography/Paragraph2'
import Heading2 from '../ComponentTypography/Heading1';
import { Parallax } from 'react-scroll-parallax';
import Bubble1 from "../Images/1.png";
import Bubble2 from "../Images/2.png";
import Bubble3 from "../Images/3.png";
import Bubble4 from "../Images/4.png";
import Pic from "../Images/croppedPortrait.png";


const AboutMe = (props) => {
    return (

        <div className={`${props.theme}-primary aboutme p-5`} id="aboutme" >
            <div className="row p-1 p-lg-5">
                <div className="col-12 col-lg-8 pt-1 pt-lg-5 my-auto">

                    <div className='py-5 py-lg-0'>
                        <Parallax speed={1}>
                            <Heading2 textValue="Hello World!"
                                theme={props.theme}
                                selector="primary" />
                        </Parallax>
                    </div>


                    <Parallax speed={10}>
                        <div className='pe-1 pe-lg-5 pt-1 pt-lg-3'>
                            <Paragraph1 textValue="Former supply chain specialist, now an asipiring front-end web developer. I would love to make your designs come to life. Just give me your designs and I'll help you turn them into websites!"
                                theme={props.theme}
                                selector="primary" />
                        </div>
                    </Parallax>


                </div>

                <div className="col-12 col-lg-4 py-5 text-center">
                    <Parallax speed={10}>
                        <img src={Pic} className="MainHeadImg pb-lg-5" alt="headerimage" />
                    </Parallax>


                    <div className="pb-5">
                        <Parallax speed={15}>
                            <img src={Bubble1} className="Bubble1par p-1" alt="bubbleimage" />
                            <img src={Bubble2} className="Bubble2par p-1" alt="bubbleimage" />
                            <img src={Bubble3} className="Bubble3par p-1" alt="bubbleimage" />
                            <img src={Bubble4} className="Bubble4par p-1" alt="bubbleimage" />
                        </Parallax>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default AboutMe