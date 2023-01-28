import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeLayout, SchedulerLayout } from "./components";

function App() {
  return (
    <div className="App">
      {/* MonkHood - Your Zen Professional Planner */}
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/user/scheduler" element={<SchedulerLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
