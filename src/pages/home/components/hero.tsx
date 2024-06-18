import { useEffect, useState } from "react";
import HeroImage from "../assets/images/hero.jpg";
import { Blurhash } from "react-blurhash";
import QrCode from "../assets/images/qr_code.png";
import Button from "../../../components/ui/button";

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
      <section className="h-screen w-screen flex items-center justify-center flex-col relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full">
          {imageLoading ? (
            <img
              src={HeroImage}
              className="w-full h-full object-cover -z-10"
              alt="couples happy together at night"
            />
          ) : (
            <Blurhash
              hash="L,JR8C%Mogof~pxubIa}tRWWa}fk"
              width={"100%"}
              height={"100%"}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
        </div>

        {/* image overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

        {/* hero text */}
        <h1 className="lg:text-7xl md:text-6xl text-4xl font-oswald text-primary-0 font-bold uppercase z-10">
          MAKE THE NEXT MOVE
        </h1>

        <div className="h-[170px] w-[170px] md:block hidden my-5 overflow-hidden z-10">
          <img
            src={QrCode}
            className="w-full h-full object-cover rounded-md"
            alt="r4m qr_code"
          />
        </div>

        <p className="font-poppins md:mt-0 mt-3 text-primary-0 text-xl z-10">
          It's better on the app.
        </p>
        <div className="z-10 mt-3">
          <Button
            text="Download now"
            bgVariant="bg-white"
            color="text-gray-900"
            hover="hover:bg-gray-100 duration-200 ease-in"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
