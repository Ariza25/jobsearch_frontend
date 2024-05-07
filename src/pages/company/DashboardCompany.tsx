import { Routes, Route, Link, useMatch } from "react-router-dom";
import { useLocation, Navigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

import Candidates from "./Candidates";
import CandidateContact from "./CandidateContact";
import ManageVacancies from "./ManageVacancies";
import PerfilEmpresarial from "./PerfilEmpresarial";

const DashboardCompany = () => {
  const location = useLocation();

  const matchManageVacancies = useMatch("/dashboardcompany/gerenciarvagas");
  const matchCandidates = useMatch("/dashboardcompany/analisarperfil");
  const matchCandidateContact = useMatch("/dashboardcompany/contatocomocandidato");
  const matchPefilCompany = useMatch("/dashboardcompany/perfilempresarial");

  if (location.pathname === "/dashboard") {
    return <Navigate to="/dashboardcompany" replace />;
  }

  return (
    <>
      <div className="flex h-[100%]">
        <aside className="w-[30%] bg-gray-900 pb-10">
          <h2 className="text-center text-3xl text-slate-50 py-10">
            Controle Empresarial
          </h2>
          <div>
            <ul className="text-slate-50 text-md flex flex-col gap-4">
              <Link
                to="perfilempresarial"
                className={`flex items-center hover:cursor-pointer ps-6 h-[8vh] ${
                  matchPefilCompany ? "border-s-4" : ""
                }`}
              >
                <CgProfile size={25} className="me-4" />
                Perfil Empresarial
              </Link>
              <Link
                to="gerenciarvagas"
                className={`flex items-center hover:cursor-pointer ps-4 h-[8vh] ${
                  matchManageVacancies ? "border-s-4" : ""
                }`}
              >
                <MdOutlineDashboardCustomize size={30} className="me-4" />
                Gerenciar Vagas
              </Link>
              <Link
                to="analisarperfil"
                className={`flex items-center hover:cursor-pointer ps-6 h-[8vh] ${
                  matchCandidates ? "border-s-4" : ""
                }`}
              >
                <FaEdit size={25} className="me-4" />
                Analisar Currículos de Usuários
              </Link>
              <Link
                to="contatocomocandidato"
                className={`flex items-center hover:cursor-pointer ps-6 h-[8vh] ${
                  matchCandidateContact ? "border-s-4" : ""
                }`}
              >
                <GrUserWorker size={28} className="me-4" />
                Contato com o Candidato
              </Link>
            </ul>
          </div>
        </aside>
        <section className="w-[70%] h-[100%]">
          <Routes>
            <Route path="analisarperfil" element={<Candidates />} />
            <Route path="gerenciarvagas" element={<ManageVacancies />} />
            <Route
              path="contatocomocandidato"
              element={<CandidateContact />}
            />
            <Route path="perfilempresarial" element={<PerfilEmpresarial />} />
          </Routes>
        </section>
      </div>
    </>
  );
};

export default DashboardCompany;
