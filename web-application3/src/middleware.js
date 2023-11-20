import {NextResponse} from "next/server";
import {jwtVerify} from "jose";
import {headers} from "next/headers";

export async function middleware(req, res,next){


  if(req.nextUrl.pathname.startsWith("/api/profile")){



      try {
            const reqHeaders= new Headers(req.headers);
            const token = reqHeaders.get("token")
            const KEY = new TextEncoder().encode(process.env.JWT_KEY)
            const decodeData= await jwtVerify(token, KEY);
            const user = decodeData['payload']['user']

            reqHeaders.set('username',user)

          // reqHeaders.set('user',user);
             //    return NextResponse.json({msg:user })
          return  NextResponse.next({
                request:{headers: reqHeaders}
            });

      }
      catch (e) {
          return NextResponse.json({msg:"Unauthorized"},{status:401});

      }


  }





}








//==============================================================


// import {NextResponse} from "next/server";
//
// export function middleware(req, res){
//     if(req.nextUrl.pathname.startsWith("/api/profile")){
//
//         const reqHeader= new  Headers(req.headers)
//
//         const apiPassword= reqHeader.get("apiPassword");
//
//         if (apiPassword==="dhaka123"){
//             reqHeader.set("user_id","asraful1988")
//             const res=  NextResponse.next(
//                 {request:{headers:reqHeader}}
//
//             );
//             res.headers.set("user_id","asraful1988")
//             return res;
//         }
//         else {
//             return NextResponse.json({"message":"apiKey not match"}, {"status" :"401"})
//             // return NextResponse.next()
//         }
//     }
//         // if(req.nextUrl.pathname.startsWith("/api/profile")){
//         //     console.log("profile api")
//         //    return NextResponse.next();
//     // }
//     else if(req.nextUrl.pathname.startsWith("/api/about"))
//     {
//         console.log("about api")
//         return NextResponse.next();
//     }
//     else {
//         // let msg = {message:"failed", status:"404"}
//         //    return NextResponse.json({"message":"Not API", "status" :"404"})
//         return NextResponse.next()
//     }
//
// }

// export const config={
//     matcher:["/api/:patch*", "/site"]
// }