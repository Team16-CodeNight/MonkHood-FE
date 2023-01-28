import React, { useEffect } from "react";
import { useUserAuth } from "../contexts/UserAuthContextProvider";

function GoogleCalenderSignUp() {
  const { apiCalendar } = useUserAuth();

  useEffect(() => {
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
    getAllEvents();
  }, []);

  //   const handleGoogleCalenderSignUp = (e, name) => {
  //     if (name === "sign-in") {
  //       apiCalendar.handleAuthClick();

  //       getAllEvents();
  //     } else if (name === "sign-out") {
  //       apiCalendar.handleSignoutClick();
  //     }
  //   };

  return <></>;
}

export default GoogleCalenderSignUp;
