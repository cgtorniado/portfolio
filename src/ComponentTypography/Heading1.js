import React from "react";


const Heading1 = (props) => {
    return (

        <span className={`H1FontStyle-${props.theme}-${props.selector} display-1`} >
            {props.textValue}
        </span>
    )

}

export default Heading1