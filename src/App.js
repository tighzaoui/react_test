import { Container } from "./app.style";
import HeadSection from "./components/HeadSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <HeadSection />
        <Routes>
          <Route path="/" />
          <Route path="/Shop" />
          <Route path="/Contact" />
          <Route path="/About" />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
