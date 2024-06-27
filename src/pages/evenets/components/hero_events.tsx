import { LazyLoadImage } from "react-lazy-load-image-component";
import heroImage from "../assets/images/hero_section_events.jpg";
import { Blurhash } from "react-blurhash";
import { useEffect, useState } from "react";

const HeroEvents = () => {
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(true);
    };
    img.src = heroImage;
  }, []);

  return (
    <>
      <section className="lg:h-[70vh] md:h-[50vh] h-screen w-screen flex md:flex-row flex-col-reverse mt-16">
        <div className="basis-1/2">
          {imageLoading ? (
            <LazyLoadImage
              alt="couples"
              className="h-full w-full object-cover"
              src={heroImage} // use normal <img> attributes as props
            />
          ) : (
            <Blurhash
              hash="LGHxf-~T004qm$%K%hD*4;NKxatQ"
              width={"100%"}
              height={"100%"}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
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
