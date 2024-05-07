import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import QR from "../images/QR.png"

const Mobile = () => {
  return (
    <>
      <div className=" bg-slate-50 shadow-lg py-10 px-10 xs:pb-20">
        <div className="xs:mx-3 lg:flex lg:mx-10">
          <div>
            <h2 className="mb-5 text-3xl mt-8 font-bold text-gray-900">
              Você já conhece nosso App?
            </h2>
            <p className="text-gray-800 font-semibold">           
                O app da Job Search torna sua experiência mais fácil e rápida, 
                <br/>ajudando nossos clientes a terem acesso prático a diversas empresas de todo país.
                Canditate-se ilimitadamente e receba notificações sobre as últimas vagas anunciadas de acordo com seu perfil.
            </p>
          </div>
          <div className="text-white flex flex-row items-center xs:mt-4 xs:ms-[7%] lg:ms-[10%]"><img src={QR} width={250}/></div>
        </div>
        <small className="mb-4 lg:pt-10 text-white flex justify-center">
          Disponível para Android e IOS
        </small>
        <div className="flex justify-center gap-6">
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="flex rounded px-4 pb-2 pt-2.5 leading-normal text-slate-50 hover:text-white bg-gray-600 hover:bg-gray-500 font-semibold"
          >

            <FaGooglePlay size={25} className="me-2" />
            Download
          </button>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="flex rounded px-4 pb-2 pt-2.5 text-slate-50 hover:text-white bg-gray-700 hover:bg-gray-800 font-semibold"
          >
            {" "}
            <FaAppStoreIos size={27} className="me-2" />
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Mobile;