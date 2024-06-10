import ReactDOM from "react-dom/client";

const butler = "집사";
const name = "세미";
const butlerName = butler + name;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <p>나만의 {butler + name} 구하기</p>
    <p>나만의 {butlerName} 구하기</p>
  </>,
  document.getElementById("root")
);
