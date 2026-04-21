import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdSave } from "react-icons/md";

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

// todo: momken n2asem el saf7a l 7eteten wa7da zy settings wl tanya zy your stats aw 7aga keda ya3ni..
// 34an bsara7a say7a awi kedaaa

function Profile({ username, updateUsername, userIconLabel, updateIcon }) {
    const savedTasks = JSON.parse(localStorage.getItem("userTasks")) || [];
    const [localUsername, setLocalUsername] = useState(username);

    const clearData = () => {
        updateUsername("");
        updateIcon("");
        localStorage.clear(); // 7asa eni akid m4 el mafroud a3mel keda
        // i think i should move task state to App too.. howa hena by rerender el component keda keda 34an el username wl icon state byet8ayaro
        // bs lw mkanou4 byet8ayaro mkanet4 el savedTasks hayet3amalaha update w kan hayfdal katb x out of y badal 0 out of 0
    };

    return (
        <div className="p-4 md:p-8 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-6 h-fit shadow-sm">
                {/* username input */}
                <div className="flex flex-col md:flex-row gap-3 w-full relative">
                    <input
                        type="text"
                        value={localUsername}
                        onChange={(event) => setLocalUsername(event.target.value)}
                        placeholder="What should we call you?"
                        className="w-full rounded-3xl border border-sky-950/40 bg-gray-50/80 px-4 py-2 pe-11
                            outline-none focus:ring-1 focus:ring-sky-900/70 transition-all ease-in"
                    />

                    <button
                        className="absolute end-0 top-1/2 mx-1 h-[85%] -translate-y-1/2 transform rounded-3xl p-2
                            bg-sky-900/80 text-white enabled:hover:bg-sky-900/90 transition-all"
                        onClick={() => updateUsername(localUsername)}
                    >
                        {/* Save */}
                        <MdSave className="h-full w-full" />
                    </button>
                </div>

                <div className="">
                    <p className="text-sm font-medium ms-2 mb-2">Your Icon</p>
                    <div className="grid grid-cols-3 min-[380px]:grid-cols-4 min-[500px]:grid-cols-5 gap-3">
                        {icons.map(({ component: Icon, label }) => (
                            <label
                                key={label}
                                className="p-2 w-fit m-auto rounded-xl border border-slate-400/40 bg-slate-50
                                    text-slate-800 outline-2 outline-transparent has-[input:checked]:outline-slate-500
                                    hover:outline-slate-500/40 transition-all duration-50"
                            >
                                <input
                                    className="hidden"
                                    name="icon"
                                    type="radio"
                                    value={label}
                                    checked={label === userIconLabel}
                                    onClick={(event) => updateIcon(event.target.value)}
                                />
                                <Icon className="w-8 h-8" />
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-2 text-slate-800">
                    <p className="text-lg font-medium">
                        You added <span className="font-bold">{savedTasks.length}</span> tasks so far.
                    </p>

                    <p>
                        You completed{" "}
                        <span className="font-bold">{savedTasks.filter((task) => task.completed).length}</span> of them.
                        Good job!
                    </p>
                </div>

                <button
                    className="rounded-xl border-2 border-rose-800 hover:bg-red-50/80 text-red-800 text-sm font-medium
                        px-3 py-1.5 transition"
                    onClick={clearData}
                >
                    Clear My Data
                </button>
            </div>
        </div>
    );
}

export default Profile;
