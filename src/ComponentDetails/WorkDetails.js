import React from 'react'
import '../index.css'
import Paragraph1 from '../ComponentTypography/Paragraph1';
import Heading3 from '../ComponentTypography/Heading3';
import { Parallax } from 'react-scroll-parallax';


const WorkDetails = (props) => {
    return (


        <div className={`${props.theme}-secondary workcard p-1 p-lg-2 m-1 m-5 `} style={{ position: "relative" }}>

            <Parallax scale={[0.9, 1]}>
                <div className="workimg pb-5">
                    <img src={props.workimg} alt="worklogo" style={{ width: "150px", borderRadius: "50px", backgroundColor: "white", position: "absolute", padding: "10px", objectFit: "cover", top: "-80px", left: "40%", boxShadow: "0px 1px 5px gray" }} />
                </div>
                <div className="text-center p-1 pt-5">
                    <Heading3 textValue={props.title}
                        theme={props.theme}
                        selector="secondary" />
                </div>


                <div className="text-center">
                    <Paragraph1 textValue={props.range}
                        theme={props.theme}
                        selector="secondary" />
                </div>

                <div className="text-center pb-5">
                    <Paragraph1 textValue={props.roledesc}
                        theme={props.theme}
                        selector="secondary" />
                </div>
            </Parallax>


            {props.children}

        </div>

    )
}

export default WorkDetails