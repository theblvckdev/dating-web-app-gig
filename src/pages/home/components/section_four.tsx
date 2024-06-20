import Slider from "./ui/slider";

const SectionFour = () => {
  return (
    <>
      <section className="md:py-[6rem] py-[3rem] bg-accent-0">
        <div className="xl:px-0 md:px-10 px-3">
          <h1 className="xl:text-8xl mx-auto max-w-6xl lg:text-7xl md:text-6xl text-3xl md:tracking-tighter md:font-bold font-black font-oswald text-secondary-0 uppercase">
            if it worked for them, <br /> it could work for you
          </h1>

          <div className="mt-16">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
