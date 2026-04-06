import React, { useState } from "react";
import Filters from "../components/Filters";
import TaskList from "../components/TaskList/TaskList";
import AddTask from "../components/AddTask";

// const taskData = [
//     {
//         id: 1,
//         title: "study react lecture (pt1: state & hooks, pt2: routing)",
//         completed: true,
//         priority: "high",
//     },
//     {
//         id: 2,
//         title: "reactjs lab 2 pt1 (hooks)",
//         completed: false,
//         priority: "medium",
//     },
//     {
//         id: 3,
//         title: "reactjs lab 2 pt2 (routing)",
//         completed: false,
//         priority: "medium",
//     },
//     {
//         id: 4,
//         title: "deploy react app on github pages maybe lw fi wa2t ya3ni",
//         completed: false,
//         priority: "low",
//     },
//     {
//         id: 5,
//         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         completed: false,
//         priority: "high",
//     },
//     {
//         id: 6,
//         title: "Ducimus error ipsam unde numquam quidem dolores repudiandae placeat quae laudantium similique. ",
//         completed: true,
//         priority: "medium",
//     },
//     {
//         id: 7,
//         title: "Quidem magni officia qui nisi molestiae. ",
//         completed: false,
//         priority: "low",
//     },
// ];
// let nextId = 8; // for now?

function Home() {
    const [filters, setFilters] = useState({ hideCompleted: false });
    const [tasks, setTasks] = useState([]);

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
            <AddTask sendNewTask={receiveNewTask} />
            <div className="flex-1 flex flex-col md:flex-row h-full">
                <Filters filters={filters} sendFitlers={receiveFilters} />
                <TaskList
                    tasks={filterTasks()}
                    sendTaskDelete={receiveTaskDelete}
                    sendTaskCompleted={receiveTaskCompleted}
                />
            </div>
        </>
    );
}

export default Home;
