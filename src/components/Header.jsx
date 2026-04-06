import React from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

function Header() {
    const navBarStyles = ({ isActive }) => {
        let styles = "px-5 py-1 rounded-2xl border-2 ";
        styles += isActive
            ? "border-black"
            : "border-transparent hover:border-black";
        // console.log(isActive);
        // console.log(styles);
        return styles;
    };
    return (
        <header className="bg-slate-100 px-10 py-3 flex flex-col md:flex-row items-center gap-2">
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
                    className="px-5 py-1 rounded-2xl border-2 border-transparent hover:border-black"
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
