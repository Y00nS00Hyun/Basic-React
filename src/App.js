import { useState } from "react"; //state 사용하기
import Dice from "./Dice";
import Button from "./button";

// 랜덤
function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1); // [state값, 세터 함수], 1로 초기화
  const [sum, setSum] = useState(0); //총점
  const [gameHistory, setGameHistory] = useState([]); //결과 기록, 배열 넣기

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum); //총점
    setGameHistory([nextNum, ...gameHistory]); //결과 기록, spread 쓰기
  };

  // 처음부터 버튼 누르면 1로 바뀜
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="red" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(",")}</p>
      </div>
    </div>
  );
}

export default App;
