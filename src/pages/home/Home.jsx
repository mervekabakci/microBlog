import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerSlider from "../../Components/BannerSlider";
import Card from "../../Components/Card";
import usePosts from "../../Components/usePosts";

export default function Home() {
  const { postList, isLoading } = usePosts();

  return (
    <div className="container-md"> 
      <div className="bannerWrapper homeBannerWrapper">
        <BannerSlider postList={postList.slice(0, 3)} />
      </div>

      {isLoading ? (
        <div className="text-center">Yükleniyor...</div>
      ) : (
        <>
          <Card postList={postList.slice(0, 8)} />
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
