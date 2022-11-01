import React from "react";

const bannerTitleInfo = {
  tit: "코딩 척척학사",
  desc: "더 다양한 코딩 공부는 티스토리에 작성되어 있습니다.",
  link: "https://hjkang306.tistory.com",
  linkTit: "티스토리 페이지로 이동",
  subtit: "배너 유형01",
};

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerTitleInfo.tit}</h3>
        <p className="desc">
          {bannerTitleInfo.desc}
          <a
            href={`${bannerTitleInfo.link}`}
            title={`${bannerTitleInfo.linkTit}`}
          >
            {bannerTitleInfo.link}
          </a>
        </p>
        <span className="small">{bannerTitleInfo.subtit}</span>
      </div>
    </section>
  );
}

export default Banner;
