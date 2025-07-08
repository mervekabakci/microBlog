export default function BlogDetails({ postList, index}) {
    console.log("data : " + postList)
    if (!postList) return <div>Yükleniyor...</div>;

    return (
        <>
            <div className="bannerWrapper">
                <div className="desc">
                    <div className="title">
                        {postList[index].title}
                    </div>
                    <p>{postList[index].brief}</p>
                </div>
            </div>
            <div className="pageContentWrapper">
                <div className="paragraph">
                   {postList[index].content}
                </div>

                <div className="commentWrapper">
                    <form>
                        <label htmlFor="comment">Yorum Yap</label>
                        <textarea name="comment" id="comment"></textarea>
                        <button className="fixBtn button-secondary"><span className="icon-comment"></span> Yorum Yap</button>
                    </form>
                    <div className="commentResult">
                        <div className="commentItem">
                            <div className="userName">Kullanıcı Adı</div>
                            <div className="userComment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cupiditate veniam sint sed dolorem est inventore architecto quasi sit. Sequi recusandae nobis in officia! Ad labore quod nesciunt. Quia, quod suscipit! Unde harum necessitatibus voluptas veritatis et esse aliquid deserunt expedita eaque eveniet vel tempora hic qui quibusdam quidem quaerat natus dolorum temporibus nihil voluptate, libero ratione! Nesciunt quis aliquam eveniet fuga. Cupiditate eaque, corporis magnam illo unde veniam ratione exercitationem a impedit quo quas expedita dolorum nisi sequi voluptas quis cumque quae earum vero? Vero, quia ipsum in qui odit a labore ducimus, rem at dolores velit, harum optio.</div>
                        </div>
                        <div className="commentItem">
                            <div className="userName">Kullanıcı Adı</div>
                            <div className="userComment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cupiditate veniam sint sed dolorem est inventore architecto quasi sit. Sequi recusandae nobis in officia! Ad labore quod nesciunt. Quia, quod suscipit! Unde harum necessitatibus voluptas veritatis et esse aliquid deserunt expedita eaque eveniet vel tempora hic qui quibusdam quidem quaerat natus dolorum temporibus nihil voluptate, libero ratione! Nesciunt quis aliquam eveniet fuga. Cupiditate eaque, corporis magnam illo unde veniam ratione exercitationem a impedit quo quas expedita dolorum nisi sequi voluptas quis cumque quae earum vero? Vero, quia ipsum in qui odit a labore ducimus, rem at dolores velit, harum optio.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}