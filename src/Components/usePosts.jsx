// src/hooks/usePosts.js
import { useEffect, useState } from "react";

export default function usePosts() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://blog.muratakdemir.tr/BlogList/BlogWithComments");
        const data = await res.json();
        setPostList(data);
      } catch (err) {
        console.error("Veri alınırken hata:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { postList, isLoading, error };
}
