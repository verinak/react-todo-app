import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaPlus } from "react-icons/fa6";

function AddTask({ sendNewTask }) {
    const [formData, setFormData] = useState({
        title: "",
        priority: "none",
        dueDate: "",
    });

    const handleTitleChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            title: event.target.value,
        }));
    };

    const handlePriorityChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            priority: event.target.checked ? event.target.value : "none",
        }));
    };

    const handleTaskSubmit = (event) => {
        event.preventDefault();
        // console.log({ ...formData, createDate: new Date() });
        sendNewTask({ ...formData, createDate: new Date() });
        // event.target.reset();
        setFormData({
            title: "",
            priority: "none",
            dueDate: "",
        });
    };

    const onDateChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            dueDate: value || "",
        }));
    };

    return (
        // <div className="m-2 px-2 py-4">
        <div className="px-2">
            <form className="flex flex-col items-start gap-2 space-y-1" onSubmit={handleTaskSubmit}>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Enter a new task.."
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleTitleChange}
                        className="w-full rounded-3xl border border-sky-950/40 bg-gray-50/80 px-4 py-2 pe-11
                            outline-none focus:ring-1 focus:ring-sky-900/70 transition-all ease-in min-h-10"
                    />
                    <button
                        type="submit"
                        className="absolute end-0 top-1/2 mx-1 h-[85%] -translate-y-1/2 transform rounded-3xl
                            bg-sky-900/80 p-2 text-white transition-all enabled:hover:bg-sky-900/90
                            disabled:cursor-not-allowed disabled:bg-slate-500/70"
                        disabled={!formData.title.trim()}
                    >
                        <FaPlus className="h-full w-full" />
                    </button>
                </div>
                <div className="flex flex-col items-center w-full gap-2 space-y-1 md:space-y-0 space-x-1 md:flex-row">
                    <div
                        className="bg-white-50 flex w-full flex-1 flex-row justify-between gap-1 rounded-3xl border
                            border-sky-950/40 bg-gray-50/80 p-1 md:w-fit min-h-10"
                        // className="bg-green-200 flex-1 "
                    >
                        <label
                            className="flex-1 rounded-3xl px-0.5 py-1 text-center font-medium text-slate-600
                                transition-all duration-150 ease-in hover:tracking-wider
                                has-[input:checked]:bg-red-500/85 has-[input:checked]:font-bold
                                has-[input:checked]:tracking-wider has-[input:checked]:text-gray-50"
                        >
                            <input
                                className="peer hidden"
                                type="checkbox"
                                name="priority"
                                value="high"
                                checked={formData.priority === "high"}
                                onChange={handlePriorityChange}
                                // onClick={handleRadioClick}
                            />
                            <span className="px-2 py-1">High</span>
                        </label>
                        <label
                            className="flex-1 rounded-3xl px-0.5 py-1 text-center font-medium text-slate-600
                                transition-all duration-150 ease-in hover:tracking-wider
                                has-[input:checked]:bg-yellow-500/85 has-[input:checked]:font-bold
                                has-[input:checked]:tracking-wider has-[input:checked]:text-gray-50"
                        >
                            <input
                                className="hidden"
                                type="checkbox"
                                name="priority"
                                value="medium"
                                checked={formData.priority === "medium"}
                                onChange={handlePriorityChange}
                            />
                            <span className="px-2 py-1">Medium</span>
                        </label>

                        <label
                            className="flex-1 rounded-3xl px-0.5 py-1 text-center font-medium text-slate-600
                                transition-all duration-150 ease-in hover:tracking-wider
                                has-[input:checked]:bg-lime-500/85 has-[input:checked]:font-bold
                                has-[input:checked]:tracking-wider has-[input:checked]:text-gray-50"
                        >
                            <input
                                className="hidden"
                                type="checkbox"
                                name="priority"
                                value="low"
                                checked={formData.priority === "low"}
                                onChange={handlePriorityChange}
                            />
                            <span className="px-2 py-1">Low</span>
                        </label>
                    </div>
                    <div className="w-full flex-1">
                        <DatePicker
                            className="min-h-10 w-full flex-1 rounded-3xl border border-sky-950/40 bg-gray-50/80 px-4
                                py-1 text-slate-800 outline-0"
                            wrapperClassName="w-full"
                            calendarClassName="border border-sky-950/40"
                            selected={formData.dueDate}
                            onChange={onDateChange}
                            locale="en-EG"
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Add a due date.."
                            todayButton="Today"
                            // showIcon
                            // isClearable
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddTask;
