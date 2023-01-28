import React from "react";
import styles from "./Calender.module.css";

const Calender = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=devcoding87%40gmail.com&ctz=Asia%2FKolkata"
      style={{
        border: "solid 1px #777",
        width: "100%",
        height: "600",
        frameborder: "0",
        scrolling: "no",
      }}
    ></iframe>
  );
};

export default Calender;
