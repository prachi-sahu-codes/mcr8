import React from "react";
import { MdOutlineCancel } from "react-icons/md";

export const Modal = ({ setShowModal, setIsPaid }) => {
  const clickhandler = () => {
    setIsPaid(true);
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
        <input type="text" />
        <p>Email:</p>
        <input type="email" />
        <button onClick={() => clickhandler()}>RSVP</button>
      </div>
    </div>
  );
};
