import React from "react";

function ShowOffer({ handleOffer }) {
  return (
    <div className="show-offer">
      <button onClick={handleOffer}>Show Offer</button>
    </div>
  );
}

export default ShowOffer;
