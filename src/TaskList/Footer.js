function Footer() {
  return (
    <div className = "footer fixed-bottom">
      <div className="footer-button badge rounded-pill border-light border border-1 fs-5" onClick={()=> window.open("https://www.linkedin.com/in/abhisheksaraff/", "_blank")}><img src="https://i.pinimg.com/736x/6b/ab/30/6bab3017350ca04c6fa05569672bd31e.jpg" alt="linkedin logo"/></div>
      <div className="footer-button badge rounded-pill border-light border border-1 fs-5" onClick={()=> window.open("https://github.com/abhisheksaraff", "_blank")}><img src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg" alt="github logo"></img></div>
    </div>
  )
};

export default Footer;
