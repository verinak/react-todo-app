import React, { useState } from "react";
import { TbFilter, TbFilterX } from "react-icons/tb";

function Filters({ filters, sendFitlers }) {
    {
        /* todo: hide on mobile by default */
    }
    // const [showFilters, setShowFilters] = useState(false);

    // const [filters, setFilters] = useState({
    //     hideCompleted: false,
    //     // todo: priority filter
    //     // priority: "all",
    // });

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
        <div className="bg-slate-100 md:min-w-1/4 px-2 py-4 m-2 rounded-lg text-sm md:text-base">
            {/* <button>
                <TbFilter />
            </button> */}

            <p className="font-medium text-slate-600 mb-3">Filter by:</p>

            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    className="h-4 w-4 accent-slate-700 "
                    // id="hideCompleted"
                    onChange={(event) =>
                        handleFilterChange(
                            "hideCompleted",
                            event.target.checked,
                        )
                    }
                />
                <span className=" text-slate-800">Hide completed tasks</span>
            </label>

            {/* todo: reset filters button */}
        </div>
    );
}

export default Filters;
