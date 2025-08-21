import { Routes, Route } from "react-router-dom";

import ThankYou from "./pages/ThankYou.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<Home />} />

      {/* Страница благодарности */}
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
