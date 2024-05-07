// Home.tsx

import WhatsApp from "../../components/Whatsapp";
import ScrollToTop from "../../components/ScrollToTop";
import Header from "../../components/Header"
import Mobile from "../../components/Mobile";
import FastJobs from "../../components/FastJobs";
import FastSearch from "../../components/FastSearch";
import FastCurriculo from "../../components/FastCurriculo";

const Home = () => {

  return (
    <div className="w-[100%] min-h-screen">
      <WhatsApp/>
      <ScrollToTop/>
      <Header />
      <FastSearch/>
      <FastCurriculo/>
      <FastJobs/>
      <Mobile/>
    </div>
  );
};

export default Home;