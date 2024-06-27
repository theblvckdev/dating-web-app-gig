import heroImage from "../assets/images/hero_section_events.jpg";

const HeroEvents = () => {
  return (
    <>
      <section className="lg:h-[70vh] md:h-[50vh] h-screen w-screen flex md:flex-row flex-col-reverse mt-16">
        <div className="basis-1/2">
          <img
            src={heroImage}
            className="w-full h-full object-cover"
            alt="couples"
          />
        </div>
        <div className="basis-1/2 bg-accent-0 flex items-center h-full justify-center">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl md:tracking-tighter font-bold font-oswald text-secondary-0 uppercase text-center">
            Meet up, <br /> chat and <br /> make moves <br /> in person
          </h1>
        </div>
      </section>
    </>
  );
};

export default HeroEvents;
