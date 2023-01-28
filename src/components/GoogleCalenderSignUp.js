import React from "react";
import apiCalendar from "../GoogleCalender/google-config";

function GoogleCalenderSignUp() {
  const getAllEvents = async () => {
    apiCalendar
      .listUpcomingEvents(10)
      .then(({ result }) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = (e, name) => {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();

      getAllEvents();
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          handleSignUp(e, "sign-in");
        }}
      >
        sing-in
      </button>
      <button
        onClick={(e) => {
          handleSignUp(e, "sign-out");
        }}
      >
        sign-out
      </button>
    </>
  );
}

export default GoogleCalenderSignUp;
