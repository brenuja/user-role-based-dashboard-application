import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="px-9 py-6 rounded-xl w-[45%] bg-green-700">
        <h2 className="text-3xl font-semibold ">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-amber-400">
        <h2 className="text-3xl font-semibold ">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-indigo-600">
        <h2 className="text-3xl font-semibold ">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-orange-600">
        <h2 className="text-3xl font-semibold ">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
