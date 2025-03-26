import axios from "axios";

const API_URL = "https://task-mangement-backend-9n12.onrender.com/task"; 

// Create a task (POST request)
export const createTask = async (taskData) => {
  return await axios.post(`${API_URL}/add`, taskData);
};

// Get all tasks (GET request)
export const getTasks = async () => {
  return await axios.get(`${API_URL}/view`);
};

// Update a task (PUT request)
export const updateTask = async (id, updatedData) => {
  return await axios.put(`${API_URL}/update/${id}`, updatedData);
};

// Delete a task (DELETE request)
export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/delete/${id}`);
};
