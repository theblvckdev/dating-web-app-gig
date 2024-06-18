import Navbar from "../../components/ui/navbar";
import "./assets/style/home.scss";
import Hero from "./components/hero";
import SectionOne from "./components/section_one";

const Home = () => {
  return (
    <>
      <Navbar bgVariant="bg-white" />
      <main className="home overflow-x-hidden">
        <Hero />
        <SectionOne />
      </main>
    </>
  );
};

export default Home;
