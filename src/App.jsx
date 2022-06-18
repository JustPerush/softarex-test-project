import {useMemo, useState} from "react";

import "./styles/App.scss";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf'

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "description" },
    { id: 2, title: "Python", body: "Artificial Intelligence" },
    { id: 3, title: "Java", body: "Enterprise" },
    { id: 4, title: "C++", body: "Computer parts" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  function getSortedPosts() {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts
  }

  const sortedPosts = useMemo(getSortedPosts, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => {
      if (searchQuery) {
        return  post.title.toLowerCase().includes(searchQuery.toLowerCase())
      }
      return true
    })
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          onChange={sortPosts}
          defaultValue="Сортировка:"
          value={selectedSort}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length !== 0
          ? (
        <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов" />
      )
          : (
        <h1>Посты не были найдены</h1>
      )}
    </div>
  );
}

export default App;
