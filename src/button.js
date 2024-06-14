import "./Button.css";

function Button({ children, onClick, color = "blue", className = " " }) {
  const classNamesSoohyun = `Button ${color} ${className}`;
  return (
    <button className={classNamesSoohyun} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
