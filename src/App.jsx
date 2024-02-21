import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreatePlan from "./pages/CreatePlan";
import ReadyPlan from "./pages/ReadyPlan";
import Layout from "./pages/layout";
import PlanList from "./pages/PlanList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<PlanList />} />
            <Route path="/create-plan" element={<CreatePlan />} />
            <Route path="/plan/:id" element={<ReadyPlan />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
