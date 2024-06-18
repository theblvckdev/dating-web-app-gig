import Button from "../../../components/ui/button";
import SectionOneImage from "../../../assets/images/landing-section-1.avif";

const SectionOne = () => {
  return (
    <>
      <section className="md:py-[6rem] py-[3rem] bg-accent-0">
        <div className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3">
          <div className="flex md:flex-row flex-col-reverse gap-5 items-center">
            <div className="basis-1/2">
              <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-3xl md:tracking-[-0.4rem] md:font-bold font-black font-oswald text-secondary-0">
                BRING YOUR <br className="md:block hidden" /> BAR BACK UP{" "}
                <br className="md:block hidden" /> TO WHERE{" "}
                <br className="md:block hidden" /> IT BELONGS
              </h1>

              <p className="mt-3 text-secondary-0 font-poppins lg:text-xl text-lg">
                You deserve better, so we’ve designed great ways for{" "}
                <br className="xl:block hidden" /> you to date more and stress
                less.
              </p>

              <div className="mt-5">
                <Button
                  text="See what's new"
                  bgVariant="bg-secondary-0"
                  color="text-white"
                  hover="hover:bg-gray-800 duration-200 ease-in"
                />
              </div>
            </div>

            <div className="basis-1/2">
              <div className="w-full lg:h-[550px] h-[400px] rounded-3xl overflow-hidden">
                <img
                  src={SectionOneImage}
                  className="w-full h-full object-cover"
                  alt="black girl image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
