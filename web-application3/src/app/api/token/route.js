
 import {jwtVerify, SignJWT} from "jose";
 import {NextResponse} from "next/server";


export async function GET(req, res){

    const Key = new TextEncoder().encode(process.env.JWT_KEY)
    const payload = {email: "asrafuldata@gmail.com",userId: "asraful"}


    const token = await new SignJWT(payload)
        .setProtectedHeader({alg:'HS256'})
        .setIssuedAt()
        .setIssuer("google.com")
        .setExpirationTime('1h')
        .sign(Key)

    return NextResponse.json({token:token})

}


export async function POST(req,res){

    const JsonBody=await req.json();
    const token =   JsonBody['token'];
    const Key = new TextEncoder().encode(process.env.JWT_KEY);
    const decodeData = await  jwtVerify(token,Key)
    return NextResponse.json(decodeData);


}


// import {SignJWT} from "jose";
// import {NextResponse} from "next/server";
//
//
// export  async  function GET(req, res){
//
//     const key= new TextEncoder().encode(process.env.JWT_KEY);
//     const payload = {email: "asrafuldata@gmail.com",userId: "asraful"}
//
//     let token = new SignJWT(payload)
//         .setProtectedHeader({alg:'HS256'})
//         .setIssuedAt()
//         .setIssuer("https://localhost:3000")
//         .setExpirationTime("2h")
//         .sign(key)
//
//    return  NextResponse.json(token)
// }


