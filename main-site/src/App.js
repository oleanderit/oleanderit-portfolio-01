import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import HomePage from "./Pages/HomePage/HomePage";
import NavigationBar from "./Pages/HomePage/NavigationBar/NavigationBar";
import MyOIPage from "./Pages/MyOIPage/MyOIPage/MyOIPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage/ServicesPage";
import Footer from "./Pages/Shared/Footer/Footer";
import AllProjectPage from "./Pages/AllProjectPage/AllProjectPage/AllProjectPage";
import TramsAndConditionpage from "./Pages/TramsAndConditionpage/TramsAndConditionpage/TramsAndConditionpage";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy/PrivacyPolicy";
import AffiliateProgramme from "./Pages/AffiliateProgramme/AffiliateProgramme/AffiliateProgramme";
import WebDesignPage from "./Pages/ServicesPage/SingleServicesPage/WebDesignPage/WebDesignPage";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="myOi" element={<MyOIPage />} /> */}
        <Route path="contactUs" element={<ContactUsPage />} />
        <Route path="projects" element={<AllProjectPage />} />
        <Route path="trams-condition" element={<TramsAndConditionpage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="affiliateProgramme" element={<AffiliateProgramme />} />
        <Route path="becomeAgent" element={<AffiliateProgramme />} />
        <Route path="web-designPage" element={<WebDesignPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
