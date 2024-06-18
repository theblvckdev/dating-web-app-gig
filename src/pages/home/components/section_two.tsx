import { Link } from "react-router-dom";
import { categoriesData } from "../data/categories";

const SectionTwo = () => {
  return (
    <>
      <section className="md:py-[6rem] py-[3rem] bg-white">
        <div className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-3xl md:tracking-[-0.4rem] md:font-bold font-black font-oswald text-secondary-0">
            WE’RE NOT JUST FOR DATING
          </h1>

          <div className="mt-16">
            <div className="flex gap-8">
              {categoriesData.map((data, index) => {
                const { title, image, content } = data;

                return (
                  <Link
                    key={index}
                    to={"/"}
                    className="group no-underline outline-none basis-1/3"
                  >
                    <div>
                      <div className="rounded-2xl h-[200px] w-full overflow-hidden">
                        <img
                          src={image}
                          className="w-full h-full object-cover"
                          alt={title}
                        />
                      </div>

                      <div className="mt-5">
                        <h4 className="text-4xl group-hover:underline font-poppins font-thin capitalize text-secondary-0">
                          {title}
                        </h4>

                        <p className="mt-3 text-base font-poppins text-secondary-0">
                          {content}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
