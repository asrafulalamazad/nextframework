
export function middleware(){

    console.log("middleware is running")

}

export const config={
    matcher:["/api/:patch*"]
}