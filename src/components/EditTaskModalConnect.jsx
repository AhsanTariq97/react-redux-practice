/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { connect } from 'react-redux';
import { editTask } from "../redux/actions/taskActions";

const EditTaskModal = ({ setEditTaskModal, task, editTask }) => {

    const [name, setName] = useState(task.name)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)

    const handleEditTask = () => {
        const updatedTask = {
            ...task,
            name,
            description,
            status
        };
        editTask(updatedTask);
        setEditTaskModal(false);
    };

  return (
    <div className="fixed z-10 w-1/2 max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-1/3 bg-gray-300">
        <h2 className="text-xl font-bold text-center">Edit Task</h2>
        <div className="flex flex-col items-start justify-between space-y-4">
            <input type="text" placeholder="Task Name..." className="outline-none" defaultValue={task.name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Task Description..." className="outline-none" defaultValue={task.description} onChange={(e) => setDescription(e.target.value)} />
            <div className="flex items-center justify-start space-x-4">
                <label>
                    <input type="radio" name="taskStatus" value="Pending" defaultChecked={task.status === 'Pending'}  onChange={e => setStatus(e.target.value)} />
                    Pending
                </label>
                <label>
                    <input type="radio" name="taskStatus" value="Progress" defaultChecked={task.status === 'Progress'}  onChange={e => setStatus(e.target.value)} />
                    In Progress
                </label>
                <label>
                    <input type="radio" name="taskStatus" value="Completed" defaultChecked={task.status === 'Completed'}  onChange={e => setStatus(e.target.value)} />
                    Completed
                </label>
            </div>
        </div>
        <button onClick={handleEditTask} className="bg-white">Save</button>
        <p className="absolute top-0 right-2" onClick={() => setEditTaskModal(false)}>x</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const { taskId } = ownProps;
    const task = state.tasks.find(task => task.id === taskId);
    return {
        task: task,
    };
  };
  
  const mapDispatchToProps = {
    editTask,
  };

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskModal)