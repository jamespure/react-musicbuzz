import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router className="">
      <Header />
      <Routes></Routes>
    </Router>
  );
}

export default App;
