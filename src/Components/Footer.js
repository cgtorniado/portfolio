import React from "react";
import '../index.css'
import Paragraph1 from "../ComponentTypography/Paragraph1";
import Paragraph2 from "../ComponentTypography/Paragraph2";
import logo from "../Images/logo.png"


const Footer = (props) => {
    return (

        <div className={`${props.theme}-secondary container-fluid p-5 row text-center text-lg-start`} id="footer" >

            <div className="col-12 col-lg-4 message mx-auto">

                <div className="py-5">
                    <Paragraph1 theme={props.theme} selector="secondary" >
                        Cleo Beverly Torniado <br />
                        <img src={logo} alt="logo" style={{ width: "50px" }} /><br />
                    </Paragraph1>
                </div>

                <Paragraph2 theme={props.theme} selector="secondary" >

                    0905 401 8806 <br />
                    cleo.torniado@gmail.com<br />
                    Makati City / Liloan Cebu <br />
                </Paragraph2>

                <div className="py-2 py-lg-5">
                    <Paragraph1 theme={props.theme} selector="secondary" >
                        <a className="fs-1 m-3" href="https://github.com/cgtorniado"><i className="bi bi-github"></i></a>
                        <a className="fs-1 m-3 " href="https://www.linkedin.com/in/cleo-beverly-torniado-506b0512a/"><i className="bi bi-linkedin"></i></a>
                        <a className="fs-1 m-3 " href="https://instagram.com/okay28x"><i className="bi bi-instagram"></i></a>
                    </Paragraph1>
                </div>

            </div>

            <div className="col-12 col-lg-3 py-2 py-lg-5">
                <Paragraph1 theme={props.theme} selector="secondary" >
                    Projects<br />
                </Paragraph1>

                <Paragraph2 theme={props.theme} selector="secondary" >
                    <a href="http://cgtorniado.github.io">E-Magazine<br /></a>
                    <a href="https://coopersunnypetshop.vercel.app/">Pet Shop<br /></a>
                    <a href="https://myfirstblog-psi.vercel.app/">Blog<br /></a>
                    <a href="https://journal-sepia.vercel.app/">Journal<br /></a>
                    <a href="http://cgtorniado.github.io/calculator">Calculator<br /></a>
                    <a href="https://cgtorniado.github.io/notesplayer/">Keyboard<br /></a>
                </Paragraph2>
            </div>

            <div className="col-12 col-lg-5 p-3 py-lg-5">
                <Paragraph1 textValue="Reach Out"
                    theme={props.theme}
                    selector="secondary" />

                <div className="pb-5">
                    <div className="mb-3">
                        <input type="email" className="form-control" id="emailadd" placeholder="name@example.com" />
                    </div>


                    <div className="mb-3">
                        <textarea className="form-control" id="message" rows="3"
                            placeholder="Tell me your thoughts 💬"></textarea>
                    </div>

                    <div className="mb-3 text-center text-lg-start">
                        <a href="mailto:cleo.torniado@gmail.com?subject = Feedback&body = Message">
                            <button type="button" className='btn btn-primary'>Send message</button>
                        </a>
                    </div>
                </div>

            </div >




        </div >
    )

}

export default Footer