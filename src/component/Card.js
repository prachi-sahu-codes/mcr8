import React from "react";

export const Card = ({ event }) => {
  const date = new Date(event.eventStartTime);
  const newDate = date.toDateString();
  return (
    <div className="card">
      <img src={event.eventThumbnail} alt="event pic" className="card-img" />
      <p className="card-event-type">{event.eventType} Event</p>
      <p>{newDate}</p>
      <h3 className="card-name">{event.title}</h3>
    </div>
  );
};
