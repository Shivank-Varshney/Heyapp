import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { NavLink } from "react-router-dom";
const curryear = new Date().getFullYear();

const Footer = () => {
    return(
        <>
            <div id="footer">
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-3 col-sm-6 my-md-0 my-5">
                            <div className="join-the-movement-btn">+91 8510967005</div>
                        </div>

                        <div className="col-md-3 col-sm-6 my-md-0 my-5">
                            <h5 className="footer-heading">follow us</h5>
                            <div className="icons">
                                <a href="" className="icon"><TwitterIcon /></a>
                                <a href="" className="icon"><InstagramIcon /></a>
                                <a href="" className="icon"><FacebookIcon /></a>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 my-md-0 my-5">
                            <h5 className="footer-heading">info</h5>
                            <NavLink to="/" className="footer-links">about us</NavLink><br />
                            <NavLink to="/" className="footer-links">about the founder</NavLink><br />
                            <NavLink to="/" className="footer-links">our declaration</NavLink><br />
                            <NavLink to="/" className="footer-links">newsroom</NavLink><br />
                            <NavLink to="/" className="footer-links">contact us</NavLink><br />

                            <h5 className="footer-heading mt-5">action</h5>
                            <NavLink to="/" className="footer-links">join the movement</NavLink><br />
                            <NavLink to="/" className="footer-links">donate</NavLink><br />
                            <NavLink to="/" className="footer-links">become a partner</NavLink><br />
                        </div>
                        
                        <div className="col-md-3 col-sm-6 my-md-0 my-5">
                            <h5 className="footer-heading">© {curryear} heyapp.</h5>
                            <h6>All rights reserved.</h6>
                            <NavLink to="/" className="footer-links">donate</NavLink><br />
                            {/* <h6>Web design by: </h6>
                            <h5 className="footer-heading">shivank varshney</h5><br />
                            <h6>Art by: </h6>
                            <h5 className="footer-heading">tarun aggarwal</h5><br /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;