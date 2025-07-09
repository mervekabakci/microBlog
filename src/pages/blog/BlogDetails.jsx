import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePosts from "../../Components/usePosts";

export default function BlogDetails({ user }) {
  let navigate = useNavigate();

  const dialogRef = useRef  (null);
  const { id } = useParams();
  const { postList, isLoading } = usePosts();
  const post = postList.find(p => p.id.toString() === id);
  
  console.log("user : " + user)


  function handleOpenForm() {
    if (!user) {
      alert(`Yorum yapmanız için giriş yapmanız gerekiyor.`);
    } else {
      dialogRef.current.showModal();
    }
  }
  function handleCloseDialog(){
    dialogRef.current.close();
  }

  if (isLoading) return <div>Yükleniyor...</div>;
  if (!post) return <div>İçerik bulunamadı.</div>;

  return (
    <>
      <button onClick={() => navigate(-1)} className="fixBtn button-secondary-outline"><span className="icon-arrow-left"></span><span>Geri Dön</span></button>
      <div className="subBanner">
        <div className="desc">
          <div className="title">{post.title}</div>
        </div>
      </div>
      <br />
      <div className="pageContentWrapper">

        <div className="paragraph">
          <div className="shortText">
            {post.brief}
          </div>
          
          {post.content}
          </div>
        <div>

          <button 
            className={`fixBtn button-secondary ${!user ? 'disabled' : ''}`} 
            onClick={handleOpenForm}
            disabled={!user}
            >
            <span className="icon-comment"></span> <span>Yorum Yap</span> 
          </button>
          {!user ? <div className="note"><span className="icon-info"></span> <span>Yorum yapabilmek için üye girişi yapmanız gerekiyor.</span></div> : ''}
        </div>

        <div className="commentResult">
          {post.comments.map((comment) => (
            <div key={comment.id} className="commentItem">
                <div className="userName">{comment.userId}</div>
                <div className="userComment">{comment.content}</div>
            </div>
          ))}

          {/* <div className="commentItem">
              <div className="userName">Kullanıcı Adı</div>
              <div className="userComment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cupiditate veniam sint sed dolorem est inventore architecto quasi sit. Sequi recusandae nobis in officia! Ad labore quod nesciunt. Quia, quod suscipit! Unde harum necessitatibus voluptas veritatis et esse aliquid deserunt expedita eaque eveniet vel tempora hic qui quibusdam quidem quaerat natus dolorum temporibus nihil voluptate, libero ratione! Nesciunt quis aliquam eveniet fuga. Cupiditate eaque, corporis magnam illo unde veniam ratione exercitationem a impedit quo quas expedita dolorum nisi sequi voluptas quis cumque quae earum vero? Vero, quia ipsum in qui odit a labore ducimus, rem at dolores velit, harum optio.</div>
          </div>
          <div className="commentItem">
              <div className="userName">Kullanıcı Adı</div>
              <div className="userComment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cupiditate veniam sint sed dolorem est inventore architecto quasi sit. Sequi recusandae nobis in officia! Ad labore quod nesciunt. Quia, quod suscipit! Unde harum necessitatibus voluptas veritatis et esse aliquid deserunt expedita eaque eveniet vel tempora hic qui quibusdam quidem quaerat natus dolorum temporibus nihil voluptate, libero ratione! Nesciunt quis aliquam eveniet fuga. Cupiditate eaque, corporis magnam illo unde veniam ratione exercitationem a impedit quo quas expedita dolorum nisi sequi voluptas quis cumque quae earum vero? Vero, quia ipsum in qui odit a labore ducimus, rem at dolores velit, harum optio.</div>
          </div> */}
        </div>

      </div>
      <dialog ref={dialogRef}>
        <div className="dialogHead">
          <div className="dialogTitle">"{post.title}" blog yazısı için yorum yap</div>
          <button onClick={handleCloseDialog} className="closeBtn"><span className="icon-cross"></span></button>
        </div>
        <div className="dialogBody">
          <div className="commentWrapper">
            <form>
              <textarea name="comment" id="comment"></textarea>
              <button className="fixBtn button-secondary">
                <span className="icon-comment"></span> Yorum Yap
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}