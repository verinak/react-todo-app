import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, sendTaskDelete, sendTaskCompleted }) {
    // const [tasks, setTasks] = useState(taskData);

    return (
        <div className="m-2 md:text-lg flex-1 bg-slate-100 rounded-lg">
            {tasks.length === 0 ? (
                <div className="text-center p-3">
                    <p>Nothing to see here!</p>
                    <p>Add some tasks to use this Todo App.</p>
                </div>
            ) : (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        sendTaskDelete={sendTaskDelete}
                        sendTaskCompleted={sendTaskCompleted}
                    />
                ))
            )}
        </div>
    );
}

export default TaskList;
