import "../styles/Home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ComplanySlider from "../components/CompanySlider";
import Testimonials from '../components/Testimonials'
import MailBox from "../components/MailBox";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="Home">
      
      <Navbar />
      <Header />
      <ComplanySlider />
      <Testimonials />
      <MailBox />
      <Footer/>
      
    </div>
  );
};

export default Home;
