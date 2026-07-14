import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ManualHome } from "./pages/ManualHome";
import { ManualSectionPage } from "./pages/ManualSection";
import { CategoryPage } from "./pages/Category";
import { NotePage } from "./pages/Note";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manual" element={<ManualHome />} />
        <Route path="/manual/:doc/:id" element={<ManualSectionPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/notes/:slug" element={<NotePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
