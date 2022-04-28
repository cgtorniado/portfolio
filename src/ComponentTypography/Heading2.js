import React from "react";


const Heading2 = (props) => {
    return (

        <span className={`H2FontStyle-${props.theme}-${props.selector} display-2`} >
            {props.textValue}
        </span>
    )

}

export default Heading2