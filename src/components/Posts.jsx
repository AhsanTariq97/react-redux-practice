import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '../redux/actions/postActions';
import EditPostModal from './EditPostModal';
import NewPostModal from './NewPostModal';

const Posts = () => {

    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.posts)
    const { loading, error } = useSelector(state => state.general)

    const [newPostModal, setNewPostModal] = useState(false);
    const [editPostModal, setEditPostModal] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const handleEditClick = post => {
        setSelectedPostId(post.id)
        setEditPostModal(true)
    }

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => setNewPostModal(true)} className='bg-gray-300'>Add Post</button>
            <ul>
                {posts.map((post) => {
                        return (
                            <li key={post.id} className='p-2 m-2 border border-black' >
                                <p>{post.id}</p>
                                <p>{post.title}</p>
                                <p>{post.body}</p>
                                <button className='bg-gray-300' onClick={() => handleEditClick(post)}>Edit</button>
                                <button className='mx-2 bg-gray-300' onClick={() => dispatch(deletePost(post.id))}>Delete</button>
                            </li>
                        )
                })}
            </ul>
            {newPostModal && <NewPostModal setNewPostModal={setNewPostModal} />}
            {editPostModal && <EditPostModal setEditPostModal={setEditPostModal} postId={selectedPostId} />}
        </div>
    )
}

export default Posts