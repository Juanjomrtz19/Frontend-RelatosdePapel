const CheckInput = ({ options, onChange, values }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>Generos</label>
      {options.map((option) => (
        <div key={option} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={values.includes(option)}
            value={option}
            onChange={onChange}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckInput;
