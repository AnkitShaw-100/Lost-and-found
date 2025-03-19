import "./App.css";
// import { app } from "../src/components/firebaseConfig";
// import LoginPage from "./components/login_page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/Profile";
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs";
import Report from "./components/Report";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} / >
        <Route path="/profile" element={<ProfilePage />} / >
        <Route path="/aboutUs" element={<AboutUs />} / >
        <Route path="/report" element ={<Report />} / >
      </Routes>
    </Router>
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
