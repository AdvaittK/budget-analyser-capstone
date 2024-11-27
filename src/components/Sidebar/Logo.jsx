// import React from "react";
// import logo1 from "../../assets/logo2.png";  // First logo
// import logo2 from "../../assets/smartspend.png";  // Second logo

// export default function Logo({ isOpen }) {
//     return (
//         <div
//             className={`logo cursor-pointer flex flex-col gap-y-2 items-center pt-3 duration-300 ${
//                 isOpen ? "mb-20" : "mb-10"
//             }`}
//         >
//             {/* First Logo */}
//             <img src={logo1} alt="logo1" className="w-25" /> {/* Adjust the size of the first logo */}

//             {/* Second Logo */}
//             <img src={logo2} alt="logo2" className="w-23" /> {/* Adjust the size of the second logo */}

//             <h1
//                 className={`font-extrabold origin-left duration-100
//                 text-brown-main text-3xl ${!isOpen && "opacity-0"}`}
//             >
//                 <center></center>
//             </h1>
//         </div>
//     );
// }
import React from "react";
import logo1 from "../../assets/logo2.png";  // First logo
import logo2 from "../../assets/smartspend.png";  // Second logo

export default function Logo({ isOpen }) {
    return (
        <div
            className={`logo cursor-pointer flex flex-col gap-y-2 items-center pt-3 duration-300 ${
                isOpen ? "mb-20" : "mb-10"
            }`}
        >
            {/* First Logo */}
            <img src={logo1} alt="logo1" className="w-25" /> {/* Adjust the size of the first logo */}

            {/* Second Logo - Hide when isOpen is false */}
            <img
                src={logo2}
                alt="logo2"
                className={`w-23 ${!isOpen ? "hidden" : ""}`} />

            <h1
                className={`font-extrabold origin-left duration-100
                text-brown-main text-3xl ${!isOpen && "opacity-0"}`}
            >
                <center></center>
            </h1>
        </div>
    );
}
