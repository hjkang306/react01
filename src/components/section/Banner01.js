import React from "react";

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">코딩 척척학사</h3>
        <p className="desc">
          더 다양한 코딩 공부는 티스토리에 작성되어 있습니다.
          <a
            href="https://hjkang306.tistory.com"
            title="티스토리 페이지로 이동"
          >
            https://hjkang306.tistory.com
          </a>
        </p>
        <span className="small">배너 유형01</span>
      </div>
    </section>
  );
}

export default Banner;
