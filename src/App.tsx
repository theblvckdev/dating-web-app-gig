import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import AppPage from "./pages/app/app_page";
import Events from "./pages/evenets/events";
import CommunityGuidelines from "./pages/community_guide/community_guidelines";
import PrivacyPolicy from "./pages/privacy_policy/privacey_policy";
import TermsCondition from "./pages/terms_condition/terms_condition";
import Faq from "./pages/faq/faq";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsCondition />} />
          <Route
            path="/community-guidelines"
            element={<CommunityGuidelines />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
