// import React from 'react';
// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const Page = () => {
    return (
        <div>
            <h1> Home Page</h1>
            <p> {process.env.API_KEY}</p>
        </div>
    );
};

export default Page;