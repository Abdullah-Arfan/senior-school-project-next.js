import React from 'react'
import "./../Style/Global.css"
// import "./../Style/Global2.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function Rootlayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
    )
}
