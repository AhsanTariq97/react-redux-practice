import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editTask } from "../redux/actions/taskActions";

// eslint-disable-next-line react/prop-types
const EditTaskModal = ({ setEditTaskModal, taskId }) => {

    const task = useSelector(state => state.tasks.find(task => task.id === taskId));

    const dispatch = useDispatch();

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
        dispatch(editTask(updatedTask));
        setEditTaskModal(false);
    };

  return (
    <div className="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3 max-w-xl bg-gray-300 p-4">
        <h2 className="text-xl text-center font-bold">Edit Task</h2>
        <div className="flex flex-col justify-between items-start space-y-4">
            <input type="text" placeholder="Task Name..." className="outline-none" defaultValue={task.name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Task Description..." className="outline-none" defaultValue={task.description} onChange={(e) => setDescription(e.target.value)} />
            <div className="flex justify-start items-center space-x-4">
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

export default EditTaskModal