import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer
            className="flex flex-col md:flex-row justify-between items-center text-center gap-2 px-4 md:px-8 py-4
                bg-slate-100 text-gray-700 border-t border-gray-300 text-sm"
        >
            <span>&copy; 2026 Verina Khella &sdot; Built with React & Tailwind</span>
            <span className="space-x-3">
                <a href="https://github.com/verinak/react-todo-app" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="inline size-5 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/verinakhella/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="inline size-5 cursor-pointer" />
                </a>
            </span>
        </footer>
    );
}

export default Footer;
