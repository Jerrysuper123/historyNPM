import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Start from "./Pages/Start";
import Upload from "./Pages/Upload";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
