import React from "react";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { CgTrashEmpty } from "react-icons/cg";
import { Link } from "react-router-dom";

function Task({ task, sendTaskDelete, sendTaskCompleted }) {
    const priorityColor = {
        high: {
            defaultText: "text-red-500",
            completedText: "text-red-300",
            defaultBorder: "border-red-500",
            completedBorder: "border-red-300",
        },
        medium: {
            defaultText: "text-yellow-400",
            completedText: "text-yellow-200",
            defaultBorder: "border-yellow-400",
            completedBorder: "border-yellow-200",
        },
        low: {
            defaultText: "text-lime-500",
            completedText: "text-lime-300",
            defaultBorder: "border-lime-500",
            completedBorder: "border-lime-300",
        },
        none: {
            defaultText: "text-gray-500",
            completedText: "text-gray-300",
            defaultBorder: "text-gray-500",
            completedBorder: "text-gray-300",
        },
    };
    const accentColorText = priorityColor[task.priority][task.completed ? "completedText" : "defaultText"];
    const accentColorBorder = priorityColor[task.priority][task.completed ? "completedBorder" : "defaultBorder"];
    const bgColor = task.completed ? "bg-gray-50/80" : "bg-white";
    const textColor = task.completed ? "text-gray-600" : "text-slate-800";

    const handleDelete = () => {
        sendTaskDelete(task.id);
    };

    const handleCompletedToggle = () => {
        sendTaskCompleted(task.id, !task.completed);
    };

    return (
        <div className={`flex border-b border-slate-500/20 py-2.5 mx-2 ${bgColor} ${textColor}`}>
            <label
                className={`cursor-pointer ${accentColorText} border-e-2 ${accentColorBorder} flex items-center px-2
                    pe-3`}
            >
                <input type="checkbox" checked={task.completed} onChange={handleCompletedToggle} className="hidden" />
                {task.completed ? <FaRegCircleCheck /> : <FaRegCircle />}
            </label>
            {/* <button className="px-2 py-1" onClick={handleCompletedToggle}>
                {task.completed ? <FaRegCircleCheck /> : <FaRegCircle />}
                </button> */}

            <div className="flex-1 cursor-pointer ps-1 py-0.5">
                <Link to={`/task/${task.id}`}>
                    <div className="px-2 py-1">{task.title}</div>
                </Link>
            </div>

            <button className="cursor-pointer flex items-center px-2" onClick={handleDelete}>
                <CgTrashEmpty />
            </button>
        </div>
    );
}

export default Task;
