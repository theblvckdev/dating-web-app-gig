import { Link } from "react-router-dom";
import Button from "../../../components/ui/button";

const HeroAppPage = () => {
  return (
    <>
      <section className="h-screen w-full flex items-center justify-center bg-accent-0">
        <div className="max-w-2xl md:mx-0 mx-3 bg-white py-14 px-10 rounded-md shadow w-full">
          <div className="text-center">
            <h1 className="md:text-5xl text-3xl font-semibold font-oswald text-secondary-0">
              Make the first move
            </h1>

            <p className="md:my-7 my-4 md:text-base md:font-normal text-sm font-thin text-gray-400 font-poppins">
              Start meeting new people in your area! If you already have an
              account, sign in to use Bumble on the web.
            </p>

            <div className="flex gap-3 items-center w-fit mx-auto">
              <Link to={"/"} className="outline-none no-underline">
                <Button
                  bgVariant="bg-secondary-0 ring-2 ring-secondary-0"
                  text="Join Now"
                  color="text-white"
                  hover="hover:bg-gray-800 duration-200 ease-in"
                />
              </Link>

              <Link to={"/"} className="outline-none no-underline">
                <Button
                  bgVariant="bg-transparen ring-2 ring-secondary-0"
                  text="Sign In"
                  color="text-secondary-0 hover:text-white"
                  hover="hover:bg-secondary-0 duration-200 ease-in"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAppPage;
