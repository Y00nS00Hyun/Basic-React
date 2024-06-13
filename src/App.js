import { useState } from "react"; //state 사용하기
import Dice from "./Dice";
import Button from "./button";

// 랜덤
function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1); // [state값, 세터 함수]

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
  };

  // 초기화 (주사위 1)
  const handleClearClick = () => {
    setNum(1);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  );
}

export default App;
