import React from 'react'
import '../index.css'
import Box from '@mui/material/Box';
import Heading3 from '../ComponentTypography/Heading3';
import Paragraph1 from '../ComponentTypography/Paragraph1';

const ProjectDetail = (props) => {
    return (
        <Box>

            <Heading3 textValue={props.projectname}
                theme={props.theme}
                selector="primary" />

            <br />


            <div className="card">
                <div className="card--image">
                    <a href={props.projurl} target="_blank">
                        <img src={props.img} alt='project' className={props.categ} />
                    </a>

                </div>
                <div className="card--info info--1">
                    <span className="info--text">{props.stack1}</span>
                    <div className="icon">
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="info--image">
                        <a href={props.projurl}>
                            <img src={props.img} alt='project' className={props.categ} />
                        </a>

                    </div>
                </div>
                <div className="card--info info--2">
                    <span className="info--text">{props.stack2}</span>
                    <div className="icon">
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="info--image">
                        <a href={props.projurl}>
                            <img src={props.img} alt='project' className={props.categ} />
                        </a>

                    </div>
                </div>
            </div>


            <br />

            <Paragraph1 textValue={props.para}
                theme={props.theme}
                selector="primary" />

            <br />
            <br />
            <br />
            <br />

        </Box>
    )
}

export default ProjectDetail