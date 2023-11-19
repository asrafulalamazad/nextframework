import {NextResponse} from "next/server";
import {SignJWT} from "jose";


export async function POST(req,res){

    const JSONBody= await req.json();
    const user= JSONBody["user"]
    const password= JSONBody["password"]

    if(user==="asraful"&& password==="123"){
        const payload = {user:user};

        const KEY = new TextEncoder().encode(process.env.JWT_KEY)
        const token = await new SignJWT(payload)
            .setProtectedHeader({alg:"HS256"})
            .setIssuedAt()
            .setIssuer("asrafulazad.com")
            .setExpirationTime('12h')
            .sign(KEY)


       return  NextResponse.json({status: "login success",token: token},{status: 201})

    }else {
        return NextResponse.json({status: "login failed"},{status: 401})
    }




}