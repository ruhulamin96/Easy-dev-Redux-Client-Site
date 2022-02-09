import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
function Review() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Item 1</SwiperSlide>
            <SwiperSlide>Item 2</SwiperSlide>
            <SwiperSlide>Item 3</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Review;
