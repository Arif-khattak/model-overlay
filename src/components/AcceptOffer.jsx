import React from "react";

function AcceptOffer({
  handleClose,
  handleAccept,
  offerAccepted,
  handleOutClick,
}) {
  return (
    <>
      {offerAccepted ? (
        <div className="offer-accepted">
          <h3>Offer Accepted!</h3>
        </div>
      ) : (
        <div className="modal" onClick={handleOutClick}>
          <div className="model-content">
            <button onClick={handleClose} className="close-btn">
              +
            </button>
            <div className="content">
              <p>
                click the bellow button to <br /> accept amazing offer!
              </p>
            </div>

            <button onClick={handleAccept} className="accept-btn">
              Accept Offer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AcceptOffer;
