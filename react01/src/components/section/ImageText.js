import React from "react";

const imageTextTitleInfo = {
  tit: "가깝고도 먼 바다",
  desc: "바다를 멀리서 볼 때와 가까이서 볼 때의 차이는 아주 색다른 경험이 됩니다.",
};

const imageTextInfo = [
  {
    desc: "가까이서 본 파도",
    link: "/",
  },
  {
    desc: "멀리서 본 파도",
    link: "/",
  },
  {
    desc: "가까이서 본 해변",
    link: "/",
  },
  {
    desc: "멀리서 본 해변",
    link: "/",
  },
  {
    desc: "물 속에서의 바다",
    link: "/",
  },
  {
    desc: "잔잔한 수평선",
    link: "/",
  },
];

const imageTextBtn = [
  {
    img: "img1",
    desc: "근접 사진 보기",
    link: "/",
    btnClass: "",
  },
  {
    img: "img2",
    desc: "원거리 사진 보기",
    link: "/",
    btnClass: "blue",
  },
];

const ImageTextList = ({ desc, link }) => {
  return (
    <li>
      <a href={`${link}`}>{desc}</a>
    </li>
  );
};

const ImageTextBtn = ({ img, desc, link, btnClass }) => {
  return (
    <div className={`imgText__img ${img}`}>
      <a href={`${link}`} className={`${btnClass}`}>
        {desc}
      </a>
    </div>
  );
};

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
          <h3>{imageTextTitleInfo.tit}</h3>
          <p>{imageTextTitleInfo.desc}</p>
          <ul>
            {imageTextInfo.map((info) => (
              <ImageTextList
                key={info.desc}
                desc={info.desc}
                link={info.link}
              />
            ))}
          </ul>
        </div>
        {imageTextBtn.map((info) => (
          <ImageTextBtn
            key={info.img}
            img={info.img}
            desc={info.desc}
            link={info.link}
            btnClass={info.btnClass}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageText;
