import NavBar from "./Navbar/NavBar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Projectspage from "./pages/Projectspage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projectspage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
