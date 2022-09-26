import { InputBox } from "./shared";

const BottomSection = ({ handleInputChange, state }) => {
  return (
    <div className="bottom-section">
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Erklæring og underskrift</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} className="light-grey">
              <p>
                Det bekreftes herved at mitt ansvarsområde er utført i samsvar
                med tillatelsen og bestemmelser gitt i eller med hjemmel i plan-
                og bygningsloven. Jeg er kjent med reglene om straff og
                sanksjoner i plan- og bygningsloven kap 32, og at det kan
                medføre reaksjoner dersom det er gitt uriktige opplysninger.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <InputBox
                label="Dato"
                bordered={false}
                className="dato"
                name="Dato1"
                onChangeHandler={handleInputChange}
                value={state.Dato1}
              />
            </td>
            <td>
              <InputBox
                label="Tiltakshavers underskrift"
                bordered={false}
                className="dato"
                name="Tiltakshavers"
                onChangeHandler={handleInputChange}
                value={state.Tiltakshavers}
              />
            </td>
            <td>
              <InputBox
                label="Gjentas med blokkbokstaver"
                bordered={false}
                className="dato"
                name="Gjentas"
                onChangeHandler={handleInputChange}
                value={state.Gjentas}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BottomSection;
