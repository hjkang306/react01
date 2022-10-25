import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <>
      <div className="slider__innner">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="desc">
              <span>Journey</span>
              <h3>The Blue Sea</h3>
              <p>
                보고 있으면 마음이 편안해지는 수평선과
                <br />
                푸른 물결을 감상해 볼까요?
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>Journey</span>
              <h3>The Blue Sea</h3>
              <p>
                보고 있으면 마음이 편안해지는 수평선과
                <br />
                푸른 물결을 감상해 볼까요?
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>Journey</span>
              <h3>The Blue Sea</h3>
              <p>
                보고 있으면 마음이 편안해지는 수평선과
                <br />
                푸른 물결을 감상해 볼까요?
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
