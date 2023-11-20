import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function GET(req,res) {

    // redirect("http://asrafulalam.com")

    const head = await headers();
    const userName = head.get('username')




    return NextResponse.json(
        [{userID:userName},
            {
                "fName": "ASRAFUL",
                "lName": "ALAM",
                "age": 36,
                "city": "FENI",
                "phoneNo": 1670298486,
                "email": "asrafulalamazad@gamil.com"
            },
            {
                "fName": "AHNAF",
                "lName": "BIN ASRAF",
                "age": 5,
                "city": "FENI",
                "phoneNo": 1710430878,
                "email": "asrafulalamazad@gamil.com"
            },
            {
                "fName": "REZVIN",
                "lName": "SULTANA",
                "age": 27,
                "city": "FENI",
                "phoneNo": 1617909899,
                "email": "asrafulalamazad@gamil.com"
            }
        ],{status: 202,
            headers: {
                "createBy":"azad",
                "UserID":userName,
                "Set-Cookie":"Auth=123ABC; path=/;author:azad;"
        }
        }
    )
}

export async function POST(req, res){
    const reqBody= req.body;

    return NextResponse.json({
        data: reqBody.json()
    })
}