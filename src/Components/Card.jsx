export default function Card() {
    return (
        <>
            <div className="cards">
                <div className="row">
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
                </div>
            </div>
        </>
    )
}