//import "../Button/Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;