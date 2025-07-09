import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import usePosts from "../../Components/usePosts";

export default function Blog() {
  const { postList, isLoading } = usePosts();


  if (isLoading) return <div>Yükleniyor...</div>;

  return(
    <>
      <h1>Tüm Bloglar</h1>
      <Card postList={postList} />
    </>
  );
}
