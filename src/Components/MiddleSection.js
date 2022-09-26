import { InputBox } from "./shared";

const MiddleSection = ({ handleInputChange, state }) => {
  return (
    <div className="middle-section">
      <div className="text light-grey">
        <strong>Personlig ansvarsrett som selvbygger gitt</strong>
      </div>
      <InputBox
        label="Dato"
        bordered={false}
        className="dato with-height"
        name="Dato"
        onChangeHandler={handleInputChange}
        value={state.Dato}
      />
    </div>
  );
};

export default MiddleSection;
