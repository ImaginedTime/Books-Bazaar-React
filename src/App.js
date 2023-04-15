import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BestSellers from './components/Best-sellers';
import Recommendations from './components/Recommendations';
import AboutUs from './components/About-us';
import ContactUs from './components/Contact-us';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BestSellers />
      <Recommendations />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
