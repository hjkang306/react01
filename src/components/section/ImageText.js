import React from "react";

function ImageText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">가깝고도 먼 바다</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>이미지 텍스트 유형01</span>
          <h3>
            가깝고도 먼<br />
            바다
          </h3>
          <p>
            바다를 멀리서 볼 때와 가까이서 볼 때의 차이는 아주 색다른 경험이
            됩니다.
          </p>
          <ul>
            <li>
              <a href="/">가까이서 본 파도</a>
            </li>
            <li>
              <a href="/">멀리서 본 파도</a>
            </li>
            <li>
              <a href="/">가까이서 본 해변</a>
            </li>
            <li>
              <a href="/">멀리서 본 해변</a>
            </li>
            <li>
              <a href="/">물 속에서의 바다</a>
            </li>
            <li>
              <a href="/">잔잔한 수평선</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">근접 사진 보기</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            원거리 사진 보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
