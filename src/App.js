import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeLayout, SchedulerLayout } from "./components";
import TasksState from "./contexts/TasksState";
import ProtectedRoute from "./ProtectedRoute";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="App">
      {/* MonkHood - Your Zen Professional Planner */}
      <TasksState>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeLayout />} />
            <Route
              exact
              path="/user/:component"
              element={
                <ProtectedRoute>
                  <SchedulerLayout />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Page404/>} />
          </Routes>
        </Router>
      </TasksState>
    </div>
  );
}

export default App;
