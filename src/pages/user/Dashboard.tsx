import { Routes, Route, Link, useMatch } from "react-router-dom";
import { useLocation, Navigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

import Curriculo from "../../pages/user/Curriculo";
import EditarCurriculo from "../../pages/user/EditarCurriculo";
import LastAndIndicateJobs from "../../pages/user/LastAndIndicateJobs";
import Perfil from "../../pages/user/Perfil";

const Dashboard = () => {
  const location = useLocation();

  const matchCurriculo = useMatch("/dashboard/curriculo");
  const matchEditarCurriculo = useMatch("/dashboard/editarcurriculo");
  const matchLastAndIndicateJobs = useMatch("/dashboard/lastandindicatejobs");
  const matchPefil = useMatch("/dashboard/perfil");

  if (location.pathname === "/dashboard") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <div className="flex h-[100%]">
        <aside className="w-[30%] bg-gray-900 pb-10">
          <h2 className="text-center text-3xl text-slate-50 py-10">
            Controle do Usuário
          </h2>
          <div>
            <ul className="text-slate-50 text-md flex flex-col gap-4">
              <Link
                to="perfil"
                className={`flex items-center hover:cursor-pointer ps-6 h-[8vh] ${
                  matchPefil ? "border-s-4" : ""
                }`}
              >
                <CgProfile size={25} className="me-4" />
                Perfil
              </Link>
              <Link
                to="curriculo"
                className={`flex items-center hover:cursor-pointer ps-4 h-[8vh] ${
                  matchCurriculo ? "border-s-4" : ""
                }`}
              >
                <MdOutlineDashboardCustomize size={30} className="me-4" />
                Criar Currículo
              </Link>
              <Link
                to="editarcurriculo"
                className={`flex items-center hover:cursor-pointer ps-6 h-[8vh] ${
                  matchEditarCurriculo ? "border-s-4" : ""
                }`}
              >
                <FaEdit size={25} className="me-4" />
                Editar Currículo
              </Link>
              <Link
                to="lastandindicatejobs"
                className={`flex items-center hover:cursor-pointer ps-6 h-[8vh] ${
                  matchLastAndIndicateJobs ? "border-s-4" : ""
                }`}
              >
                <GrUserWorker size={28} className="me-4" />
                Últimas Candidaturas
              </Link>
            </ul>
          </div>
        </aside>
        <section className="w-[70%] h-[100%]">
          <Routes>
            <Route path="curriculo" element={<Curriculo />} />
            <Route path="editarcurriculo" element={<EditarCurriculo />} />
            <Route
              path="lastandindicatejobs"
              element={<LastAndIndicateJobs />}
            />
            <Route path="perfil" element={<Perfil />} />
          </Routes>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
