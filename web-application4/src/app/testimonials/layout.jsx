import './globals.css'
import SiteNavBar from "@/components/SiteNavBar";
import SiteFooter from "@/components/SiteFooter";

import NextTopLoader from "nextjs-toploader";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <NextTopLoader color="#266969" height={3} speed={200} />
      <SiteNavBar/>
      {children}
      <SiteFooter/>
      </body>
    </html>
  )
}
