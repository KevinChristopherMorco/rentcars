import "typeface-poppins";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";
import NotFound from "./components/requests/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
