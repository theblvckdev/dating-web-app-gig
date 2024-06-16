// import { useEffect } from "react";
// import HeroImage from "../assets/images/hero.jpg";
// import { Blurhash } from "react-blurhash";
// import QrCode from "../assets/images/qr_code.png";
// import Button from "../../../components/ui/button";

const Hero = () => {
  // const [imageLoading, setImageLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     setImageLoading(true);
  //   };
  //   img.src = HeroImage;
  // }, []);

  return (
    <>
      <section className="h-screen w-screen flex items-center relative overflow-hidden bg-white">
        {/* <div className="absolute top-0 left-0 w-full h-full">
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
        </div> */}

        <div className="mx-auto w-full max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex items-center">
            <div className="basis-2/3">
              <h3 className="text-3xl font-poppins">Find your soul mate</h3>
              <h1 className="text-8xl font-poppins font-bold text-primary-0">
                From your comfort zone
              </h1>

              <p className="mt-3 text-gray-500 text-xl max-w-md font-poppins">
                We built a platform for people to find their love without being
                judged
              </p>
            </div>
            <div className="basis-1/3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
