export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      if (action.payload === "") {
        return {
          ...state,
          meetupData: state.meetupAllData,
          searchterm: "",
          selectTerm: "Both",
        };
      } else {
        const findData = state.meetupAllData.filter((event) =>
          event?.title.toLowerCase().includes(action.payload)
        );

        return {
          ...state,
          meetupData: [...findData],
          searchterm: action.payload,
          selectTerm: "Both",
        };
      }

    case "SELECT_EVENT_TYPE":
      const findevents = state.meetupAllData.filter(
        (event) => event.eventType === action.payload
      );
      return {
        ...state,
        meetupData: findevents,
        searchterm: "",
        selectTerm: action.payload,
      };

    case "RSVP":
      return { ...state };

    default:
      return state;
  }
};
