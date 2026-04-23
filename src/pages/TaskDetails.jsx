import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { CgTrashEmpty } from "react-icons/cg";
import { FiEdit3 } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";

function TaskDetails() {
    const { taskId } = useParams();
    const savedTasks = localStorage.getItem("userTasks");
    const [tasks, setTasks] = useState(() => (savedTasks ? JSON.parse(savedTasks) : []));
    const task = tasks.find((task) => task.id === taskId);

    const [editMode, setEditMode] = useState(false);
    const [editData, setEditData] = useState(task);

    const navigate = useNavigate();

    // save tasks to localStorage on tasks state change
    useEffect(() => {
        // console.log(JSON.stringify(tasks));
        localStorage.setItem("userTasks", JSON.stringify(tasks));
    }, [tasks]);

    // el mafroud a3melaha import?
    const priorityColor = {
        high: {
            default: "bg-red-100",
            text: "text-red-800",
        },
        medium: {
            default: "bg-yellow-100",
            text: "text-yellow-800",
        },
        low: {
            default: "bg-lime-100",
            text: "text-lime-800",
        },
        none: {
            default: "bg-gray-100",
            text: "text-gray-800",
        },
    };

    const priorities = ["none", "low", "medium", "high"];

    const cancelEdits = () => {
        setEditMode(false);
        setEditData(task);
    };

    const handleTitleChange = (event) => {
        setEditData((prev) => ({
            ...prev,
            title: event.target.value,
        }));
    };

    const handlePriorityChange = (direction) => {
        const idx = priorities.indexOf(editData.priority) + (direction === "next" ? 1 : -1);
        // console.log(priorities[idx]);
        setEditData((prev) => ({
            ...prev,
            priority: priorities[idx],
        }));
    };

    const handleCompletedToggle = () => {
        setEditData((prev) => ({
            ...prev,
            completed: !prev.completed,
        }));
    };

    const saveTaskEdits = () => {
        // console.log(editData);
        const newTasks = tasks.map((task) => (task.id === taskId ? { ...task, ...editData } : task));
        setTasks(newTasks);
        setEditMode(false);
    };

    const deleteTask = () => {
        const confirm = window.confirm("Are you sure you want to delete this task?");
        if (!confirm) return;
        setTasks(tasks.filter((task) => task.id !== taskId));
        navigate("/home");
    };

    return (
        <div className="p-4 md:p-8 flex justify-center">
            {task ? (
                <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-6 h-fit shadow-sm">
                    {/* task title */}
                    <p className="mb-3 text-slate-500 font-medium text-base md:text-lg">Task Details</p>
                    <div>
                        <div className="text-slate-800 flex">
                            <label
                                className={`cursor-pointer mt-1.5 relative transition-all
                                    ${editMode ? "max-w-40 opacity-100 pe-2" : "max-w-0 opacity-0 pe-0"}`}
                            >
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={handleCompletedToggle}
                                    className="hidden"
                                />
                                <FaRegCircle
                                    className={`size-4 transition-all
                                        ${editData.completed ? "opacity-0" : "opacity-100"}`}
                                />
                                <FaRegCircleCheck
                                    className={`size-4 absolute top-0 transition-all
                                        ${editData.completed ? "opacity-100" : "opacity-0"}`}
                                />
                            </label>
                            <textarea
                                className={`text-xl md:text-2xl font-semibold field-sizing-content resize-none
                                    cursor-text outline-1 outline-offset-2 rounded
                                    ${editMode ? "outline-gray-400/60 px-1" : "outline-transparent px-0"} transition-all
                                    duration-300`}
                                type="text"
                                value={editData.title}
                                disabled={!editMode}
                                onChange={handleTitleChange}
                            />
                        </div>
                    </div>

                    {/* priority */}
                    <div>
                        <p className="mb-2 text-slate-500 font-medium text-sm md:text-base">Priority</p>
                        <div
                            className={`px-4 py-1 rounded-full w-fit flex items-center gap-2 transition-all
                                ${priorityColor[editData.priority]["default"]}
                                ${priorityColor[editData.priority]["text"]}`}
                        >
                            <button
                                className="cursor-pointer text-gray-900 disabled:text-gray-900/40
                                    disabled:cursor-default"
                                type="button"
                                onClick={() => handlePriorityChange("prev")}
                                disabled={!editMode || editData.priority === "none"}
                            >
                                <FiMinus className={`transition-all ${editMode ? "size-4" : "size-0"}`} />
                            </button>
                            <span className="font-medium w-16 text-center">
                                {editData.priority.charAt(0).toUpperCase() + editData.priority.slice(1)}
                            </span>
                            <button
                                className="cursor-pointer text-gray-900 disabled:text-gray-900/40
                                    disabled:cursor-default"
                                type="button"
                                onClick={() => handlePriorityChange("next")}
                                disabled={!editMode || editData.priority === "high"}
                            >
                                <FiPlus className={`transition-all ${editMode ? "size-4" : "size-0"}`} />
                            </button>
                        </div>
                    </div>

                    {/* status */}
                    <div>
                        <p className="mb-1 text-slate-500 font-medium text-sm md:text-base">Status</p>
                        <div
                            className={`px-4 py-1 rounded-full w-fit ${
                                editData.completed ? "bg-emerald-100 text-emerald-800" : "bg-orange-100 text-orange-800"
                                }`}
                        >
                            <span className="font-medium inline-block w-20 text-center transition-all">
                                {editData.completed ? "Completed" : "Pending"}
                            </span>
                        </div>
                    </div>

                    {/* buttons */}
                    <div className="flex flex-wrap gap-4 justify-between pt-3">
                        {editMode ? (
                            <div className="flex gap-2">
                                <button
                                    className="text-slate-600 border-2 border-slate-600 font-medium text-sm rounded-lg
                                        px-3 py-0.5 gap-1 flex items-center hover:bg-slate-100 transition
                                        cursor-pointer"
                                    type="button"
                                    onClick={cancelEdits}
                                >
                                    Cancel
                                    <IoCloseOutline className="inline size-5.5 pt-0.5 w-fit" />
                                </button>
                                <button
                                    className="text-white bg-green-600/80 font-medium text-sm rounded-lg px-3 py-0.5
                                        gap-2 flex items-center hover:bg-green-600/90 transition cursor-pointer"
                                    type="button"
                                    onClick={saveTaskEdits}
                                >
                                    Save
                                    <IoCheckmarkOutline className="inline size-5 w-fit" />
                                </button>
                            </div>
                        ) : (
                            <button
                                className="text-white bg-slate-500 font-medium text-sm rounded-lg px-3 py-0.5 gap-2 flex
                                    items-center hover:bg-slate-600/90 transition cursor-pointer"
                                type="button"
                                onClick={() => setEditMode(true)}
                            >
                                <FiEdit3 className="inline size-5.5 py-1 w-fit" />
                                Edit
                            </button>
                        )}

                        <button
                            className="text-red-700 border-2 border-red-700 font-medium text-sm rounded-lg px-3 py-0.5
                                gap-1 flex items-center hover:bg-red-50/80 transition cursor-pointer"
                            type="button"
                            onClick={deleteTask}
                        >
                            Delete
                            <CgTrashEmpty className="inline size-5.5 py-1 w-fit" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center p-3">
                    <p>Whoops.. we couldn't find this task.</p>
                    <p>Go back to the homepage and try again.</p>
                </div>
            )}
        </div>
    );
}

export default TaskDetails;
