import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TasksState from "./contexts/TasksState";

function App() {
  return (
    <div className="App">
      {/* MonkHood - Your Zen Professional Planner */}
      <TasksState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </TasksState>
    </div>
  );
}

export default App;
