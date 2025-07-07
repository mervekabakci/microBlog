export default function Card() {
    return (
        <>
            <div className="blogCards grids grid-columns-4">
                <div className="col-span-2 row-span-2">
                    <div className="card">
                        <a href="#" className="card-body">
                            <div className="card-img">
                                <div className="imageWrapper">
                                    <img src="https://picsum.photos/seed/picsum/200/300" alt="Kart Görseli" className="card-image" />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="card-title">Başlık</h2>
                                <p className="card-description">
                                    Sessizliğin ortasında doğanın nefesini hissettiğiniz bir macera sizi bekliyor.
                                </p>
                                <span className="moreButton">Devamı</span>
                            </div>
                        </a>
                        {/* <div className="card-footer">
                            <button className="card-button"><span class="icon-comment"></span> (0)</button>
                        </div> */}
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="card">
                        <a href="#" className="card-body">
                            <div className="card-img">
                                <div className="imageWrapper">
                                    <img src="https://picsum.photos/seed/picsum/200/300" alt="Kart Görseli" className="card-image" />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="card-title">Başlık</h2>
                                <p className="card-description">
                                    Sessizliğin ortasında doğanın nefesini hissettiğiniz bir macera sizi bekliyor.
                                </p>
                                <span className="moreButton">Devamı</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="card">
                        <a href="#" className="card-body">
                            <div className="card-img">
                                <div className="imageWrapper">
                                    <img src="https://picsum.photos/seed/picsum/200/300" alt="Kart Görseli" className="card-image" />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="card-title">Başlık</h2>
                                <p className="card-description">
                                    Sessizliğin ortasında doğanın nefesini hissettiğiniz bir macera sizi bekliyor.
                                </p>
                                <span className="moreButton">Devamı</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="fixBtn button-primary allBlogs">Tüm Bloglar</button>
            </div>
        </>
    )
}

{/* <div className="row">
    <div className="col-md-4">
        <div className="card">
            <a href="#" className="card-body">
                <div className="card-img">
                    <div className="imageWrapper">
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="Kart Görseli" className="card-image" />
                    </div>
                </div>
                <div className="card-content">
                    <span className="card-category">Kategori</span>
                    <h2 className="card-title">Başlık</h2>
                    <p className="card-description">
                        Sessizliğin ortasında doğanın nefesini hissettiğiniz bir macera sizi bekliyor.
                    </p>
                </div>
            </a>
            <div className="card-footer">
                <button className="card-button">Yorum Yap</button>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="card">
            <a href="#" className="card-body">
                <div className="card-img">
                    <div className="imageWrapper">
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="Kart Görseli" className="card-image" />
                    </div>
                </div>
                <div className="card-content">
                    <span className="card-category">Kategori</span>
                    <h2 className="card-title">Başlık</h2>
                    <p className="card-description">
                        Sessizliğin ortasında doğanın nefesini hissettiğiniz bir macera sizi bekliyor.
                    </p>
                </div>
            </a>
            <div className="card-footer">
                <button className="card-button">Yorum Yap</button>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="card">
            <a href="#" className="card-body">
                <div className="card-img">
                    <div className="imageWrapper">
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="Kart Görseli" className="card-image" />
                    </div>
                </div>
                <div className="card-content">
                    <span className="card-category">Kategori</span>
                    <h2 className="card-title">Başlık</h2>
                    <p className="card-description">
                        Sessizliğin ortasında doğanın nefesini hissettiğiniz bir macera sizi bekliyor.
                    </p>
                </div>
            </a>
            <div className="card-footer">
                <button className="card-button">Yorum Yap</button>
            </div>
        </div>
    </div>
</div> */}