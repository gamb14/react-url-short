
const MobileMenu = ({isMenuToggled, setIsMenuToggled}) => {

  return (
    <>
      <div className="navbar-bars">
        <i onClick={() => setIsMenuToggled(!isMenuToggled)} className="fas fa-2x fa-bars"></i>
      </div>
      <div style={isMenuToggled ? {display: 'flex'} : {display: 'none'}}className="navbar-menu">
        <div className="navbar-menu-links">
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div className="navbar-menu-buttons">
          <p>Login</p>
          <p className='navbar-menu-btn'>Sign Up</p>
        </div>
      </div>
    </>
  );
}
 
export default MobileMenu;