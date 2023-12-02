import React from 'react';
import image1 from "../../public/images/1241.png"
import image2 from "../../public/images/1242.png"
import image3 from "../../public/images/1243.png"
import image4 from "../../public/images/1244.png"

const Hero = () => {
    return (
        <div className="bg-green-200 pt-10">
            <div className=" container mx-auto  h-[600px] flex  justify-between gap-2  items-center">
                <div className="h-[380px] w-[550px]  ">
                    <h1 className="py-4 font-bold font-sans text-5xl">Increase Your Customers Loyalty and Satisfaction</h1>
                    <p className="py-4 mb-9">We Help business like yours earn more customers, standout from competitors, make more money</p>
                    <button className="py-2.5  px-6 bg-[#20B15A] text-white rounded-lg hover:text-green-600 hover:bg-white">Get Started</button>

                </div>
                <div className="h-[600px] w-[500px  grid grid-cols-2 gap-2 ">
                    <img className="bg-red-200 w-[408px] h-[271px] rounded-xl" src="images/1241.png" alt="image1"/>
                    <img className="bg-red-200 w-[180px] h-[271px] rounded-xl" src="images/1242.png" alt="image2"/>
                    <img className="bg-red-200 w-[246px] h-[164px] rounded-xl" src="images/1243.png" alt="image3"/>
                    <img className="bg-red-200 w-[345px] h-[164px] rounded-xl" src="images/1244.png" alt="image4"/>
                </div>


            </div>
            <div className=" h-[120px] bg-[#F8FFF9] flex flex-col md:flex-row justify-around items-center gap-x-5 items-center">
                <img src="images/logos_google.png" alt="img"  />
                <img src="images/Trello.png" alt="img"  />
                <img src="images/logos_monday.png" alt="img"  />
                <img src="images/Notion.png" alt="img"  />
                <img src="images/Slack.png" alt="img"  />
            </div>

            <div className="bg-green-200 h-[50px]"></div>

        </div>
    );
};

export default Hero;