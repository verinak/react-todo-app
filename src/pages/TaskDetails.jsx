import React from "react";
import { useParams } from "react-router-dom";

function TaskDetails() {
    const { taskId } = useParams();

    return <div>TaskDetails: {taskId}</div>;
}

export default TaskDetails;
