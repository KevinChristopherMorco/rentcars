import "typeface-poppins";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
