import sectionTwoVideoCallImage from "../assets/images/vodeo call mockup.png";

const SectionTwoAppPage = () => {
  return (
    <>
      <section className="pt-[3rem] bg-white">
        <div className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3">
          <div className="flex md:flex-row flex-col-reverse gap-5 h-full items-center">
            <div className="basis-2/3 h-full">
              <img
                src={sectionTwoVideoCallImage}
                className="w-full h-full object-cover"
                alt="r4m mockup phone image"
              />
            </div>

            <div className="basis-1/2">
              <div className="p-5">
                <h4 className="text-secondary-0 font-oswald font-semibold lg:text-6xl md:text-5xl text-3xl capitalize">
                  Why It’s Better
                </h4>

                <p className="mt-4 text-gray-500 font-poppins lg:text-base text-sm">
                  Networking shouldn’t feel so hard or, worse, uncomfortable.
                  We’ve made it so you can make life-changing connections at
                  your own pace, on your own terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwoAppPage;
