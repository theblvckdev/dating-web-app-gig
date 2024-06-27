import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import EventsNear from "./components/events_near";
import HeroEvents from "./components/hero_events";
import SectionOneEvents from "./components/section_one_events";
import StartChat from "./components/start_chat";

const Events = () => {
  return (
    <>
      <Navbar bgVariant="bg-white border-b border-b-secondary-0" />
      <main className="overflow-x-hidden">
        <HeroEvents />
        <SectionOneEvents />
        <EventsNear />
        <StartChat />
      </main>
      <Footer />
    </>
  );
};

export default Events;
