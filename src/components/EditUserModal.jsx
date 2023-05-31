import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from "../redux/actions/userActions";

// eslint-disable-next-line react/prop-types
const EditUserModal = ({ setEditUserModal, userId }) => {

    const user = useSelector(state => state.users.users.find(user => user.id === userId));

    const dispatch = useDispatch();

    const [name, setName] = useState(user.name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)

    const handleEditUser = () => {
        const updatedUser = {
            ...user,
            name,
            username,
            email
        };
        dispatch(editUser(updatedUser));
        setEditUserModal(false);
    };

  return (
    <div className="fixed z-10 w-1/2 max-w-xl p-4 space-y-4 -translate-x-1/2 -translate-y-1/2 bg-gray-300 top-1/2 left-1/2 h-1/3">
        <h2 className="text-xl font-bold text-center">Edit User</h2>
        <div className="flex flex-col items-start justify-between space-y-4">
            <input type="text" placeholder="User Name..." className="outline-none" defaultValue={user.name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="User Username..." className="outline-none" defaultValue={user.username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="User Email..." className="outline-none" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button onClick={handleEditUser} className="bg-white">Save</button>
        <p className="absolute top-0 right-2" onClick={() => setEditUserModal(false)}>x</p>
    </div>
  )
}

export default EditUserModal