import { ReactElement } from "react";
import HeartSVG from "../assets/svg/about-us-1.svg";
import WalkingSVG from "../assets/svg/about-us-2.svg";
import MailSVG from "../assets/svg/about-us-3.svg";
import AboutCard from "./about_card";

interface CardDataTypes {
  title: string;
  icon: ReactElement;
  content: string;
}

const cardData: CardDataTypes[] = [
  {
    title: "Why R4M Matters",
    icon: (
      <img
        src={HeartSVG}
        className="w-full h-full object-cover"
        alt="heart svg illustration"
      />
    ),
    content:
      "Healthy relationships are central to living a positive, productive life. R4M is designed to help you feel empowered while you make those connections, whether you’re dating, looking for friends, or growing your professional network.",
  },

  {
    title: "How R4M Works",
    icon: (
      <img
        src={WalkingSVG}
        className="w-full h-full object-cover"
        alt="walking svg illustration"
      />
    ),
    content:
      "On R4M, women set the tone by making the first move or by setting an Opening Move for matches to reply to. Shifting old-fashioned power dynamics and encouraging equality from the start.",
  },

  {
    title: "What R4M Values",
    icon: (
      <img
        src={MailSVG}
        className="w-full h-full object-cover"
        alt="mail svg illustration"
      />
    ),
    content:
      "We champion integrity, kindness, equality, confidence, and respect during all stages of any relationship. We don’t just welcome, we celebrate every orientation – whether you’re here to find love or simply find fun.",
  },
];

const AboutCompoenent = () => {
  return (
    <>
      <section className="h-full md:py-[6rem] py-[3rem] bg-primary-0">
        <div className="max-w-6xl mx-auto xl:px-0 lg:px-10 md:px-10 px-3">
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-2xl md:tracking-tighter font-bold font-oswald text-secondary-0 uppercase">
            About Us
          </h1>

          <div className="md:mt-10 mt-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {cardData.map((data, index) => {
                const { content, icon, title } = data;

                return (
                  <AboutCard
                    content={content}
                    key={index}
                    icon={icon}
                    title={title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompoenent;
