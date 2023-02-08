import "../styles/Home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ComplanySlider from "../components/CompanySlider";
import Testimonials from '../components/Testimonials'
const Home = () => {
  return (
    <div className="Home">
      
        <Navbar />
      <Header />
      <ComplanySlider />
      <Testimonials/>
      
    </div>
  );
};

export default Home;
