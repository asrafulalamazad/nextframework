const build = require("next/dist/build");
/** @type {import('next').NextConfig} */
const nextConfig = {
    // env:{
    //     API_KEY: "Bangladesh .env"
    // }
    distDir: "azadBuild",

    // basePath:"/home"
// poweredByHeader: true,
    async headers(){
        return[
             {source:"/:path*", headers:[{
            // {source:"/", headers:[{
                key:"token", value: "12345abcde"
                }]
                }
        ]
    }



}

module.exports = nextConfig
