// App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom"; // only import Routes & Route
import Footer from "./Components/CoreLayoutPages/Footer";
import NavBar from "./Components/CoreLayoutPages/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import ProjectDetails from "./Components/ProjectPage/ProjectDetails";
import SkillPage from "./Components/SkillPage/SkillPage";
import AboutMePage from "./Components/AboutMePage/AboutMePage";
import ContactUsPage from "./Components/ContactUsPage/ContactUsPage";
import CallToAction from "./Components/CoreLayoutPages/CallToAction";
import ProjectList from "./Components/ProjectPage/ProjectList";
import ScrollToTop from "./Components/CoreLayoutPages/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<ProjectList/>} />
        <Route path="/skill" element={<SkillPage />} />
        <Route
          path="/projects/:id"
          element={
            <ProjectDetails/>
          }
        />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
      <CallToAction/>
      <Footer />
    </>
  );
}

export default App;
