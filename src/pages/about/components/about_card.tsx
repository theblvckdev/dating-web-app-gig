import { ReactElement } from "react";

interface ComponentPropTypes {
  icon: ReactElement;
  title: string;
  content: string;
}

const AboutCard = ({ icon, title, content }: ComponentPropTypes) => {
  return (
    <>
      <div>
        <div className="h-[230px] w-full overflow-hidden rounded-2xl bg-accent-0 flex items-center">
          {icon}
        </div>
        <div className="mt-5">
          <h4 className="xl:text-4xl md:text-3xl text-2xl group-hover:underline font-poppins font-light capitalize text-secondary-0">
            {title}
          </h4>

          <p className="mt-3 md:text-base text-sm font-poppins text-secondary-0">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
