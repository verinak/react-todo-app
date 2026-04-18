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

function Header({ userIconLabel }) {
    // todo:
    // const userIconLabel = localStorage.getItem("userIcon") || "User";
    const userIcon = icons.find((icon) => icon.label === userIconLabel);

    const navBarStyles = ({ isActive }) => {
        let styles = "px-4 md:px-5 py-0.5 rounded-3xl transition-all relative";
        // todo: that underline is so ugly bs ana 3yza anam 5alas fa to fix later ba2a
        styles += isActive
            ? " tracking-wider underline underline-offset-5 decoration-2 decoration-slate-800"
            : " hover:tracking-wider";
        // console.log(isActive);
        // console.log(styles);
        return styles;
    };

    return (
        <header className="bg-slate-50 text-slate-800 px-2 md:px-10 py-3 flex flex-col md:flex-row items-center gap-2">
            <div className="flex flex-1 gap-3">
                <LuNotebookPen className="inline text-2xl" />
                <h1 className="font-extrabold text-xl">ReDoist</h1>
            </div>

            <nav className="flex flex-wrap gap-3 justify-center text-sm md:text-base font-medium">
                <NavLink
                    to="/home"
                    className={navBarStyles}
                    // activeClassName="border-black"
                >
                    Home
                </NavLink>

                <NavLink to="/profile" className={navBarStyles}>
                    Profile
                    {/* balafa2 gdan */}
                    <span className="w-4 md:w-5 inline-block"></span>
                    {
                        <userIcon.component
                            className="absolute end-0 top-1/2 mx-1 h-[90%] -translate-y-1/2 transform w-fit
                                aspect-square inline-block rounded-3xl border-2 pt-0.5"
                        />
                    }
                </NavLink>

                <a
                    className="px-4 md:px-5 py-0.5 rounded-3xl transition-all active:underline underline-offset-5
                        decoration-2 decoration-slate-800 active:tracking-wider hover:tracking-wider"
                    href="https://github.com/verinak"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Header;
