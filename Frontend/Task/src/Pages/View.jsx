import React, { useState, useEffect } from "react";
import { getTasks, deleteTask, updateTask } from "../init/wholedata";

export const View = () => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    description: "",
    completed: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTasks();
      setData(response.data.task);
    };
    fetchData();
  }, []);

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    setData((prev) => prev.filter((item) => item._id !== taskId));
  };

  const handleEdit = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setUpdatedTask({
      title: task.title,
      description: task.description,
      completed: task.completed ? "true" : "false",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    await updateTask(currentTask._id, {
      ...updatedTask,
      completed: updatedTask.completed.toLowerCase() === "true",
    });

    setData((prev) =>
      prev.map((task) =>
        task._id === currentTask._id
          ? { ...task, ...updatedTask, completed: updatedTask.completed.toLowerCase() === "true" }
          : task
      )
    );
    setIsEditing(false);
    setCurrentTask(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 p-4">
      {isEditing ? (
        <div className="border border-gray-300 bg-white shadow-md p-4 w-full max-w-md mt-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Edit Task</h2>
          <label htmlFor="title" className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={updatedTask.title}
            onChange={handleChange}
            className="border w-full p-2 mb-2 rounded"
            placeholder="Title"
          />
          <label htmlFor="desc" className="block font-medium">Description</label>
          <textarea
            id="desc"
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
            className="border w-full p-2 mb-2 rounded"
            placeholder="Description"
          />
          <label htmlFor="completed" className="block font-medium">Completed</label>
          <input
            type="text"
            name="completed"
            id="completed"
            value={updatedTask.completed}
            onChange={handleChange}
            className="border w-full p-2 mb-2 rounded"
            placeholder="Completed (true/false)"
          />

          <div className="flex justify-between mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleUpdate}>
              Save
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-6xl min-h-screen flex flex-wrap justify-center gap-4 p-4 border border-gray-300 bg-white shadow-md rounded-lg ">
          {data.length > 0 ? (
            data.map((task) => (
              <div key={task._id} className="border border-gray-400 rounded-lg p-2 w-64 h-48 bg-white shadow-md flex flex-col justify-between">
                <h1 className="font-bold text-lg text-gray-800">Title: {task.title}</h1>
                <p className="text-gray-600">Description: {task.description}</p>
                <p className="text-gray-600 mb-0">Completed: {task.completed ? "✅" : "❌"}</p>
                <div className="flex justify-between mt-7">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded " onClick={() => handleEdit(task)}>
                    Edit
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => handleDelete(task._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-lg">No Task Available</div>
          )}
        </div>
      )}
    </div>
  );
};
