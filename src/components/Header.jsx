import React from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

function Header() {
    const navBarStyles = ({ isActive }) => {
        let styles = "px-4 md:px-6 py-0.5 rounded-3xl border-2 transition ";
        styles += isActive
            ? "border-black"
            : "border-transparent hover:border-slate-900";
        // console.log(isActive);
        // console.log(styles);
        return styles;
    };
    return (
        <header className="bg-slate-50 text-slate-800 px-10 py-3 flex flex-col md:flex-row items-center gap-2">
            <div className="flex gap-3">
                <LuNotebookPen className="inline text-2xl" />
                <h1 className="font-extrabold text-xl">ReDoist</h1>
            </div>
            <nav className="flex-1 flex gap-3 justify-end text-sm md:text-base font-medium">
                <NavLink
                    to="/home"
                    className={navBarStyles}
                    // activeClassName="border-black"
                >
                    Home
                </NavLink>
                <NavLink to="/profile" className={navBarStyles}>
                    Profile
                </NavLink>
                <a
                    className="px-4 md:px-6 py-0.5 rounded-3xl border-2 border-transparent hover:border-slate-900 transition"
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
