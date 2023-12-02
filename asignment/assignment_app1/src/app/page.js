import React from 'react';

import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import Statlist from "@/components/Statlist";

const Page = () => {
    return (
        <div>
            <Statlist/>
           <Hero/>
           <WorkList/>
        </div>
    );
};

export default Page;