import Dice from "./Dice";
import Button from "./button";

function Apple() {
  return (
    <div>
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={6} />
    </div>
  );
}

export default Apple;
