import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserTable from "./components/UserTable";
import AboutUser from "./components/AboutUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/about-user" element={<AboutUser />} />
      </Routes>
    </div>
  );
}

export default App;
