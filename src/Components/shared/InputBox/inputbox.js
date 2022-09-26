import "./inputbox.css";
const InputBox = ({
  label,
  onChangeHandler,
  className,
  bordered = true,
  name,
  value = "",
}) => {
  return (
    <div
      className={`inputbox ${className ? className : ""} ${
        bordered ? "bordered" : ""
      }`}
    >
      <label>{label}</label>
      <input type="text" name={name} onChange={onChangeHandler} value={value} />
    </div>
  );
};

export default InputBox;
