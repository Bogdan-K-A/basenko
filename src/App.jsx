import { Routes, Route } from "react-router-dom";

import ThankYou from "./pages/ThankYou.jsx";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<Home />} />

      {/* Страница благодарности */}
      <Route path="/thank-you" element={<ThankYou />} />

      {/* Админ-панель для управления таймером */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
