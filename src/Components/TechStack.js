import * as React from 'react';
import Paragraph1 from '../ComponentTypography/Paragraph1';
import { Box } from '@mui/material';


const TechStack = (props) => {
    return (
        <>
            <Paragraph1 textValue="I currently know:"
                theme={props.theme}
                selector="secondary" />

            <br />
            <Box style={{ wordSpacing: "30px" }}>
                <Paragraph1 textValue="HTML CSS SASS JAVASCRIPT REACTJS BOOTSTRAP MUI"
                    theme={props.theme}
                    selector="secondary" />
            </Box>
        </>
    )

}


export default TechStack