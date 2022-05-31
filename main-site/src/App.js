import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage/HomePage/Homepage';
import NavigationBar from './Pages/HomePage/NavigationBar/NavigationBar';
import ServicesPage from './Pages/ServicesPage/ServicesPage/ServicesPage';
import AboutPage from './Pages/AboutPage/AboutPage/AboutPage';
import MyOIPage from './Pages/MyOIPage/MyOIPage/MyOIPage';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage/ContactUsPage';
function App() {
  return (
    <div className="App">

      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="myOi" element={<MyOIPage />} />
          <Route path="contactUs" element={<ContactUsPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
