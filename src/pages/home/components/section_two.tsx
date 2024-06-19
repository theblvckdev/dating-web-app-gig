import { Link } from "react-router-dom";
import { categoriesData } from "../data/categories";
import { Blurhash } from "react-blurhash";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SectionTwo = () => {
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  // const categoriesImage = categoriesData.map(data => {
  //   return data.image
  // })

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     setImageLoading(true);
  //   };
  //   img.src = categoriesImage;
  // }, [categoriesImage]);

  return (
    <>
      <section className="md:py-[6rem] py-[3rem] bg-white">
        <div className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-3xl md:tracking-tighter md:font-bold font-black font-oswald text-secondary-0">
            WE’RE NOT JUST FOR DATING
          </h1>

          <div className="mt-16">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {categoriesData.map((data, index) => {
                const { title, image, content, blurHash } = data;

                const img = new Image();
                img.onload = () => {
                  setImageLoading(true);
                };
                img.src = image;

                return (
                  <Link
                    key={index}
                    to={"/"}
                    className="group no-underline outline-none basis-1/3"
                  >
                    <div>
                      <div className="rounded-2xl bg-gray-100 h-[200px] w-full overflow-hidden">
                        {imageLoading ? (
                          <LazyLoadImage
                            alt={title}
                            height={"100%"}
                            src={image} // use normal <img> attributes as props
                            width={"100%"}
                          />
                        ) : (
                          <Blurhash
                            hash={blurHash}
                            width={"100%"}
                            height={"100%"}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                          />
                        )}
                      </div>

                      <div className="mt-5">
                        <h4 className="xl:text-4xl md:text-3xl text-3xl group-hover:underline font-poppins font-light capitalize text-secondary-0">
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
