import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from "../redux/actions/postActions";

// eslint-disable-next-line react/prop-types
const EditPostModal = ({ setEditPostModal, postId }) => {

    const post = useSelector(state => state.posts.posts.find(post => post.id === postId));

    const dispatch = useDispatch();

    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)

    const handleEditPost = () => {
        const updatedPost = {
            ...post,
            title,
            body
        };
        dispatch(editPost(updatedPost));
        setEditPostModal(false);
    };

  return (
    <div className="fixed z-10 w-1/2 max-w-xl p-4 space-y-4 -translate-x-1/2 -translate-y-1/2 bg-gray-300 top-1/2 left-1/2 h-1/3">
        <h2 className="text-xl font-bold text-center">Edit Post</h2>
        <div className="flex flex-col items-start justify-between space-y-4">
            <input type="text" placeholder="Post Title..." className="w-full outline-none" defaultValue={post.title} onChange={(e) => setTitle(e.target.value)} />
            <textarea type="text" placeholder="Post Body..." className="w-full outline-none" defaultValue={post.body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button onClick={handleEditPost} className="bg-white">Save</button>
        <p className="absolute top-0 right-2" onClick={() => setEditPostModal(false)}>x</p>
    </div>
  )
}

export default EditPostModal