import Dice from "./Dice";

// 랜덤

function Board({ name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1; //마지막 배열의 요소 갖고오기, 비어있으면 기본값인 1
  const sum = gameHistory.reduce((a, b) => a + b, 0); //a 누적값, b 현재값, 0 초기값 / reduce: 배열을 순회하면서 누적함
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{gameHistory.join(",")}</p>
    </div>
  );
}

export default Board;
