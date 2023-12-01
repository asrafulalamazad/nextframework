import React from 'react';

const SiteNavBar = () => {

    return (

            <nav className=" ">
                <div className="bg-green-200  h-[80px]  flex items-center justify-around">
                    <div className=" "><h1 className="text-3xl font-bold ">Design<span className="text-orange-600 uppercase">Agency</span></h1></div>
                    <div className="flex items-center gap-10 font-bold text-md p-2">
                        <p  className="py-2.5  px-5 hover:border-2 hover:rounded-lg rounded-lg hover:text-white hover:bg-green-600">Home</p>
                        <p className="py-2.5  px-5 hover:border-2 hover:rounded-lg  hover:text-white hover:bg-green-600">Team</p>
                        <p className=" py-2.5  px-5 hover:border-2 hover:rounded-lg hover:text-white hover:bg-green-600">Service</p>
                        <p className="py-2.5  px-5 hover:border-2 hover:rounded-lg  hover:text-white hover:bg-green-600">Project</p>
                        <p className="py-2.5  px-5 hover:border-2 hover:rounded-lg hover:text-white hover:bg-green-600">Testimonials</p>
                        <button className="py-2.5  px-6 border-2 border-green-600 rounded-lg  hover:text-white hover:bg-green-600">Login</button>
                        <button className="py-2.5  px-6 bg-[#20B15A] text-white rounded-lg hover:text-green-600 hover:bg-white">Register</button>
                    </div>
                </div>
            </nav>

    );
};

export default SiteNavBar;