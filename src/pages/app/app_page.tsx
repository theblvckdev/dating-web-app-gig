import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BlogReviews from "./components/blogs_reviews";
import HeroAppPage from "./components/hero";
import SectionOneAppPage from "./components/section_one_app";
import SectionTwoAppPage from "./components/section_two_app";

const AppPage = () => {
  return (
    <>
      <Navbar bgVariant="bg-white border-b border-b-secondary-0" />
      <main>
        <HeroAppPage />
        <SectionOneAppPage />
        <SectionTwoAppPage />
        <BlogReviews />
      </main>
      <Footer />
    </>
  );
};

export default AppPage;
