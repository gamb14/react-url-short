const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Shortly</h1>
      <div className='footer-links-container'>
        <div className='features'>
          <div className='features-heading'>Features</div>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className='resources'>
        <div className='features-heading'>Resources</div>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className='company'>
          <div className='features-heading'>Company</div>
            <p>About</p>
            <p>Our team</p>
            <p>Carrers</p>
            <p>Contact</p>
          </div>
      </div>

      <div className='footer-social-media'>
        <img src="./images/icon-facebook.svg" alt="fb" />
        <img src="./images/icon-twitter.svg" alt="tw" />
        <img src="./images/icon-pinterest.svg" alt="pi" />
        <img src="./images/icon-instagram.svg" alt="insta" />
      </div>
    </div>
  );
}
 
export default Footer;