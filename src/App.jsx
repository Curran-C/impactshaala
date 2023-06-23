import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import LandingPage from "./LandingPage/LandingPage";
import SignUp from "./pages/signUp/SignUp";
import CompanyDetails from "./pages/companyDetails/CompanyDetails";
import Location from "./pages/location/Location";
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/companydetails" element={<CompanyDetails />} />
        <Route path="/signup/companylocation" element={<Location />} />
        <Route path="/company/profile" element={<CompanyProfile />} />
        {/*ṇeed to add id to company/profile  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
