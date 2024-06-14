import { useState } from "react"; //state 사용하기
import Board from "./Board";
import Button from "./button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]); //결과 기록, 배열 넣기
  const [otherHistory, setOtherHistory] = useState([]); //결과 기록, 배열 넣기

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  // 처음부터 버튼 누르면 1로 바뀜
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}
export default App;
