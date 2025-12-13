import { Routes, Route, } from "react-router-dom";
import AllPhotosPage from "./pages/AllPhotosPage";
import PhotoDetailsPage from "./pages/PhotoDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AllPhotosPage />} />
      <Route path="/photos/:id" element={<PhotoDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;