import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

export const Modal = ({ setShowModal, setIsPaid }) => {
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
        <h3>Complete Your RSVP</h3>
        <p>Fill in your personal information.</p>
        <p>Name:</p>
        <input
          type="text"
          onChange={(e) =>
            setInputDetails(() => ({ ...inputDetails, name: e.target.value }))
          }
        />
        <p>Email:</p>
        <input
          type="email"
          onChange={(e) =>
            setInputDetails(() => ({ ...inputDetails, email: e.target.value }))
          }
        />
        <button onClick={() => clickhandler()}>RSVP</button>
      </div>
    </div>
  );
};
