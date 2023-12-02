import React from 'react';

const Statlist = () => {
    return (
        <div>
            <div className="container mx-auto bg-gray-300" >
                <div className=" container py-10 grid grid-cols-2  md:grid-cols-4 gap-6">
                    <div className="shadow-2xl text-center">
                        <div className=" p-6 h-16 w-16 p-6 bg-green-200 text-center "><img className="" src="svg/group.svg" /></div>
                        <h4 className="text-lg font-bold font-sans">76678</h4>
                        <p className="font-normal font-sans">Followers</p>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>
    );
};

export default Statlist;