import {redirect} from "next/navigation";

export function middleware(){

    console.log("middleware is running")


}

export const config={
    matcher:["/api/:patch*", "/site"]
}