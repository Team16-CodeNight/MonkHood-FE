import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId:
    "177452567139-ki1g5kgbla27v98mjmv51hguiug44vtu.apps.googleusercontent.com",
  apiKey: "AIzaSyCSEIBbKV22P2xiTmI9Ozgrq5PUsSeroC4",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

export default apiCalendar;
