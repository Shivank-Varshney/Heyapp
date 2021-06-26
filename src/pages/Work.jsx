import React from "react";
import AboutBanner from "../assets/about-banner.png";
import Founder from "../assets/aimee-allison.jpg";

const Work = () => {
    return(
        <>
            <div className="container-fluid" id="about-page">
                <div className="row">
                    <div className="col-md-7 px-0 vh-100 d-flex justify-content-center align-items-center">
                        <div className="about-us-content">
                            <span>Our Work</span>
                            <h2>TAKE ACTION</h2>
                            <p>She the People is activating and mobilizing women of color across the country to create a politics grounded in love, justice, and belonging. Join us in coming together and taking action. This is our time. </p>
                        </div>
                    </div>
                    <div className="col-md-5 px-0 vh-100 d-flex justify-content-end">
                        <img src={AboutBanner} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div id="description">
                <div className="container">
                    <div className="row">
                        <div className="col-md- mx-auto">
                            <h3>Join Us</h3>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="founder-desc">
                <div className="container-fluid">
                    <div className="row my-5">
                        <div className="col-md-5">
                            <img src={Founder} className="img-fluid" alt="founder" />
                        </div>
                        <div className="col-7">
                            <h3>about the founder</h3>
                            <p>Dear Sisters,</p>
                            <p>She the People began with a dream to write the first book about women of color in politics. For three years, I studied the data and interviewed women of color organizers, strategists, and leaders across the country. The legacy of women of color is the greatest untold political story in America.  I witnessed first-hand the political power, savvy, and brilliance of women of color candidates, organizers, and strategists when I was President of Democracy in Color. Women of color transformed the political landscape of Georgia, and Black women led a winning coalition for an Alabama special Senate election. Women of color are embodying  political excellence all across the country. I founded She the People from the conviction that we need to lift each other up, we need to create spaces where we can talk to each other, and unite in the common cause of justice. Our leadership has inspired magazine covers, game changing news stories, and winning hashtags. And our work speaks to the deep need for our courage and vision in our movements. Our journey is just starting –– </p>
                            <p>From the Summit in San Francisco to the presidential forum in Houston to the debate in Miami to the town hall in Richmond. We owe a great debt to our partners –– women who work everyday to serve the people, and who organize more and more people into action and voting. You are part of a national network in She the People. All you are a party of building it. Bring your friends, your squad, and your organizations to be a part of our national effort. Join us in the quest to create new possibilities and hope for the entire nation, in 2020 and beyond. </p>
                            <p>With hope,</p>
                            <p>Aimee</p>
                        </div>
                    </div>
                    <div className="row" className="note">
                        <div className="col-12">
                            <h4>JOIN WOMEN OF COLOR ACROSS THE COUNTRY IN MAKING OUR VOICE AND VOTES MATTER IN 2020 AND BEYOND.</h4>
                            <div className="in-btn">i'm in! → </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Work;