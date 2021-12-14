import "./Button.scss";
const Button = ({ title, children,className }) => {
  return (
    <button className={`btn ${className}`}>
      {children}
      {title}
    </button>
  );
};

export default Button;
