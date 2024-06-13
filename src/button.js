// children: 바뀌지 않는 button 내용으로 사용됨, onclick으로는 안씀

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
