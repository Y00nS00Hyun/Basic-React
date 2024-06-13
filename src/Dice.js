//import 로 이미지 불러오기
import diceBlue01 from "./assets/dice-blue-1.svg";
import diceBlue02 from "./assets/dice-blue-2.svg";
import diceBlue03 from "./assets/dice-blue-3.svg";
import diceBlue04 from "./assets/dice-blue-4.svg";
import diceBlue05 from "./assets/dice-blue-5.svg";
import diceBlue06 from "./assets/dice-blue-6.svg";
import diceRed01 from "./assets/dice-red-1.svg";
import diceRed02 from "./assets/dice-red-2.svg";
import diceRed03 from "./assets/dice-red-3.svg";
import diceRed04 from "./assets/dice-red-4.svg";
import diceRed05 from "./assets/dice-red-5.svg";
import diceRed06 from "./assets/dice-red-6.svg";

//
const DICE_IMAGES = {
  blue: [
    diceBlue01,
    diceBlue02,
    diceBlue03,
    diceBlue04,
    diceBlue05,
    diceBlue06,
  ],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};

// 기본값(입력 값이 없을 때 나타낼 값)을 설정하려면 함수 파라미터에서 직접 설정해야함
function Dice({ color = "blue", num = 1 }) {
  // 중괄호
  const src = DICE_IMAGES[color][num - 1]; // DICE_IMAGES 객체에서 color와 num을 사용해 주사위 이미지를 찾음
  //1.blue, red 배열 중 하나로 들어가서 2.arr[i]=num-1번째꺼를 가져옴
  const alt = `${color} ${num}`; // 이미지의 대체 텍스트를 색상과 번호로 설정
  return <img src={src} alt={alt} />; // 주사위 이미지를 렌더링
}

//export 로 이미지 내보내기
export default Dice;
