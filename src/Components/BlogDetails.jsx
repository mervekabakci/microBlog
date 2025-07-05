export default function BlogDetails() {
    return(
        <>
            <div className="bannerWrapper">
                <div className="desc">
                    <div className="title">
                        Blog Başlık
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
                </div>
                <div className="bannerImg">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                </div>
            </div>
            <div className="pageContentWrapper">
                <div className="paragraph">
                    Lorem, ipsum dolor sit amet consectetur <b>adipisicing</b> elit. Dolorum, pariatur.
                    <br /><br />
                    Lorem ipsum dolor, <a href="#">sit amet consectetur</a> adipisicing elit. Veniam ex beatae quasi, hic voluptas consequuntur voluptatum ducimus perferendis nemo praesentium architecto expedita illo sed veritatis et atque suscipit provident corporis.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem beatae fugit voluptatum nisi eum pariatur iusto, repudiandae cupiditate labore nemo, officia asperiores corporis, vitae commodi consectetur at dolores non?
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                      Lorem ipsum dolor, <a href="#">sit amet consectetur</a> adipisicing elit. Veniam ex beatae quasi, hic voluptas consequuntur voluptatum ducimus perferendis nemo praesentium architecto expedita illo sed veritatis et atque suscipit provident corporis.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem beatae fugit voluptatum nisi eum pariatur iusto, repudiandae cupiditate labore nemo, officia asperiores corporis, vitae commodi consectetur at dolores non?
                    <ol>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                </div>

                <div className="commentWrapper">
                    <form>
                        <label htmlFor="comment">Yorum Yap</label>
                        <textarea name="comment" id="comment"></textarea>
                        <button className="fixBtn button-secondary"><span class="icon-comment"></span> Yorum Yap</button>
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