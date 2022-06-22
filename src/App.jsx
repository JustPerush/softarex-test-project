import { useMemo, useState } from "react";
import { useGetRequest } from "./actions/useGetRequest";
import "./styles/App.scss";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import PhotoGallery from "./components/PhotoGallery";
import PhotosService from "./API/PhotosService";

function App() {
  const BASE_URL = "https://api.pexels.com/v1/";
  const CURATED = "curated?";
  const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";
  const PER_PAGE = "per_page=3";

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "description" },
    { id: 2, title: "Python", body: "Artificial Intelligence" },
    { id: 3, title: "Java", body: "Enterprise" },
    { id: 4, title: "C++", body: "Computer parts" },
  ]);
  const [filter, setFilter] = useState({ sort: "", searchQuery: "" });
  const [modal, setModal] = useState(false);

  function getSortedPosts() {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }

  const sortedPosts = useMemo(getSortedPosts, [filter.sort, posts]);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      if (filter.searchQuery) {
        return post.title
          .toLowerCase()
          .includes(filter.searchQuery.toLowerCase());
      }
      return true;
    });
  }, [filter.searchQuery, sortedPosts]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Сделать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title="Список постов"
      />
      <hr style={{ margin: "15px 0" }} />
      <PhotoGallery />
    </div>
  );
}

export default App;
