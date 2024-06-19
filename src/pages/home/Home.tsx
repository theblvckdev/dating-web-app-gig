import Navbar from "../../components/ui/navbar";
import "./assets/style/home.scss";
import Hero from "./components/hero";
import SectionFour from "./components/section_four";
import SectionOne from "./components/section_one";
import SectionThree from "./components/section_three";
import SectionTwo from "./components/section_two";

const Home = () => {
  return (
    <>
      <Navbar bgVariant="bg-white" />
      <main className="home overflow-x-hidden">
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
    </>
  );
};

export default Home;
