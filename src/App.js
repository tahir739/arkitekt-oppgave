import MainForm from "./Components/Form";
import "./App.css";
import { InputBox } from "./Components/shared";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({
    municipality: "",
    Prosjektnr: "",
    Attachment: "",
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <section className="site-content">
        <header>
          <div className="row-flex">
            <div className="title-section">
              <div className="row-flex">
                <InputBox
                  label="Kommunens saksnr"
                  name="municipality"
                  onChangeHandler={handleInputChange}
                  value={state.municipality}
                />
                <InputBox
                  label="Prosjektnr"
                  name="Prosjektnr"
                  onChangeHandler={handleInputChange}
                  value={state.Prosjektnr}
                />
                <InputBox
                  label="Vedlegg"
                  name="Attachment"
                  onChangeHandler={handleInputChange}
                  value={state.Attachment}
                />
              </div>
              <div className="row">
                <div className="row">
                  <h1>Egenerklæring for selvbygger</h1>
                </div>
                <div className="row">
                  <p>SAK10 kapittel 12 og § 6-8</p>
                  <p>
                    Erklæringen leveres til ansvarlig søker etter at
                    selvbyggeren er ferdig med sine arbeider
                  </p>
                </div>
              </div>
            </div>
            <div className="logo">
              <img src="logo.png" width={"200px"} />
            </div>
          </div>
        </header>
        <MainForm />
      </section>
      <footer>
        <div>
          <p>
            <strong>
              Blankett 5187 Bokmål © Utgitt av Direktoratet for byggkvalitet
              &nbsp;
            </strong>
            {new Date().toLocaleDateString().replaceAll("/", ".")}
          </p>
          <p>Side 1 av 1</p>
        </div>
      </footer>
    </>
  );
}

export default App;
