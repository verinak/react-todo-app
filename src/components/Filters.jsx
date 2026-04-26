import React, { useState } from "react";
import { TbFilter, TbFilterX, TbFilterUp, TbFilterDown } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { TbSearch } from "react-icons/tb";
import { LiaSearchSolid } from "react-icons/lia";
import { addDays, startOfDay, endOfDay } from "date-fns";
import DatePicker from "react-datepicker";

function Filters({ filters, sendFitlers }) {
    const [hideFilters, setHideFilters] = useState(true);
    const [dateOption, setDateOption] = useState("");
    const [dateInputs, setDateInputs] = useState({ startDate: "", endDate: "" });

    const toggleFiltersMenu = () => {
        setHideFilters((prev) => !prev);
    };

    const handleFilterChange = (key, value) => {
        // console.log(event.target.id);
        // console.log(event.target.checked);

        const newFilters = {
            ...filters,
            [key]: value,
        };

        // setFilters(newFilters);
        sendFitlers(newFilters);
    };

    const handlePriorityChange = (clickedPriority) => {
        const priorityList = filters.priority.includes(clickedPriority)
            ? filters.priority.filter((priority) => priority !== clickedPriority) // if already in list remove
            : [...filters.priority, clickedPriority]; // else add to list
        handleFilterChange("priority", priorityList);
    };

    // const calculateDateRange() {

    // }

    const handeDateOptionChange = (clickedOption) => {
        const selectedOption = dateOption === clickedOption ? "" : clickedOption;
        setDateOption(selectedOption);
        // 7asa en ad habal
        switch (selectedOption) {
            case "overdue":
                sendFitlers({ ...filters, overdueOnly: true, startDate: "", endDate: "" });
                break;
            case "today": {
                const date = new Date();
                console.log(date);
                sendFitlers({ ...filters, overdueOnly: false, startDate: startOfDay(date), endDate: endOfDay(date) });
                break;
            }
            case "tomorrow": {
                const date = addDays(new Date(), 1);
                sendFitlers({ ...filters, overdueOnly: false, startDate: startOfDay(date), endDate: endOfDay(date) });
                break;
            }
            case "nextWeek": {
                const date = new Date();
                sendFitlers({
                    ...filters,
                    overdueOnly: false,
                    startDate: startOfDay(date),
                    endDate: endOfDay(addDays(date, 7)),
                });
                break;
            }
            case "custom": {
                sendFitlers({ ...filters, overdueOnly: false, startDate: "", endDate: "" }); // reset filters
                setDateInputs({ startDate: "", endDate: "" }); // reset date inputs
                break;
            }
            default:
                sendFitlers({ ...filters, overdueOnly: false, startDate: "", endDate: "" }); // reset filters
                break;
        }
    };

    const handleCustomDateChange = (key, value) => {
        // is it stupid to keep two states with start and end dates? yeah probably
        // but i don't like how the custom date input shows other selected date ranges while it's collapsing fa ma3le4 ba2a
        setDateInputs({ ...dateInputs, [key]: value });
        sendFitlers({ ...filters, [key]: value });
    };

    const clearFilters = () => {
        setDateOption("");
        setDateInputs({ startDate: "", endDate: "" });
        sendFitlers({
            hideCompleted: false,
            priority: [],
            searchQuery: "",
            overdueOnly: false,
            startDate: "",
            endDate: "",
        });
    };

    return (
        <div
            className="bg-slate-50 md:w-70 md:min-w-1/4 md:max-w-1/2 px-6 py-4 md:py-8 rounded-t-2xl md:rounded-r-none
                md:rounded-l-2xl text-sm md:text-base text-slate-700 border-b-2 md:border-b-0 md:border-e-2
                border-slate-600/20"
        >
            <div className="flex">
                {/* <p className="flex-1 font-bold text-base md:text-lg">Filters</p> */}
                <div className="flex-1 relative">
                    <TbSearch
                        className="text-slate-500 size-5 absolute start-0 top-0 transform translate-y-1/2
                            translate-x-1/2"
                    />

                    <input
                        className="w-full pl-10 px-2 py-2 border border-gray-400 rounded-md focus:ring-slate-500
                            focus:outline-slate-500"
                        type="text"
                        name="search"
                        value={filters.searchQuery}
                        placeholder="Search tasks.."
                        onChange={(event) => handleFilterChange("searchQuery", event.target.value)}
                    />
                </div>
                <button className="md:hidden relative ml-4" type="button" onClick={toggleFiltersMenu}>
                    {hideFilters ? <TbFilterDown className="size-5" /> : <TbFilterUp className="size-5" />}
                </button>
            </div>

            {/* filters menu eli byet3emelaha show/hide */}
            <div
                className={`transition-all linear h-fit overflow-hidden px-1
                    ${hideFilters ? "max-h-0 duration-600" : "max-h-200 duration-900 "} md:max-h-full`}
            >
                {/* m3raf4 bsara7a leh w howa bye2fel abta2 mn w howa byefta7 fa ana lafa2taha */}
                <div className="mt-6 space-y-4">
                    {/* hide completed checkbox */}
                    <label className="flex items-center gap-3 cursor-pointer">
                        <span className="font-medium me-4">Hide completed tasks</span>

                        <div className="relative">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={filters.hideCompleted}
                                onChange={(event) => handleFilterChange("hideCompleted", event.target.checked)}
                            />

                            <div className="w-11 h-6 bg-slate-300 rounded-full peer-checked:bg-slate-700 transition"></div>

                            <div
                                className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition
                                    peer-checked:translate-x-5"
                            ></div>
                        </div>
                    </label>
                    <div className="">
                        <p className="font-medium mb-2">Priority</p>
                        <div className="flex flex-wrap gap-1.5">
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-red-700/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-red-100/60 cursor-pointer
                                    transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="priorityCheck"
                                    value="high"
                                    checked={filters.priority.includes("high")}
                                    onChange={(event) => handlePriorityChange(event.target.value)}
                                />
                                <span className="">High</span>
                            </label>
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-yellow-700/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-yellow-100/60
                                    cursor-pointer transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="priorityCheck"
                                    value="medium"
                                    checked={filters.priority.includes("medium")}
                                    onChange={(event) => handlePriorityChange(event.target.value)}
                                />
                                <span className="">Medium</span>
                            </label>
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-lime-700/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-lime-100/60 cursor-pointer
                                    transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="priorityCheck"
                                    value="low"
                                    checked={filters.priority.includes("low")}
                                    onChange={(event) => handlePriorityChange(event.target.value)}
                                />
                                <span className="">Low</span>
                            </label>
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-gray-700/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-gray-100/60 cursor-pointer
                                    transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="priorityCheck"
                                    value="none"
                                    checked={filters.priority.includes("none")}
                                    onChange={(event) => handlePriorityChange(event.target.value)}
                                />
                                <span className="">No Priority</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium mb-2">Due Date</p>
                        <div className="flex flex-wrap gap-1.5">
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-sky-950/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-sky-100/60 cursor-pointer
                                    transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="dateCheck"
                                    value="overdue"
                                    checked={dateOption.includes("overdue")}
                                    onChange={(event) => handeDateOptionChange(event.target.value)}
                                />
                                <span className="">Overdue</span>
                            </label>
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-sky-950/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-sky-100/60 cursor-pointer
                                    transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="dateCheck"
                                    value="today"
                                    checked={dateOption.includes("today")}
                                    onChange={(event) => handeDateOptionChange(event.target.value)}
                                />
                                <span className="">Today</span>
                            </label>
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-sky-950/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-sky-100/60 cursor-pointer
                                    transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="dateCheck"
                                    value="tomorrow"
                                    checked={dateOption.includes("tomorrow")}
                                    onChange={(event) => handeDateOptionChange(event.target.value)}
                                />
                                <span className="">Tomorrow</span>
                            </label>
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-sky-950/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-sky-100/60 cursor-pointer
                                    transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="dateCheck"
                                    value="nextWeek"
                                    checked={dateOption.includes("nextWeek")}
                                    onChange={(event) => handeDateOptionChange(event.target.value)}
                                />
                                <span className="">Next 7 Days</span>
                            </label>
                            <label
                                className="text-center py-1.5 px-2.5 font-medium rounded-xl border-2 border-slate-500/60
                                    text-slate-600/90 bg-white has-[input:checked]:border-sky-950/50
                                    has-[input:checked]:text-black/80 has-[input:checked]:bg-sky-100/60 cursor-pointer
                                    transition-all ease-in duration-100"
                            >
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    name="dateCheck"
                                    value="custom"
                                    checked={dateOption.includes("custom")}
                                    onChange={(event) => handeDateOptionChange(event.target.value)}
                                />
                                <span className="">Custom Range</span>
                            </label>
                        </div>
                        <div
                            className={`pt-1 space-y-0.5 transition-all ease-in-out
                                ${dateOption === "custom" ? "max-h-80 duration-500" : "max-h-0 overflow-hidden duration-300"}`}
                        >
                            <p className="text-sm font-medium mb-0">From: </p>
                            <DatePicker
                                className="rounded-xl border border-sky-950/40 px-3 py-1 text-slate-800 outline-0"
                                calendarClassName="border border-sky-950/40"
                                selected={dateInputs.startDate}
                                onChange={(value) => handleCustomDateChange("startDate", startOfDay(value))}
                                locale="en-EG"
                                dateFormat="dd/MM/yyyy"
                                placeholderText="From date.."
                                todayButton="Today"
                            />
                            <p className="text-sm font-medium mb-0">To: </p>
                            <DatePicker
                                className="rounded-xl border border-sky-950/40 px-3 py-1 text-slate-800 outline-0"
                                calendarClassName="border border-sky-950/40"
                                selected={dateInputs.endDate}
                                onChange={(value) => handleCustomDateChange("endDate", endOfDay(value))}
                                locale="en-EG"
                                dateFormat="dd/MM/yyyy"
                                placeholderText="To date.."
                                todayButton="Today"
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="mt-6 px-2 py-1 rounded-lg border-2 border-slate-800 w-36 hover:bg-slate-100"
                    onClick={clearFilters}
                >
                    Clear Filters
                </button>
            </div>
        </div>
    );
}

export default Filters;
