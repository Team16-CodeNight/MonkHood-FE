import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeLayout, SchedulerLayout } from "./components";
import TasksState from "./contexts/TasksState";

function App() {
  return (
    <div className="App">
      {/* MonkHood - Your Zen Professional Planner */}
      <TasksState>
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/user/scheduler" element={<SchedulerLayout />} />
          </Routes>
        </Router>
      </TasksState>
    </div>
  );
}

export default App;
