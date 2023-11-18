import {NextResponse} from "next/server";

export function middleware(req, res){
    if(req.nextUrl.pathname.startsWith("/api/profile")){

        const reqHeader= new  Headers(req.headers)


        const apiKey= reqHeader.get("apiKey");
        if (apiKey==="abc123"){
            reqHeader.set("user_id","asraful1988")
            return NextResponse.next(
                {request:{headers:reqHeader}}
            );
        }
        else {
            return NextResponse.json({"message":"apiKey not match"}, {"status" :"401"})

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
     return NextResponse.json({"message":"Not API", "status" :"404"})
 }

}

// export const config={
//     matcher:["/api/:patch*", "/site"]
// }