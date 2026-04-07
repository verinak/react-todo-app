import React from "react";

function AddTask({ sendNewTask }) {
    const handleTaskSubmit = (event) => {
        // console.log(event);
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());
        // console.log(values); // { username: "...", email: "..." }

        event.target.reset();
        sendNewTask(values);
    };
    return (
        <div className="px-2 py-4 m-2">
            <form
                className="flex flex-col md:flex-row gap-2 items-center"
                onSubmit={handleTaskSubmit}
            >
                <input
                    type="text"
                    placeholder="Enter a new task.."
                    id="title"
                    name="title"
                    className="flex-1 rounded-3xl border border-slate-500 px-4 py-2 outline-none focus:ring-1 focus:ring-slate-500 w-full md:w-fit transition"
                />

                {/* ugly af bs ana mali4 5ol2 3al css dlwa2ti */}
                {/* todo: fix this.. */}
                <select
                    id="priority"
                    name="priority"
                    className="rounded-3xl border border-slate-500 px-4 py-2 outline-none focus:ring-1 focus:ring-slate-500 w-full md:w-fit transition"
                >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <button
                    type="submit"
                    className="rounded-3xl px-4 py-2 bg-slate-600 hover:bg-slate-700  text-white font-medium  w-full md:w-fit transition"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default AddTask;
