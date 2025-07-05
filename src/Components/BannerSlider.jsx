import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules

import { Navigation } from "swiper/modules";

export default function BannerSlider(){
    return(
        <>
            <Swiper navigation={true} modules={[Navigation]} className="bannerSlider">
                <SwiperSlide>
                    <div className="desc">
                        <div className="title">
                            Blog Başlık
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
                    </div>
                    <div className="bannerImg">
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <div className="title">
                            Blog Başlık
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
                    </div>
                    <div className="bannerImg">
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="desc">
                        <div className="title">
                            Blog Başlık
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
                    </div>
                    <div className="bannerImg">
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}