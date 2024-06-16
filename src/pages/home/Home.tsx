import Navbar from "../../components/ui/navbar";
import "./assets/style/home.scss";
import Hero from "./components/hero";

const Home = () => {
  return (
    <>
      <Navbar bgVariant="bg-white" />
      <main className="home">
        <Hero />
      </main>
    </>
  );
};

export default Home;
