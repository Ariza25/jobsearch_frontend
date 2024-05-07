import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home/Home";

import UserLogin from "./pages/user/UserLogin";
import UserRegister from "./pages/user/UserRegister";
import Dashboard from "./pages/user/Dashboard";

import CompanyLogin from "./pages/company/CompanyLogin";
import CompanyRegister from "./pages/company/CompanyRegister";
import JobResume from "./pages/Job/JobResume";
import DashboardCompany from "./pages/company/DashboardCompany";
import JobDetails from "./pages/Job/JobDetails";
import EditVacancy from "./pages/company/EditVacancies";
import AllVacancies from "./pages/Home/AllVacancies";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todasasvagas" element={<AllVacancies />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/companylogin" element={<CompanyLogin />} />

          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/companydashboard/*" element={<DashboardCompany />} />
          <Route path="/companyregister" element={<CompanyRegister />} />
          <Route path="/jobresume" element={<JobResume />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/editvacancy/:id" element={<EditVacancy/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
