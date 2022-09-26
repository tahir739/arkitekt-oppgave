import { useEffect, useState } from "react";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

const MainForm = () => {
  const [state, setState] = useState({
    Gnr: "",
    Bnr: "",
    Festenr: "",
    Seksjonsnr: "",
    Bygningsnr: "",
    Bolignr: "",
    Kommune: "",
    Adresse: "",
    Postnr: "",
    Poststed: "",
    Dato: "",
    Dato1: "",
    Tiltakshavers: "",
    Gjentas: "",
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
    <div className="sit-content">
      <br />
      <TopSection handleInputChange={handleInputChange} state={state} />
      <br />
      <MiddleSection handleInputChange={handleInputChange} state={state} />
      <br />
      <BottomSection handleInputChange={handleInputChange} state={state} />
    </div>
  );
};

export default MainForm;
