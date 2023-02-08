import '../styles/Navbar.scss'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <div className="Navbar">
    <div className="container forNavbar">
    <div className="light">

    </div>
    <div className="logo">
      <Link to='/'><span>Mono</span>Fi</Link>
      
    </div>
    <div className="Links">
      
      <Link>Product</Link>
      <Link>Pricing</Link>
      <Link>About</Link>
      <button>Get Started</button>
    </div>
      </div>
  </div>;
};
export default Navbar;
