/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { connect } from 'react-redux';
import { addTask } from "../redux/actions/taskActions";

const NewTaskModal = ({ setNewTaskModal, addTask }) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    const handleAddTask = () => {
        const newTask = {
          id: Date.now(),
          name,
          description,
          status
        };

        addTask(newTask);

        setNewTaskModal(false);
    };


  return (
    <div className="fixed z-10 w-1/2 max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-1/3 bg-gray-300">
        <h2 className="text-xl font-bold text-center">Add Task</h2>
        <div className="flex flex-col items-start justify-between space-y-4">
            <input type="text" placeholder="Task Name..." className="outline-none" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Task Description..." className="outline-none" onChange={(e) => setDescription(e.target.value)} />
            <div className="flex items-center justify-start space-x-4">
                <label>
                    <input type="radio" name="taskStatus" value="Pending" checked={status === 'Pending'} onChange={e => setStatus(e.target.value)} />
                    Pending
                </label>
                <label>
                    <input type="radio" name="taskStatus" value="Progress" checked={status === 'Progress'} onChange={e => setStatus(e.target.value)} />
                    In Progress
                </label>
                <label>
                    <input type="radio" name="taskStatus" value="Completed" checked={status === 'Completed'} onChange={e => setStatus(e.target.value)} />
                    Completed
                </label>
            </div>
        </div>
        <button onClick={handleAddTask} className="bg-white">Save</button>
        <p className="absolute top-0 right-2" onClick={() => setNewTaskModal(false)}>x</p>
    </div>
  )
}

const mapDispatchToProps = {
    addTask,
};

export default connect(null, mapDispatchToProps)(NewTaskModal)