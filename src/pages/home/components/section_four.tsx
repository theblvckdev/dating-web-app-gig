import Slider from "./ui/slider";

const SectionFour = () => {
  return (
    <>
      <section className="md:py-[6rem] py-[3rem] bg-accent-0">
        <div className="xl:px-0 md:px-10 px-3">
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-2xl md:tracking-tighter font-bold font-oswald text-secondary-0 max-w-6xl mx-auto uppercase">
            if it worked for them, <br /> it could work for you
          </h1>

          <div className="md:mt-16 mt-5">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
