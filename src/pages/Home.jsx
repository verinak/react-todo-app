import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import TaskList from "../components/TaskList/TaskList";
import AddTask from "../components/AddTask";

function Home() {
    const savedTasks = localStorage.getItem("userTasks");

    const [filters, setFilters] = useState({ hideCompleted: false, priority: [], searchQuery: "" });
    const [tasks, setTasks] = useState(() => (savedTasks ? JSON.parse(savedTasks) : []));

    // save tasks to localStorage on tasks state change
    useEffect(() => {
        // console.log(JSON.stringify(tasks));
        localStorage.setItem("userTasks", JSON.stringify(tasks));
    }, [tasks]);

    const receiveFilters = (filters) => {
        setFilters(filters);
    };

    const receiveNewTask = (taskData) => {
        // console.log(taskData);
        const taskId = crypto.randomUUID();
        // console.log(taskId);
        const newTask = { ...taskData, id: taskId, completed: false };
        // console.log([...tasks, newTask]);
        setTasks([...tasks, newTask]);
    };

    const receiveTaskDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const receiveTaskCompleted = (taskId, completed) => {
        setTasks(
            tasks.map((task) => {
                // console.log(task);
                // console.log(task.id);
                // console.log(task.id === taskId);
                return task.id === taskId ? { ...task, completed } : task;
            }),
        );
    };

    const filterTasks = () => {
        return (
            tasks
                // always show completes tasks at the bottom
                .toSorted((a, b) => a.completed - b.completed)
                // apply hideCompleted filter
                .filter((task) => {
                    return (
                        (filters.hideCompleted ? !task.completed : true) &&
                        (filters.priority.length !== 0 ? filters.priority.includes(task.priority) : true) &&
                        (filters.searchQuery
                            ? task.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
                            : true)
                    );
                })
        );
    };

    return (
        <>
            {/* too much flexboxs bgad eh da.. */}
            <div className="flex flex-col flex-1 py-4 md:py-8">
                {/* <h2 className="text-center font-bold text-2xl my-2 text-slate-800"></h2> */}
                <div className="w-[90%] flex-1 flex flex-col mx-auto space-y-4 md:space-y-8">
                    <AddTask sendNewTask={receiveNewTask} />

                    {/* this is the div that should fill the available space  */}
                    <div className="flex-1 flex flex-col md:flex-row h-full bg-white rounded-2xl shadow-sm">
                        <Filters filters={filters} sendFitlers={receiveFilters} />
                        <TaskList
                            tasks={filterTasks()}
                            sendTaskDelete={receiveTaskDelete}
                            sendTaskCompleted={receiveTaskCompleted}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
