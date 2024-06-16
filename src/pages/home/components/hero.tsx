import { useEffect, useState } from "react";
import HeroImage from "../assets/images/hero.jpg";
import { Blurhash } from "react-blurhash";

const Hero = () => {
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(true);
    };
    img.src = HeroImage;
  }, []);

  return (
    <>
      <section className="h-screen w-screen grid place-items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {imageLoading ? (
            <img
              src={HeroImage}
              className="w-full h-full object-cover -z-10"
              alt="couples happy together at night"
            />
          ) : (
            <Blurhash
              hash="L59H9KEl9Y^-7%n$wuNe00#k-p9E"
              width={"100%"}
              height={"100%"}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
        </div>

        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <div className="min-w-3xl w-full flex flex-col items-center justify-center z-10">
          <h1 className="text-white text-6xl font-bold font-rubik uppercase">
            Make the next move{" "}
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
