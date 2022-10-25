import React from "react";

function Image(props) {
  return (
    <section
      id="imageType01"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>잔잔하거나 거칠거나</h2>
      <p>
        바다의 두가지 모습을 알고 계시나요? 잔잔하거나 거칠거나, 바다의 두가지
        면모
      </p>
      <div className={`img__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__tit">잔잔한 바다</h3>
          <p className="image__desc">
            잔잔한 수면 아래로 산란되어 들어오는 햇빛을 보고 있자면 마음이
            편안해 집니다. 천천히 움직이는 물살에 몸을 맡겨보세요.
          </p>
          <a className="image__btn" href="/">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__tit">거친 파도의 바다</h3>
          <p className="image__desc">
            비가 오거나 바람이 많이 부는 날이면, 바다의 물결은 거칠게
            흔들립니다. 높이 솟아올라 내리치는 역동적인 바다를 감상해 보세요.
          </p>
          <a className="image__btn" href="/">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
