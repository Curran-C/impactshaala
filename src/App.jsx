import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import LandingPage from "./LandingPage/LandingPage";
import SignUp from "./pages/signUp/SignUp";
import CompanyDetails from "./pages/companyDetails/CompanyDetails";
import Location from "./pages/location/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/companydetails" element={<CompanyDetails />} />
        <Route path="/signup/companylocation" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
