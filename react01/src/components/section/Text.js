import React from "react";

const textTitleInfo = {
  tit: "바다의 좋은 점은 무엇일까요",
  desc: "",
};

const textCardInfo = [
  {
    textClass: "t1",
    tit: "심신의 안정",
    desc: "바다를 보고 있으면 마음에 평화가 찾아옵니다. 심신의 안정을 원하는 여러분에게 바다 근처를 걷는 산책을 추천합니다.",
    link: "/",
  },
  {
    textClass: "t2",
    tit: "아름다운 풍경",
    desc: "바다의 아름다운 풍경은 많은 사람들이 알고 있습니다. 시시각각 변하는 모습과 박력있게 몰아치는 파도는 보고 있어도 계속 보고싶어 집니다.",
    link: "/",
  },
  {
    textClass: "t3",
    tit: "맛있는 수산자원",
    desc: "생선 좋아하시나요? 저는 생선을 좋아하는데요, 민물고기보다 특히 바다에서 나는 생선을 좋아하는 편입니다. 바다는 생선, 조개, 해조류 등 다양한 먹거리를 제공해줍니다.",
    link: "/",
  },
  {
    textClass: "t4",
    tit: "동물들의 터전",
    desc: "바다에는 정말 많은 생물이 살고 있습니다. 고래, 해파리, 생선, 불가사리 등등 말 그대로 물에 살고 있는 생물부터, 갈매기와 같이 바다 근처에 터를 잡는 생물들 까지요!",
    link: "/",
  },
  {
    textClass: "t5",
    tit: "빛과 소금",
    desc: "바다의 색이 파란색인 이유를 아시나요? 저는 모르는데요, 빛의 흡수와 반사와 관련되지 않았을까 싶습니다. 중요한건, 바다가 우리에게 소금을 준다는 것이죠!",
    link: "/",
  },
  {
    textClass: "t6",
    tit: "바다 그 자체",
    desc: "바다는 그 자체로도 존재 가치가 있습니다. 저는 진화론을 믿는 사람이기 때문에, 바다가 없었다면 우리는 존재하지 않았을 수도 있겠다는 생각이 듭니다.",
    link: "/",
  },
];

const TextCardText = ({ textClass, tit, desc, link }) => {
  return (
    <div class={`text ${textClass}`}>
      <h3 className="text__title">{tit}</h3>
      <p className="text__desc">{desc}</p>
      <a className="text__btn" href={`${link}`}>
        더보기
      </a>
    </div>
  );
};

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <span>텍스트 유형01</span>
      <h2 className="mb70">{textTitleInfo.tit}</h2>
      <div className={`text__inner ${props.attr[2]}`}>
        {textCardInfo.map((info) => (
          <TextCardText
            key={info.textClass}
            textClass={info.textClass}
            tit={info.tit}
            desc={info.desc}
            link={info.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Text;
