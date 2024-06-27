import Navbar from "../../components/navbar";
import HeroAppPage from "./components/hero";

const AppPage = () => {
  return (
    <>
      <Navbar bgVariant="bg-white" />
      <main>
        <HeroAppPage />
      </main>
    </>
  );
};

export default AppPage;
