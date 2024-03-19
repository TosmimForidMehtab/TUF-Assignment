import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        // <div className="flex justify-around p-3 bg-purple-600 text-black">
        //     <Navbar className="border-b-4 sticky top-0 z-50 text-black">
        //         <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
        //             Submissions
        //         </NavLink>
        //     </Navbar>

        //     <Navbar className="border-b-4 sticky top-0 z-50">
        //         <NavLink to="/create-submission" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
        //             Create a submission
        //         </NavLink>
        //     </Navbar>
        // </div>

        <Navbar className="border-b-4 sticky top-0 z-50 text-white bg-purple-700">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-cyan-300 font-semibold" : "")}>
                Submissions
            </NavLink>

            <NavLink to="/create-submission" className={({ isActive }) => (isActive ? "text-cyan-300 font-semibold" : "")}>
                Create a submission
            </NavLink>
        </Navbar>
    );
};

export default Header;
