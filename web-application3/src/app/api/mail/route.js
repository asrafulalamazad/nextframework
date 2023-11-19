
import {NextResponse} from "next/server";
import nodemailer from "nodemailer"





export async function GET(req, res){

    const {searchParams}= new URL(req.url)
    const toEmail= searchParams.get("email");
    const subject= searchParams.get("subject");


  //  const htmlBody= "<h1>Hello ASRAFUL</h1><p>mailBody</p>"

    const htmlBody = "'<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "    <head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
        "    <title>{subject}</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div>\n" +
        "    <h1>{Hello}!</h1>\n" +
        "    <p>This is a sample HTML email body created with Nodemailer.</p>\n" +
        "    <p>You can customize this content to suit your needs.</p>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>'"

    //transporter

    const Transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "asrafulnodemailer@gmail.com",
            pass: 'gszb lsan rcfn pcnu'
        },
    })

    let myEmail = {
        from: 'App by ASRAFUL <asrafulnodemailer@gmail.com>',
        to: toEmail,
        subject: subject,
     //   text: "mail Text",
        html: htmlBody // html body
    };

    try {
        await Transporter.sendMail(myEmail)
        return  NextResponse.json({msg:"success", toEmail: toEmail});
    }catch (e) {
        return NextResponse.json({msg:"mail faild", toEmail: toEmail});
    }



}


// export async function GET(req, res){
//
//     const {searchParams}= new URL(req.url)
//     const toEmail= searchParams.get("email");
//     const receivedBody= searchParams.get("body");
//
//     const mailBody= receivedBody+ " Mail has been sent to "+ toEmail;
//
//
//
//     //transporter
//
//     const Transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "asrafulnodemailer@gmail.com",
//             pass: 'gszb lsan rcfn pcnu'
//         },
//     })
//
//     let myEmail = {
//         from: 'App by ASRAFUL <asrafulnodemailer@gmail.com>',
//         to: toEmail,
//         subject: "EmailSubject",
//         text: mailBody
//     };
//
// try {
//     await Transporter.sendMail(myEmail)
//    return  NextResponse.json({msg:"success", toEmail: toEmail});
// }catch (e) {
//     return NextResponse.json({msg:"mail faild", toEmail: toEmail});
//     }
//
//
//
// }