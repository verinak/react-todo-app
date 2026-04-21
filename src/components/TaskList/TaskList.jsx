import React, { useState } from "react";
import Task from "./Task";

// todo: consider adding pagination maybe
function TaskList({ tasks, sendTaskDelete, sendTaskCompleted }) {
    // const [tasks, setTasks] = useState(taskData);

    return (
        <div className="md:text-lg flex-1 py-4">
            {tasks.length === 0 ? (
                <div className="text-center p-8">
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
