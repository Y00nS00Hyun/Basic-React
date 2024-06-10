import ReactDOM from "react-dom/client";

const butler = "집사";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <p>나만의 {butler} 구하기</p>
  </>,
  document.getElementById("root")
);
