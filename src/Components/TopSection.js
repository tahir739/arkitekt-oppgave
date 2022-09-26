import { InputBox } from "./shared";

const TopSection = ({ handleInputChange, state }) => {
  return (
    <table className="top-section">
      <thead>
        <tr>
          <th colSpan={3}>Erklæringen gjelder</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2} className="light-grey">
            <strong> Eiendom/ byggested</strong>
          </td>
          <td>
            <InputBox
              label="Gnr"
              name="Gnr"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Gnr}
            />
            <InputBox
              label="Bnr"
              name="Bnr"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Bnr}
            />
            <InputBox
              label="Festenr"
              name="Festenr"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Festenr}
            />
            <InputBox
              label="Seksjonsnr"
              name="Seksjonsnr"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Seksjonsnr}
            />
          </td>
          <td>
            <InputBox
              label="Bygningsnr"
              name="Bygningsnr"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Bygningsnr}
            />
            <InputBox
              label="Bolignr"
              name="Bolignr"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Bolignr}
            />
            <InputBox
              label="Kommune"
              name="Kommune"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Kommune}
            />
          </td>
        </tr>
        <tr>
          <td>
            <InputBox
              label="Adresse"
              name="Adresse"
              className="Adresse"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Adresse}
            />
          </td>
          <td>
            <InputBox
              label="Postnr"
              name="Postnr"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Postnr}
            />
            <InputBox
              label="Poststed"
              name="Poststed"
              bordered={false}
              onChangeHandler={handleInputChange}
              value={state.Poststed}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TopSection;
