import React, { useState } from 'react';

const Post = ({ post, remove }) => {
    const [like, setLike] = useState('default');

    const likeOnClick = () => {
        setLike('green');
    }

    return (
        <>
          <div className = 'post'>
            <div className = 'post-text'>
              <p id = 'username'>{post.username}</p>
              <p>{post.text}</p>
              <p>{post.tag}</p>
            </div>
            <div className = "post-button">
              <button id = "like-post" style={{ backgroundColor: like }} onClick={likeOnClick}>like post</button>
              <button id = "delete-post" onClick={()=>remove(post)}>удалить</button>
            </div>
          </div>
        </>
    );
};

export default Post;