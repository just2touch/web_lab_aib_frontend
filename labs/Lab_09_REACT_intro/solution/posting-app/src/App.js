
import React, { useState } from "react";
import PostList from "./main/PostList";
import AddPost from "./main/AddPost";
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, username: 'Тимофей2003', text: 'Сегодня я вкусно поел.', tag: '#еда' },
    { id: 2, username: 'New_Джейсон_Стетхэм', text: 'Мощно жал пустую штангу 20 кг', tag: '#спорт' },
    { id: 3, username: 'ДжонБоНЭМ_РОСТОВ2010', text: 'сыграл триоли!!!', tag: '#музыка' },
    { id: 5, username: 'ДомРУ', text: 'Хотите хороший интернет?', tag: '#реклама' },
  ]);

  const [orPosts, setOrPosts] = useState([...posts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setOrPosts([...orPosts, newPost]);
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
    setOrPosts(orPosts.filter(p => p.id !== post.id));
  }

  const sortedByTags = tag => {
    setPosts(posts.filter(p => p.tag === tag));
  }

  const showAll = posts => {
    setPosts([...posts]);
  }

  return (
    <div className="App">
      <AddPost create={createPost} />
      {posts.length !== 0
        ? <PostList orPosts={orPosts} show={showAll} sort={sortedByTags} remove={removePost} posts={posts} title='Посты:' />
        : <p style={{margin:20, fontSize:40}}>Нет постов!</p>
      }
    </div>
  );
}

export default App;
