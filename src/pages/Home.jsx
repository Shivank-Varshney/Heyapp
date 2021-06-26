import React from "react";
import Img1 from "../assets/img1.webp";
import Img2 from "../assets/img2.webp";
import Img3 from "../assets/img3.webp";
import Img4 from "../assets/img4.jpeg";
import Img5 from "../assets/img5.jpeg";
import Img6 from "../assets/img6.jpeg";

const Home = () => {
    return(
        <>
            <div className="container-fluid" id="header">
                <div className="row">
                    <div className="col-12">
                        <div className="header-content">
                        <h1 className="header-heading">A social media for all</h1>
                        <h1 className="header-heading">But, </h1>
                        <h1 className="header-heading">By women, of women</h1>
                        <div className="header-btn">let meet them → </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="banner">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center">
                            <img src={Img1} className="img-fluid" alt="" />
                            <h5 className="banner-text">Access</h5>
                        </div>
                        <div className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center">
                            <img src={Img2} className="img-fluid" alt="" />
                            <h5 className="banner-text">Awareness</h5>
                        </div>
                        <div className="col-md-4 my-md-0 my-4 d-flex justify-content-center flex-column align-items-center">
                            <img src={Img3} className="img-fluid" alt="" />
                            <h5 className="banner-text">Advocacy</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div id="gallary">
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-3 col-sm-6">
                            <img src={Img4} className="img-fluid m-3" alt="" />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src={Img5} className="img-fluid m-3" alt="" />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src={Img6} className="img-fluid m-3" alt="" />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img src={Img4} className="img-fluid m-3" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="join-the-movement">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-sm-12 d-flex justify-content-center flex-column align-items-center">
                            <h2>WE CAN’T DO THIS <br /> WITHOUT YOU.</h2>
                            <p>Join us in creating a country of love, justice, and belonging. Join us in creating our political home.</p>
                            <div className="join-the-movement-btn">join the movement → </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;