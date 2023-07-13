import React, { useState } from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";

export const EventDetail = () => {
  const { id } = useParams();
  const { state } = useData();
  const [isPaid, setIsPaid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const findEvent = state?.meetupData.find((event) => event?.id === id);
  return (
    <div className="flex">
      <div className="flex-content-1">
        <h1 className="card-name padding-bottom">{findEvent?.title}</h1>
        <p>Hosted By:</p>
        <h4 className="card-name">{findEvent?.hostedBy}</h4>
        <img
          src={findEvent?.eventThumbnail}
          alt="event pic"
          className="detail-img"
        />
        <h2 className="card-name padding-bottom">Details:</h2>
        <p className="padding-bottom">{findEvent?.eventDescription}</p>
        <h2 className="card-name padding-bottom">Additional Information:</h2>
        <p className="padding-bottom">
          <strong className="card-name ">Dress Code:</strong>
          <span>{findEvent.additionalInformation?.dressCode}</span>
        </p>
        <p className="padding-bottom">
          <strong className="card-name">Age Restrictions:</strong>
          <span>{findEvent?.additionalInformation?.ageRestrictions}</span>
        </p>
        <h2 className="card-name padding-bottom">Event Tags:</h2>
        <ul>
          {findEvent?.eventTags?.map((tag, index) => (
            <li key={index} className="button-style">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-info">
        <h2 className=" card-name">Speakers:({findEvent?.speakers.length})</h2>
        <ul className="speaker-cards">
          {" "}
          {findEvent?.speakers.map(({ name, image, designation }, index) => (
            <li key={index} className="speaker-card">
              <img src={image} alt="speaker pic" className="speaker-img" />
              <h4 className="speaker-content card-name">{name}</h4>
              <p className="speaker-content">{designation}</p>
            </li>
          ))}
        </ul>
        {isPaid ? (
          <button className="button-style">Already RSVPed</button>
        ) : (
          <button className="button-style" onClick={() => setShowModal(true)}>
            RSVP
          </button>
        )}
      </div>
    </div>
  );
};
