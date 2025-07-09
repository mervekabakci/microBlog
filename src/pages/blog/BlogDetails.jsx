import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails({user}) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const dialogRef = useRef  (null);



  function handleOpenForm() {
    if (user) {
      alert(`Yorum yapmanız için giriş yapmanız gerekiyor.`);
    } else {
      dialogRef.current.showModal();
    }
  }

  // function handleCloseForm() {
  //   dialogRef.current.close();
  // };



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
      <br />
      <div className="pageContentWrapper">
      <div className="paragraph">{post.content}</div>

      <button className="fixBtn button-secondary" onClick={handleOpenForm}
      disabled={user}
      >
        <span className="icon-comment"></span> Yorum Yap
      </button>
      <br />
      <br />
        <div className="commentWrapper">
      <br />
      <br />
        <dialog ref={dialogRef}>
          <div>
            <form>
              <label htmlFor="comment">Yorum Yap</label>
              <textarea name="comment" id="comment"></textarea>
              <button className="fixBtn button-secondary">
                <span className="icon-comment"></span> Yorum Yap
              </button>
            </form>
          </div>
        </dialog>
        </div>
      </div>
    </>
  );
}