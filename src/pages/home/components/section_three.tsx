import Button from "../../../components/ui/button";
import SectionThreeImage from "../../../assets/images/landing-section-3.avif";
import { Blurhash } from "react-blurhash";
import { useEffect, useState } from "react";

const SectionThree = () => {
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(true);
    };
    img.src = SectionThreeImage;
  }, []);

  return (
    <>
      <section className="md:py-[6rem] py-[3rem] bg-primary-0">
        <div className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3">
          <div className="flex md:flex-row flex-col lg:gap-20 gap-5 items-center">
            <div className="basis-1/2">
              <div className="w-full lg:h-[550px] rounded-3xl overflow-hidden">
                {imageLoading ? (
                  <img
                    src={SectionThreeImage}
                    className="w-full h-full object-cover -z-10"
                    alt="couples happy together at night"
                  />
                ) : (
                  <Blurhash
                    hash="32FODZEy?cP;"
                    width={"100%"}
                    height={"100%"}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
              </div>
            </div>

            <div className="basis-1/2">
              <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-2xl md:tracking-tighter font-bold font-oswald text-secondary-0 uppercase">
                Make The <br className="md:block hidden" /> First move
              </h1>

              <p className="md:mt-5 text-secondary-0 font-poppins lg:text-xl md:text-lg text-sm">
                {/* You deserve better, so we’ve designed great ways for{" "}
                <br className="xl:block hidden" /> you to date more and stress
                less. */}
                We’re the only app that makes dating better by putting women’s
                experiences first. Because when things are better for women,
                they’re better for everyone.
              </p>

              <div className="mt-5">
                <Button
                  text="About R4M"
                  bgVariant="bg-secondary-0"
                  linkURL="/"
                  color="text-white"
                  hover="hover:bg-gray-800 duration-200 ease-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
