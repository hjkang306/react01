import React from "react";

const cardTitleInfo = {
  tit: "하루에 세 번 보는 바다",
  desc: "아침, 오후, 밤에 보는 바다의 각기 다른 모습입니다.",
};

const imageTextInfo = [
  {
    img: "card_bg01",
    alt: "아침 바다 이미지",
    tit: "아침 바다 사진",
    desc: "아침의 바다는 물안개와 아침공기, 그리고 떠오르는 해의 노란 빛이 오묘한 분위기를 만들어냅니다. 아침 바다만의 독특한 분위기를 즐겨봅시다.",
    link: "/",
  },
  {
    img: "card_bg02",
    alt: "오후 바다 이미지",
    tit: "오후 바다 사진",
    desc: "오후의 바다는 슬슬 저물기 시작하는 해가 하늘의 색과 바다의 색을 더욱 짙게 만들어줍니다. 따뜻하게 데워진 공기와 따뜻한 색감으로 물든 바다를 즐겨봅시다.",
    link: "/",
  },
  {
    img: "card_bg03",
    alt: "해질녘 바다 이미지",
    tit: "해질녘 바다 사진",
    desc: "해질녘의 바다는 저무는 해의 강렬한 붉은 빛이 바다와 하늘을 물들입니다. 눈이 부신듯 점점 어두워지는 하늘과 함께 다채롭게 빛나는 바다를 즐겨봅시다.",
    link: "/",
  },
];

const CardText = ({ img, alt, tit, desc, link }) => {
  return (
    <article className="card">
      <figure className="card__header">
        <img src={`assets/img/${img}.jpg`} alt={`${alt}`} />
      </figure>
      <div className="card__body">
        <h3 className="tit">{tit}</h3>
        <p className="desc">{desc}</p>
        <a className="btn" href={`${link}`}>
          더 자세히 보기
          <span aria-hidden="true">
            <svg
              width="65"
              height="8"
              viewBox="0 0 65 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                fill="black"
              />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
};

function Card(props) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>{cardTitleInfo.tit}</h2>
      <p>{cardTitleInfo.desc}</p>
      <div className={`card__inner ${props.attr[2]}`}>
        {imageTextInfo.map((info) => (
          <CardText
            key={info.img}
            img={info.img}
            alt={info.alt}
            tit={info.tit}
            desc={info.desc}
            link={info.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
