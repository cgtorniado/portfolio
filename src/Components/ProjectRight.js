import React from 'react';
import Box from '@mui/material/Box';
import ProjectDetail from '../ComponentDetails/ProjectDetail';
import Proj1 from '../Images/miniproject1.png';
import Proj2 from '../Images/ecalc.png';
import Proj3 from '../Images/piano.png';
import shop from '../Images/shop.png';
import blog from '../Images/blog.png';
import journal from '../Images/journal.png';
import '../index.css'

const ProjectRight = (props) => {
    return (

        <Box className="projectright p-lg-5" sx={{ borderRadius: "25px" }}>

            <ProjectDetail
                projurl="http://cgtorniado.github.io"
                picname="proj1"
                theme={props.theme}
                stack1="html"
                stack2="css"
                img={Proj1}
                projectname="E-Magazine"
                categ="majorproj"
                para="This was my first website. This is mostly made with HTML, CSS, and a little Javascript" />

            <ProjectDetail
                projurl="https://coopersunnypetshop.vercel.app/"
                picname="shop"
                theme={props.theme}
                stack1="reactjs"
                stack2="bootstrap"
                img={shop}
                projectname="Pet Accessories Shop"
                categ="minorproj"
                para="This website is my first reactjs site." />

            <ProjectDetail
                projurl="https://myfirstblog-psi.vercel.app/"
                picname="blog"
                theme={props.theme}
                stack1="reactjs"
                stack2="bootstrap"
                img={blog}
                projectname="Skin & Beauty Blog"
                categ="minorproj"
                para="This website was made with reactjs but with more organized components" />

            <ProjectDetail
                projurl="https://journal-sepia.vercel.app/"
                picname="journal"
                theme={props.theme}
                stack1="reactjs"
                stack2="bootstrap"
                img={journal}
                projectname="Journal"
                categ="minorproj"
                para="This journal features a mood and thoughts board, plus a to-do list" />


            <ProjectDetail
                projurl="http://cgtorniado.github.io/calculator"
                picname="proj2"
                theme={props.theme}
                stack1="bootstrap"
                stack2="javascript"
                img={Proj2}
                projectname="E-calculator"
                categ="minorproj"
                para="This calculator can solve basic mathematical functions using plain javascript." />

            <ProjectDetail
                projurl="https://cgtorniado.github.io/notesplayer/"
                theme={props.theme}
                picname="proj3"
                img={Proj3}
                stack1="bootstrap"
                stack2="javascript"
                projectname="Keyboard Notes"
                categ="minorproj"
                para="This notes player shows what notes are played and can play written notes." />

        </Box >

    )
}

export default ProjectRight

