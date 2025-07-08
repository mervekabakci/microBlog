import { useEffect, useState } from "react";
import Card from "../../Components/Card";

export default function Blog() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://blog.muratakdemir.tr/BlogPostForEveryone/getall")
      .then((res) => res.json())
      .then((data) => {
        setPostList(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (isLoading) return <div>Yükleniyor...</div>;

  return <Card postList={postList} />;
}
