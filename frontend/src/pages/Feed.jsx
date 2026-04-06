import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      let res = await axios
        .get("http://localhost:5000/posts")
        .then((res) => res.data.posts);
      setPosts(res);
    };
    fetchPost();
  }, []);
  console.log(posts);
  return (
    <section className="max-w-screen w-full h-screen">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="w-60 h-60 bg-white/30 p-4 border border-gray-300 rounded-lg flex flex-col justify-center items-center gap-4"
          >
            <img src={post.image} alt="" />
            <h1 className="text-gray-800">{post.title}</h1>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>
  );
}

export default Feed;
