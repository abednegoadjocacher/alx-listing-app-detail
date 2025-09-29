import React from "react";

const Header: React.FC = () => {
    return(
        <>
            <header className="bg-emerald-400">
                <nav className="flex flex-row justify-evenly">
                    <a href="#" className=""> Home </a>
                    <a href="#" className=""> About </a>
                    <a href="#" className=""> Contact </a>
                    <a href="#" className=""> Book Us </a>
                </nav>
            </header>
        </>
    );
}

export default Header;

// export default function Header(){
//     return(
//         <div>
//             <h1>Header</h1>
//         </div>
//     );
// }