import React from "react";
import "../style/global.css"; // folder/file names must match exactly
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}



// import React from 'react'
// import "../style/global.css"
// // import "./../Style/Global2.css"
// import Navbar from "../Components/Navbar"
// import Footer from "../Components/Footer"

// export default function Rootlayout({ children }) {
//     return (
//         <html lang="en">
//             <body>
//                 <Navbar/>
//                 <main>{children}</main>
//                 <Footer/>
//             </body>
//         </html>
//     )
// }
