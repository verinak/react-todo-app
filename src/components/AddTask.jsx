import React from "react";

function AddTask({ sendNewTask }) {
    {
        /* todo: form handling and validation maybe badal el 2araf da */
    }
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
                    className="flex-2 rounded-3xl border border-slate-500 px-4 py-2 outline-none focus:ring-1 focus:ring-slate-500 w-full md:w-fit transition"
                />

                <div className="flex-1 flex flex-row justify-between p-1 gap-1 bg-white-50 border border-slate-600/40 bg-gray-50/80 rounded-3xl w-full md:w-fit">
                    {/* using text-shadow to simulate bold text, for a smooth transition */}
                    <label className="flex-1 text-center px-0.5 py-1.5 rounded-3xl font-medium text-slate-600 has-[input:checked]:text-gray-50 has-[input:checked]:bg-red-500/85 has-[input:checked]:font-bold has-[input:checked]:tracking-wider hover:tracking-wider transition-all duration-150 ease-in">
                        <input
                            className="peer hidden"
                            type="radio"
                            name="priority"
                            value="high"
                            // checked
                        />
                        <span className="px-2 py-1">High</span>
                    </label>
                    <label className="flex-1 text-center px-0.5 py-1.5 rounded-3xl font-medium text-slate-600 has-[input:checked]:text-gray-50 has-[input:checked]:bg-yellow-500/85 has-[input:checked]:font-bold has-[input:checked]:tracking-wider hover:tracking-wider transition-all duration-150 ease-in">
                        <input
                            className="hidden"
                            type="radio"
                            name="priority"
                            value="medium"
                        />
                        <span className="px-2 py-1">Medium</span>
                    </label>

                    <label className="flex-1 text-center px-0.5 py-1.5 rounded-3xl font-medium text-slate-600 has-[input:checked]:text-gray-50 has-[input:checked]:bg-lime-500/85 has-[input:checked]:font-bold has-[input:checked]:tracking-wider hover:tracking-wider transition-all duration-150 ease-in">
                        <input
                            className="hidden"
                            type="radio"
                            name="priority"
                            value="low"
                        />
                        <span className="px-2 py-1">Low</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="rounded-3xl px-4 py-2 bg-slate-600 hover:bg-slate-700 hover:tracking-wider text-white font-medium  w-full md:w-fit transition-all"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default AddTask;
