import {NextResponse} from "next/server";
import axios from "axios";


export async function POST(req, res){

    const jsonBody= await req.json();

    try {
        const rowResponse = await axios.post(process.env.BASE_URL+"api/CreateContact",jsonBody)
        return NextResponse.json({status:"success"})

    }
    catch (e) {
        return NextResponse.json(e)
    }

}