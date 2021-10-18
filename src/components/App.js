import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getPosts } from "../api/index";
import { About, Home, User } from "../pages";
import Loader from "./Loader";
import Navbar from "./Navbar";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log("response : ", response);
      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    //initially we want to fetch the posts to our homepage
    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Router>
    </div>
  );
}

export default App;
