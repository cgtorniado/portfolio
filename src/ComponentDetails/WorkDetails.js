import React from 'react'
import '../index.css'
import Paragraph1 from '../ComponentTypography/Paragraph1';

const WorkDetails = (props) => {
    return (


        <div className={`${props.theme}-secondary workcard p-1 p-lg-2 m-1 m-5 `} style={{ position: "relative" }}>


            <div className="workimg pb-5">
                <img src={props.workimg} alt="worklogo" style={{ width: "100px", borderRadius: "20px", backgroundColor: "white", position: "absolute", padding: "10px", objectFit: "cover", top: "-50px", left: "-10%", boxShadow: "0px 1px 5px gray" }} />
            </div>
            <div className="text-center p-1 pt-5">
                <Paragraph1 textValue={props.title}
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



            {props.children}

        </div>

    )
}

export default WorkDetails