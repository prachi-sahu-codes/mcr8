import React from "react";
import { useData } from "../context/DataContext";
import { Card } from "../component/Card";
import { useNavigate } from "react-router";

export const Home = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex-between page-title">
        <h1>Meetup Events</h1>
        <select
          className="select-input"
          value={state.selectTerm}
          onChange={(e) =>
            dispatch({ type: "SELECT_EVENT_TYPE", payload: e.target.value })
          }
        >
          <option disabled>Select Event Type</option>
          <option value="Both">Both</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>
      </div>
      <ul className="card-list">
        {state.meetupData.map((event) => (
          <li
            key={event.id}
            className="list-style"
            onClick={() => navigate(`/detail/${event.id}`)}
          >
            <Card event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
};
