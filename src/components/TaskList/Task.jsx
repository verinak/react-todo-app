import React from "react";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { CgTrashEmpty } from "react-icons/cg";
import { Link } from "react-router-dom";

function Task({ task, sendTaskDelete, sendTaskCompleted }) {
    const priorityColor = {
        high: {
            default: "red-500",
            completed: "red-300",
        },
        medium: {
            default: "yellow-400",
            completed: "yellow-200",
        },
        low: {
            default: "lime-500",
            completed: "lime-300",
        },
        none: {
            default: "gray-500",
            completed: "gray-300",
        },
    };
    const accentColorText = "text-" + priorityColor[task.priority][task.completed ? "completed" : "default"];
    const accentColorBorder = "border-" + priorityColor[task.priority][task.completed ? "completed" : "default"];
    const bgColor = task.completed ? "bg-gray-50/80" : "bg-white";
    const textColor = task.completed ? "text-gray-600" : "text-slate-800";

    const handleDelete = () => {
        sendTaskDelete(task.id);
    };

    const handleCompletedToggle = () => {
        sendTaskCompleted(task.id, !task.completed);
    };

    return (
        <div className={`flex border-b border-slate-500/20 py-2.5 mx-2 ${textColor}`}>
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
