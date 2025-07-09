import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules

import { Navigation, Pagination } from "swiper/modules";

export default function BannerSlider({ postList }){
    return(
        <>
            <Swiper navigation={false} pagination={{ clickable:true }} modules={[Navigation, Pagination]} className="bannerSlider">
                {postList.map((post) => (

                    <SwiperSlide>
                        <div key={post.id} className="desc">
                            <span className="icon-pen-write"></span>
                            <div>
                                <div className="title">
                                    {post.title}
                                </div>
                                <p>{post.brief}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}