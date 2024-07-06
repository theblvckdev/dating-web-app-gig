import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import AppPage from "./pages/app/app_page";
import Events from "./pages/evenets/events";
import CommunityGuidelines from "./pages/community_guide/community_guidelines";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/events" element={<Events />} />
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
