import Navbar from "../../components/ui/navbar";
import "./assets/style/home.scss";
import Hero from "./components/hero";
import SectionOne from "./components/section_one";
import SectionTwo from "./components/section_two";

const Home = () => {
  return (
    <>
      <Navbar bgVariant="bg-white" />
      <main className="home overflow-x-hidden">
        <Hero />
        <SectionOne />
        <SectionTwo />
      </main>
    </>
  );
};

export default Home;
