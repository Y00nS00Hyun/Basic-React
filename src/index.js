import ReactDOM from "react-dom/client";

const butler = "butler";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <p>나만의 {butler.toUpperCase()} 구하기</p> //대문자 변환 메소드
  </>,
  document.getElementById("root")
);
