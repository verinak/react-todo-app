import React from "react";
import { useParams } from "react-router-dom";

function TaskDetails() {
    const { taskId } = useParams();
    const savedTasks = JSON.parse(localStorage.getItem("userTasks")) || [];
    const task = savedTasks.find((task) => task.id === taskId);

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
    };

    return (
        <div className="p-4 md:p-8 flex justify-center">
            {task ? (
                <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-6 h-fit shadow-sm">
                    <p className="mb-0 text-slate-500 font-medium text-base md:text-lg">Task Details</p>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-800">{task.title}</h2>

                    <div>
                        <p className="mb-1 text-slate-500 font-medium text-sm md:text-base">Priority</p>
                        <span
                            className={`px-4 py-1 rounded-full ${priorityColor[task.priority]["default"]}
                                ${priorityColor[task.priority]["text"]}`}
                        >
                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                        </span>
                    </div>

                    <div>
                        <p className="mb-1 text-slate-500 font-medium text-sm md:text-base">Status</p>
                        <span
                            className={`px-4 py-1 rounded-full ${
                                task.completed ? "bg-emerald-100 text-emerald-800" : "bg-orange-100 text-orange-800"
                            }`}
                        >
                            {task.completed ? "Completed" : "Pending"}
                        </span>
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
