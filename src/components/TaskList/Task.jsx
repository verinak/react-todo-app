import React from "react";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { CgTrashEmpty } from "react-icons/cg";

function Task({ task, sendTaskDelete, sendTaskCompleted }) {
    const priorityColor = {
        high: {
            default: "bg-red-100",
            completed: "bg-red-50",
        },
        medium: {
            default: "bg-yellow-100",
            completed: "bg-yellow-50",
        },
        low: {
            default: "bg-lime-100",
            completed: "bg-lime-50",
        },
    };
    const bgColor =
        priorityColor[task.priority][task.completed ? "completed" : "default"];
    const textColor = task.completed ? "text-gray-600" : "text-black";

    const handleDelete = () => {
        sendTaskDelete(task.id);
    };

    const handleCompletedToggle = () => {
        sendTaskCompleted(task.id, !task.completed);
    };
    return (
        <div
            className={`m-2 p-1 md:p-2 flex items-center rounded-lg ${bgColor} ${textColor}`}
        >
            <label className="px-2 py-1 cursor-pointer">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleCompletedToggle}
                    className="hidden"
                />
                {task.completed ? <FaRegCircleCheck /> : <FaRegCircle />}
            </label>
            {/* <button className="px-2 py-1" onClick={handleCompletedToggle}>
                {task.completed ? <FaRegCircleCheck /> : <FaRegCircle />}
            </button> */}
            <div className="px-2 py-1 flex-1">{task.title}</div>
            <button className="px-2 py-1 cursor-pointer" onClick={handleDelete}>
                <CgTrashEmpty />
            </button>
        </div>
    );
}

export default Task;
