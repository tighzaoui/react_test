import { Container } from "./app.style";
import HeadSection from "./components/HeadSection";
import HomePage from "./components/Home_Page/Home";
import ShopPage from "./components/Shop_Page/Shop";
import ContactPage from "./components/Contact_Page/Contact";
import AboutPage from "./components/About_Page/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <HeadSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
