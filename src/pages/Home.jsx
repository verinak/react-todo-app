import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import TaskList from "../components/TaskList/TaskList";
import AddTask from "../components/AddTask";

const savedTasks = localStorage.getItem("userTasks");

function Home() {
    const [filters, setFilters] = useState({ hideCompleted: false });
    const [tasks, setTasks] = useState(() =>
        savedTasks ? JSON.parse(savedTasks) : [],
    );
    const username = JSON.parse(localStorage.getItem("username"));

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
                    if (filters.hideCompleted) return !task.completed;
                    return true;
                })
        );
    };

    return (
        <>
            <div className="flex flex-col min-h-screen p-2 md:p-4 bg-slate-200">
                <h2 className="text-center font-bold text-2xl my-2">
                    {username ? `${username}'s` : "My"} To-Do List
                </h2>
                <AddTask sendNewTask={receiveNewTask} />
                <div className="flex-1 flex flex-col md:flex-row h-full">
                    <Filters filters={filters} sendFitlers={receiveFilters} />
                    <TaskList
                        tasks={filterTasks()}
                        sendTaskDelete={receiveTaskDelete}
                        sendTaskCompleted={receiveTaskCompleted}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
