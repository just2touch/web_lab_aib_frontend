import React, { useState } from 'react';

const AddPost = ({ create }) => {
    const [post, setPost] = useState({ username: '', text: '', tag: '' });

    const addNewPost = () => {
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({ username: '', text: '', tag: '' });
    }

    return (
        <div className = 'post-add-container'>
            <p>Добавить пост:</p>
            <input
                onChange={e => setPost({ ...post, username: e.target.value })}
                value={post.username}
                type="text"
                placeholder="user name"
            />
            <input
                onChange={e => setPost({ ...post, text: e.target.value })}
                value={post.text}
                type="text"
                placeholder="post text"
            />
            <input
                onChange={e => setPost({ ...post, tag: e.target.value })}
                value={post.tag}
                type='text'
                placeholder="tag"
            />
            <button id = "add-post" onClick={addNewPost}>Добавить</button>
        </div>
    );
};

export default AddPost;