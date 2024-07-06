import sectionOneMobileImage from "../assets/images/phone mockup.png";

const SectionOneAppPage = () => {
  return (
    <>
      <section className="md:py-[6rem] py-[3rem] bg-white">
        <div className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3">
          <div className="flex md:flex-row flex-col gap-5 h-full items-center">
            <div className="basis-1/2">
              <div className="p-5">
                <h4 className="text-secondary-0 font-oswald font-semibold lg:text-6xl md:text-5xl text-3xl capitalize">
                  How to use it
                </h4>

                <p className="mt-4 text-gray-500 font-poppins lg:text-base text-sm">
                  Today, most people find their next job through their network.
                  We created Bumble Bizz so professionals can connect with each
                  other, share, and learn.
                </p>
              </div>
            </div>
            <div className="basis-2/3 h-full">
              <img
                src={sectionOneMobileImage}
                className="w-full h-full object-cover"
                alt="r4m mockup phone image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOneAppPage;
