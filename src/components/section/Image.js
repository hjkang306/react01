import React from "react";

const imageTitleInfo = {
  tit: "잔잔하거나 거칠거나",
  desc: "바다의 두가지 모습을 알고 계시나요? 잔잔하거나 거칠거나, 바다의 두가지 면모",
};

const imageInfo = [
  {
    img: "img1",
    tit: "거친 파도의 바다",
    desc: "비가 오거나 바람이 많이 부는 날이면, 바다의 물결은 거칠게 흔들립니다. 높이 솟아올라 내리치는 역동적인 바다를 감상해 보세요.",
    btnLink: "/",
  },
  {
    img: "img2",
    tit: "거친 파도의 바다",
    desc: "비가 오거나 바람이 많이 부는 날이면, 바다의 물결은 거칠게 흔들립니다. 높이 솟아올라 내리치는 역동적인 바다를 감상해 보세요.",
    btnLink: "/",
  },
];

const ImageArticle = ({ img, tit, desc, link }) => {
  return (
    <article className={`image ${img}`}>
      <h3 className="image__tit">{tit}</h3>
      <p className="image__desc">{desc}</p>
      <a className="image__btn" href={`${link}`}>
        자세히 보기
      </a>
    </article>
  );
};

function Image(props) {
  return (
    <section
      id="imageType01"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>{imageTitleInfo.tit}</h2>
      <p>{imageTitleInfo.desc}</p>
      <div className={`img__inner ${props.attr[2]}`}>
        {imageInfo.map((info) => (
          <ImageArticle
            key={info.num}
            img={info.img}
            tit={info.name}
            desc={info.desc}
            link={info.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
