import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderTitleInfo = {
  subtit: "Journey",
  tit: "The Blue Sea",
  desc: "보고 있으면 마음이 편안해지는 수평선과 푸른 물결을 감상해 볼까요?",
  link1: "/",
  link2: "/",
};

function Slider(props) {
  return (
    <section id="sliderType" class={`slider__wrap ${props.fonts}`}>
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
              <span>{sliderTitleInfo.subtit}</span>
              <h3>{sliderTitleInfo.tit}</h3>
              <p>{sliderTitleInfo.desc}</p>
              <div class="btn">
                <a href={`${sliderTitleInfo.link1}`}>자세히 보기</a>
                <a href={`${sliderTitleInfo.link2}`} class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>{sliderTitleInfo.subtit}</span>
              <h3>{sliderTitleInfo.tit}</h3>
              <p>{sliderTitleInfo.desc}</p>
              <div class="btn">
                <a href={`${sliderTitleInfo.link1}`}>자세히 보기</a>
                <a href={`${sliderTitleInfo.link2}`} class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>{sliderTitleInfo.subtit}</span>
              <h3>{sliderTitleInfo.tit}</h3>
              <p>{sliderTitleInfo.desc}</p>
              <div class="btn">
                <a href={`${sliderTitleInfo.link1}`}>자세히 보기</a>
                <a href={`${sliderTitleInfo.link2}`} class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
