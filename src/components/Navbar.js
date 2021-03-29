import MobileMenu from "./MobileMenu"
import {useState} from 'react';

const Navbar = () => {

  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <div className="navbar">
      <div className='navbar-links'>
        <h1>Shortly</h1>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Resources</a>
      </div>
      <div className='navbar-buttons'>
        <p>Login</p>
        <p className='sign-up'>Sign Up</p>
      </div>
      <MobileMenu isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled} />
    </div>
  );
}
 
export default Navbar;