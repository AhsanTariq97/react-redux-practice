/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions';
import EditTaskModal from './EditTaskModal';
import NewTaskModal from './NewTaskModal';

const TaskList = ({ tasks, deleteTask }) => {

  const [newTaskModal, setNewTaskModal] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleEditTask = (taskId) => {
    setSelectedTaskId(taskId);
    setEditTaskModal(true);
  };

  return (
    <div className='w-screen h-screen'>
      <h1>Task List</h1>
      <button onClick={() => setNewTaskModal(true)} className='bg-gray-300'>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className='p-2 m-2 border border-black'>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button className='bg-gray-300' onClick={() => deleteTask(task.id)} >Delete</button>
            <button className='mx-2 bg-gray-300' onClick={() => handleEditTask(task.id)} >Edit</button>
          </li>
        ))}
      </ul>
      {newTaskModal && <NewTaskModal setNewTaskModal={setNewTaskModal} />}
      {editTaskModal && <EditTaskModal setEditTaskModal={setEditTaskModal} taskId={selectedTaskId} />}
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);