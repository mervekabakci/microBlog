import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch("https://blog.muratakdemir.tr/BlogPostForEveryone/getall");
        const data = await res.json();
        const foundPost = data.find((p) => p.id.toString() === id);
        setPost(foundPost);
      } catch (error) {
        console.error("Veri alınırken hata oluştu", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (isLoading) return <div>Yükleniyor...</div>;
  if (!post) return <div>İçerik bulunamadı.</div>;

  return (
    <>
      <div className="bannerWrapper">
        <div className="desc">
          <div className="title">{post.title}</div>
          <p>{post.brief}</p>
        </div>
      </div>

      <div className="pageContentWrapper">
        <div className="paragraph">{post.content}</div>

        <div className="commentWrapper">
          <form>
            <label htmlFor="comment">Yorum Yap</label>
            <textarea name="comment" id="comment"></textarea>
            <button className="fixBtn button-secondary">
              <span className="icon-comment"></span> Yorum Yap
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
