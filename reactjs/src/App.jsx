import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./pages/weather/Weather";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
