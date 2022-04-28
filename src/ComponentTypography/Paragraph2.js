import React from "react";

const Paragraph2 = (props) => {
    return (

        <span style={{ fontSize: '2.2vh' }} className={`paraFontStyle-${props.theme}-${props.selector}`} >
            {props.textValue}
            {props.children}
        </span>
    )

}

export default Paragraph2