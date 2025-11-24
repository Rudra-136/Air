import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Inbox from "../pages/Inbox";
import Tickets from "../pages/Tickets";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
