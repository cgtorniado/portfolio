import React from "react";


const Heading3 = (props) => {
    return (

        <span className={`H3FontStyle-${props.theme}-${props.selector} display-3`} >
            {props.textValue}
        </span>
    )

}

export default Heading3