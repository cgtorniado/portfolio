import React from "react";



const Paragraph1 = (props) => {
    return (

        <span style={{ fontSize: '4vh' }} className={`paraFontStyle-${props.theme}-${props.selector}`} >
            {props.textValue}
            {props.children}
        </span>
    )

}

export default Paragraph1

