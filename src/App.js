import { useState } from "react"; //state 사용하기
import Board from "./Board";
import Button from "./button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1); // [state값, 세터 함수], 1로 초기화
  const [sum, setSum] = useState(0); //총점
  const [gameHistory, setGameHistory] = useState([]); //결과 기록, 배열 넣기

  const [otherNum, setOtherNum] = useState(1); // [state값, 세터 함수], 1로 초기화
  const [otherSum, setOtherSum] = useState(0); //총점
  const [otherGameHistory, setOtherGameHistory] = useState([]); //결과 기록, 배열 넣기

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);

    setNum(nextNum);
    setSum(sum + nextNum); //총점
    setGameHistory([nextNum, ...gameHistory]); //결과 기록, spread 쓰기

    setOtherNum(nextNum);
    setOtherSum(sum + nextNum); //총점
    setOtherGameHistory([nextNum, ...gameHistory]); //결과 기록, spread 쓰기
  };

  // 처음부터 버튼 누르면 1로 바뀜
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);

    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board
          name="나"
          color="blue"
          num={num}
          sum={sum}
          gameHistory={gameHistory}
        />
        <Board
          name="상대"
          color="red"
          num={otherNum}
          sum={otherSum}
          gameHistory={otherGameHistory}
        />
      </div>
    </div>
  );
}
export default App;
