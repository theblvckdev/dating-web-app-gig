import Navbar from "../../components/navbar";
import SectionOneImage from "./assets/images/about-hero.avif";
import { Blurhash } from "react-blurhash";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import AboutCompoenent from "./components/about_component";

const About = () => {
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(true);
    };
    img.src = SectionOneImage;
  }, []);

  return (
    <>
      <Navbar bgVariant="bg-white" />
      <main>
        <section className="h-full md:py-[6rem] py-[3rem] bg-accent-0 mt-16 flex items-center justify-center">
          <div className="max-w-6xl mx-auto xl:px-0 lg:px-10 md:px-10 px-3">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-2xl md:tracking-tighter font-bold font-oswald text-secondary-0 text-center uppercase">
              THE HOME OF MAKE THE FIRST MOVE™
            </h1>

            <p className="md:my-10 my-5 lg:text-xl md:text-base text-sm font-poppins text-secondary-0 text-center">
              Here, kindness is sexy, you being you is perfect, and women come
              first. Always.
            </p>

            <div className="w-full lg:h-[500px] h-[300px] rounded-3xl overflow-hidden">
              {imageLoading ? (
                <img
                  src={SectionOneImage}
                  className="w-full h-full object-cover -z-10"
                  alt="couples happy together at night"
                />
              ) : (
                <Blurhash
                  hash="LEJQN3~A000g9FIpWG-Q0Mxs^*TK"
                  width={"100%"}
                  height={"100%"}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              )}
            </div>
          </div>
        </section>
      </main>
      <AboutCompoenent />
      <Footer />
    </>
  );
};

export default About;
