import React from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

import {
    FaUser,
    FaUserSecret,
    FaUserAstronaut,
    FaUserNinja,
    FaUserTie,
    FaUserNurse,
    FaUserDoctor,
    FaUserGraduate,
    FaUserInjured,
} from "react-icons/fa6";

const icons = [
    { component: FaUser, label: "User" },
    { component: FaUserTie, label: "Tie" },
    { component: FaUserNurse, label: "Nurse" },
    { component: FaUserDoctor, label: "Doctor" },
    { component: FaUserSecret, label: "Secret" },
    { component: FaUserGraduate, label: "Graduate" },
    { component: FaUserAstronaut, label: "Astronaut" },
    { component: FaUserNinja, label: "Ninja" },
    { component: FaUserInjured, label: "Injured" },
];

function Header({ username, userIconLabel }) {
    // const userIconLabel = localStorage.getItem("userIcon") || "User";
    const userIcon = icons.find((icon) => icon.label === userIconLabel) || icons[0];

    const navBarStyles = ({ isActive }) => {
        let styles = "w-8 md:w-fit h-full mx-4 absolute end-0 top-0 transition-all duration-75 ";
        styles += isActive ? " border-b-3 border-slate-800 " : " hover:border-b-3 hover:border-slate-600/60";
        return styles;
    };

    return (
        <header className="bg-slate-50 text-slate-800 px-4 md:px-8 relative flex justify-center">
            <NavLink to="/home" className="w-fit px-2 py-3 flex gap-3">
                <LuNotebookPen className="inline text-2xl" />
                <h1 className="font-extrabold text-xl">ReDoist</h1>
            </NavLink>

            <NavLink to="/profile" className={navBarStyles}>
                {/* heya btnot l fo2 fl screens el so8ayara di bs ana bgad m4 adra di azbat 7aga wseltelha.. */}
                <span
                    className="absolute end-0 top-1/2 transform -translate-y-1/2 rounded-full border-2 size-8
                        aspect-square pt-0.5 overflow-hidden md:hidden"
                >
                    <userIcon.component className="w-full h-fit" />
                </span>
                <div className="transform translate-y-1/2 relative pr-9 hidden md:block">
                    <span className="px-1 h-fit font-medium">{username || "Anonymous User"}</span>
                    <span
                        className="absolute end-0 top-1/2 transform -translate-y-1/2 rounded-full border-2 size-8
                            aspect-square pt-0.5 overflow-hidden"
                    >
                        <userIcon.component className="w-full h-fit" />
                    </span>
                </div>
            </NavLink>
        </header>
    );
}

export default Header;
