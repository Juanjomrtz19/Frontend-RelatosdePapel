const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-secondary-800 cursor-pointer text-papel rounded-lg px-4 py-2 hover:bg-secondary-700 disabled:opacity-50 transition-all duration-200"
    >
      {label}
    </button>
  );
};

export default Button;
