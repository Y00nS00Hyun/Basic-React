//import 로 이미지 불러오기
import diceBlue01 from "./assets/dice-blue-1.svg";
import diceRed01 from "./assets/dice-red-1.svg";

//함수는 대문자로 시작
function Dice(props) {
  const diceImg = props.color === 'red' ? diceRed01 : diceBlue01;
  return <img src={diceImg} alt="주사위" />;
}

//export 로 이미지 내보내기
export default Dice;