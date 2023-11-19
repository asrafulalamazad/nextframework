import {NextResponse} from "next/server";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export function middleware(req, res){
    if(req.nextUrl.pathname.startsWith("/api/profile")){

        const reqHeader= new  Headers(req.headers)

        const apiPassword= reqHeader.get("apiPassword");

        if (apiPassword==="dhaka123"){
            reqHeader.set("user_id","asraful1988")
            const res=  NextResponse.next(
                {request:{headers:reqHeader}}

            );
            res.headers.set("user_id","asraful1988")
            return res;
        }
        else {
             return NextResponse.json({"message":"apiKey not match"}, {"status" :"401"})
           // return NextResponse.next()
        }
    }
 // if(req.nextUrl.pathname.startsWith("/api/profile")){
 //     console.log("profile api")
 //    return NextResponse.next();
 // }
 else if(req.nextUrl.pathname.startsWith("/api/about"))
 {
  console.log("about api")
  return NextResponse.next();
 }
 else {
  // let msg = {message:"failed", status:"404"}
  //    return NextResponse.json({"message":"Not API", "status" :"404"})
        return NextResponse.next()
 }

}

// export const config={
//     matcher:["/api/:patch*", "/site"]
// }