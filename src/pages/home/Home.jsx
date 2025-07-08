import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerSlider from "../../Components/BannerSlider";
import Card from "../../Components/Card";

export default function Home() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://blog.muratakdemir.tr/BlogPostForEveryone/getall");
        const data = await res.json();
        setPostList(data);
      } catch (error) {
        console.error("Veri alınırken hata oluştu", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container-md"> 
      <div className="bannerWrapper homeBannerWrapper">
        <BannerSlider postList={postList.slice(0, 3)} />
      </div>

      {isLoading ? (
        <div className="text-center">Yükleniyor...</div>
      ) : (
        <>
          <Card postList={postList.slice(0, 3)} />
          <div className="text-center">
            <Link to="/blog" className="fixBtn button-primary allBlogs">
              Tüm Bloglar
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
