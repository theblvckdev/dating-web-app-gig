// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { sliderData } from "../../data/slider_data";
import { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";
import { Navigation, Pagination } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Slider = () => {
  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const prevRef = useRef<null>(null);
  const nextRef = useRef<null>(null);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      grabCursor={false}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-3xl h-full pb-5"
    >
      {sliderData.map((data, index) => {
        const { content, heading, image, blurHash } = data;

        const img = new Image();
        img.onload = () => {
          setImageLoading(true);
        };
        img.src = image;

        return (
          <SwiperSlide key={index}>
            <Link to={"/"} className="no-underline group">
              <div className="flex md:flex-row flex-col mx-auto max-w-6xl items-center bg-white lg:gap-7 md:gap-5 gap-2 rounded-3xl shadow-lg overflow-hidden">
                <div className="basis-1/2">
                  <div className="lg:h-[400px] h-[300px] w-full bg-gray-100 overflow-hidden">
                    {imageLoading ? (
                      <LazyLoadImage
                        alt={heading}
                        className="object-cover h-full w-full"
                        src={image} // use normal <img> attributes as props
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
                </div>

                <div className="basis-1/2 p-5">
                  <h3 className="lg:text-4xl md:text-3xl text-2xl group-hover:underline capitalize font-poppins text-secondary-0">
                    {heading}
                  </h3>

                  <p className="mt-3 capitalize lg:text-lg md:text-sm text-base font-poppins text-secondary-0">
                    {content}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}

      <div
        ref={prevRef}
        className="absolute z-10 top-[50%] lg:left-10 md:left-2 left-1 lg:h-[50px] mdh-[40px] h-[50px] rounded-full lg:w-[50px] md:w-[40px] w-[50px] bg-secondary-0 -translate-y-[50%] text-white grid place-items-center cursor-pointer"
      >
        <IoArrowBack className="lg:text-xl md:text-lg text-xl" />
      </div>

      <div
        ref={nextRef}
        className="absolute z-10 top-[50%] lg:right-10 md:right-2 right-1 lg:h-[50px] md:h-[40px] h-[50px] rounded-full lg:w-[50px] md:w-[40px] w-[50px] bg-secondary-0 -translate-y-[50%] text-white grid place-items-center cursor-pointer"
      >
        <IoArrowForward className="lg:text-xl md:text-lg text-xl" />
      </div>
    </Swiper>
  );
};

export default Slider;
