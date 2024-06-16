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
              hash="LQF=HlV?NM-o?^V@RpSiKkR*WVW="
              width={"100%"}
              height={"100%"}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
        </div>

        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
        <div className="min-w-3xl w-full flex flex-col items-center justify-center z-10">
          <h1 className="text-primary-0 text-center lg:text-7xl md:text-6xl text-4xl font-bold font-oswald uppercase">
            Make the next move{" "}
          </h1>

          <div className="my-5 mx-auto xl:w-[13%] w-[20%] md:block hidden">
            <img src={QrCode} className="w-full h-full" alt="R4M qrcode" />
          </div>
          <h3 className="text-primary-0 md:mt-0 mt-3 text-xl font-poppins text-center">
            It's better on the app
          </h3>
          <div className="mt-3">
            <Button text="Download now" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
