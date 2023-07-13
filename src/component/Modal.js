import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

export const Modal = ({ setShowModal, setIsPaid, findEvent }) => {
  const [inputDetails, setInputDetails] = useState({ name: "", email: "" });
  const clickhandler = () => {
    if (inputDetails.name && inputDetails.email) {
      setIsPaid(true);
      setShowModal(false);
    } else {
      alert("Please fill all details");
    }
  };
  return (
    <div className="modal-bg">
      <div className="modal">
        <MdOutlineCancel
          className="modal-cancel"
          onClick={() => setShowModal(false)}
        />
        <h2 className="speaker-content padding-bottom">Complete Your RSVP</h2>
        <p className="speaker-content padding-bottom text-gray">
          Fill in your personal information.
        </p>
        <p className="speaker-content">Name:</p>
        <input
          type="text"
          onChange={(e) =>
            setInputDetails(() => ({ ...inputDetails, name: e.target.value }))
          }
          className="padding-bottom"
        />
        <p className="speaker-content">Email:</p>
        <input
          type="email"
          onChange={(e) =>
            setInputDetails(() => ({ ...inputDetails, email: e.target.value }))
          }
          className="padding-bottom"
        />
        {findEvent?.isPaid && (
          <p className="speaker-content padding-bottom text-gray">
            * You have to make payment at the venue
          </p>
        )}
        <button
          onClick={() => clickhandler()}
          className="button-style clickable-button-style"
        >
          RSVP
        </button>
      </div>
    </div>
  );
};
