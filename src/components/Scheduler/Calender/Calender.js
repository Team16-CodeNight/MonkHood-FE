import React from "react";
import styles from "./Calender.module.css";

const Calender = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=arowpk%40gmail.com&ctz=Asia%2FKolkata&src=bmlzaHVscGF0bmkyQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAwNTA0MTM4MTYxMjk0NjY3OTYyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE0NDQ4OTkxNTQ5NDk3NDczNTk0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1MjkyODQ3NTg1ODYxMTY2OTMyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1MjI3ODY4NzQzNzY0NjQ5NjE0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEyNDk1NzcyMDcyMjczNjg0MDM5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEyMTAyOTMyNTAyODYxMzkzNzEyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAyMzM4MzM4MzQ5NDA0MzA2MDI1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTEzNjQ3MTA4MTgxMzQyNDA0NzkzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%23c26401&color=%233F51B5&color=%233F51B5&color=%233F51B5&color=%233F51B5&color=%230047a8&color=%230047a8&color=%230B8043&color=%230047a8"
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
