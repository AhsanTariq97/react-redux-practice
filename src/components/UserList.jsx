import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/userActions';
import EditUserModal from './EditUserModal';

const UserList = () => {

    const dispatch = useDispatch();
    const { users} = useSelector(state => state.users)
    const { loading, error } = useSelector(state => state.general)

  const [editUserModal, setEditUserModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const handleEditClick = user => {
        setSelectedUserId(user.id)
        setEditUserModal(true)
    }

    return (
        <div>
            <h2>UserList</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} className='p-2 m-2 border border-black' >
                        <p>{user.name}</p>                        
                        <p>{user.username}</p>                        
                        <p>{user.email}</p>
                        <button className='bg-gray-300' onClick={() => handleEditClick(user)}>Edit</button>
                    </li>
                ))}
            </ul>
            {editUserModal && <EditUserModal setEditUserModal={setEditUserModal} userId={selectedUserId} />}
        </div>
    )
}

export default UserList