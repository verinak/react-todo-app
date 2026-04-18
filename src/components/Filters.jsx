import React, { useState } from "react";
import { TbFilter, TbFilterX } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

function Filters({ filters, sendFitlers }) {
    const [hideFilters, setHideFilters] = useState(false);

    // const [filters, setFilters] = useState({
    //     hideCompleted: false,
    //     // todo: priority filter
    //     // priority: "all",
    // });

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

    return (
        <div className="bg-slate-50 md:min-w-1/4 px-6 py-4 md:py-8 m-2 rounded-2xl text-sm md:text-base shadow-md">
            <div className="flex">
                <p className="flex-1 font-medium text-slate-700">Filters</p>
                <button className="md:hidden" type="button" onClick={toggleFiltersMenu}>
                    {hideFilters ? (
                        <MdOutlineKeyboardArrowDown className="size-5 text-slate-700" />
                    ) : (
                        <MdOutlineKeyboardArrowUp className="size-5 text-slate-700" />
                    )}
                </button>
            </div>

            <div
                className={`transition-all duration-600 linear h-fit overflow-hidden
                    ${hideFilters ? "max-h-0" : "max-h-100"}`}
            >
                <div className="my-4 space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                onChange={(event) => handleFilterChange("hideCompleted", event.target.checked)}
                            />

                            <div className="w-11 h-6 bg-slate-300 rounded-full peer-checked:bg-slate-700 transition"></div>

                            <div
                                className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition
                                    peer-checked:translate-x-5"
                            ></div>
                        </div>

                        <span className="text-slate-800">Hide completed tasks</span>
                    </label>
                </div>
            </div>

            {/* todo: reset filters button */}
        </div>
    );
}

export default Filters;
