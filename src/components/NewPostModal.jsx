import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createPost } from "../redux/actions/postActions";

// eslint-disable-next-line react/prop-types
const NewPostModal = ({ setNewPostModal }) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleAddPost = () => {
        const newPost = {
          id: new Date(),
          title,
          body
        };

        dispatch(createPost(newPost));

        setNewPostModal(false);
    };


  return (
    <div className="fixed z-10 w-1/2 max-w-xl p-4 -translate-x-1/2 -translate-y-1/2 bg-gray-300 top-1/2 left-1/2 h-1/3">
        <h2 className="text-xl font-bold text-center">Add Post</h2>
        <div className="flex flex-col items-start justify-between space-y-4">
            <input type="text" placeholder="Post Name..." className="w-full outline-none" onChange={(e) => setTitle(e.target.value)} />
            <textarea type="text" placeholder="Post Description..." className="w-full outline-none" onChange={(e) => setBody(e.target.value)} />
        </div>
        <button onClick={handleAddPost} className="bg-white">Save</button>
        <p className="absolute top-0 right-2" onClick={() => setNewPostModal(false)}>x</p>
    </div>
  )
}

export default NewPostModal