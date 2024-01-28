import React from 'react';
import Post from './Post';
import PostTags from './PostTags';

const PostList = ({ posts, title, remove, sort, show, orPosts }) => {

    const uniqueTags = (posts) => {
        const tags = posts.map(post => post.tag)
        const uniqTag = tags.filter((value, index, self) =>
            self.indexOf(value) === index
        );
        return uniqTag;
    }

    return (
        <div className = 'tags-list'>
            <h3>{title}</h3>
            <p>Теги постов:</p>
            {uniqueTags(posts).map((tag,index) =>
                <PostTags sort={sort} tag={tag} key={posts[index].key} />
            )}
            <button id = "show-all" onClick={()=>show(orPosts)}>Показать все посты</button>
            {posts.map(post =>
                <Post remove={remove} post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;