import ReactDOM from "react-dom/client";

const butler = "집사";
const name = "세미";
const butlerName = butler + name;
const imageUrl =
  "https://lh3.googleusercontent.com/c1uC2qvKKdCdCcO-SWZqukyNF6GLHqyxYCrQSdIhcBtlVxR4KYgU37UWtrEyi5P10meBRL5zEY0NoIcqmA";
function handleClick() {
  alert("어서오세요");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <p>나만의 {butlerName} 구하기</p>
    <img src={imageUrl} alt="제품사진" />
    <button onClick={handleClick}>모집 중</button>
  </>,
  document.getElementById("root")
);
