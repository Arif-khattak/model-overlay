import { useState } from "react";
import "./App.css";
import AcceptOffer from "./components/AcceptOffer";
import ShowOffer from "./components/ShowOffer";

function App() {
  const [acceptOffer, setAcceptOffer] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  const handleOffer = () => {
    setAcceptOffer(true);
  };
  const handleClose = () => {
    setAcceptOffer(false);
  };
  const handleAccept = () => {
    setOfferAccepted(true);
  };
  const handleOutClick = (e) => {
    if (e.target.className === "modal") {
      handleClose();
    }
  };

  return (
    <>
      {acceptOffer ? (
        <AcceptOffer
          handleClose={handleClose}
          handleAccept={handleAccept}
          offerAccepted={offerAccepted}
          handleOutClick={handleOutClick}
        ></AcceptOffer>
      ) : (
        <ShowOffer handleOffer={handleOffer}></ShowOffer>
      )}
    </>
  );
}

export default App;
