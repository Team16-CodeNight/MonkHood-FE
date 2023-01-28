import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeLayout, SchedulerLayout } from "./components";
import TasksState from "./contexts/TasksState";
import ProtectedRoute from "./ProtectedRoute";

const page404 = () => {
  return <>Page Not Found!</>;
};

function App() {
  return (
    <div className="App">
      {/* MonkHood - Your Zen Professional Planner */}
      <TasksState>
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route
              path="/user/:component"
              element={
                <ProtectedRoute>
                  <SchedulerLayout />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={page404} />
          </Routes>
        </Router>
      </TasksState>
    </div>
  );
}

export default App;
