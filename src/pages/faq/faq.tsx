import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Faq = () => {
  interface FaqData {
    question: string;
    answer: string;
  }

  const faqData: FaqData[] = [
    {
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    {
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    {
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    {
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];

  return (
    <>
      <Navbar bgVariant="bg-white border-b border-b-secondary-0" />

      <section className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3 mt-24 pb-5 min-h-screen">
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-2xl md:tracking-tighter font-bold font-oswald text-secondary-0">
          Frequently Asked Questions
        </h1>

        <div className="mt-10">
          <div className="flex md:flex-row md:gap-10 gap-5 flex-col">
            <div className="basis-1/2">
              <p className="text-md text-gray-400 font-poppins">
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <Link
                  className="font-semibold text-blue-500 no-underline inline"
                  to={"/"}
                >
                  customer support team
                </Link>
                .
              </p>
            </div>
            <div className="basis-1/2">
              <div className="flex flex-col space-y-10 font-poppins">
                {faqData.map((data, index) => {
                  const { answer, question } = data;

                  return (
                    <div key={index}>
                      <h4 className="text-gray-900 text-lg font-semibold">
                        {question}
                      </h4>

                      <p className="mt-2 text-base text-gray-500">{answer}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faq;
