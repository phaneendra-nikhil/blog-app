
const Navbar = () => {

  return (
    <>
        <nav>
          <div className="nav-container-1">
            <div className="social">
              <button><a href="#"><i className="uil uil-github"></i></a></button>
              <button><a href="#"><i className="uil uil-linkedin"></i></a></button>
              <button><a href="#"><i className="uil uil-instagram"></i></a></button>
            </div>
            <div className="info">
              <small className="mail">tallapragadaphaneendranikhil@gmail.com</small> <i className="ri-mail-open-fill"></i>
              <small>+91 9100411666 </small><i className="ri-phone-fill"></i>
            </div>
          </div>
          <div className="nav-container-2">
            <div className="logo">
            
              <h1>Blog</h1>
            </div>
            <div className="ad-1">
              <p>720px X 90px Ad goes here</p>
            </div>
          </div>   
        </nav>
    </>
  )
}

export default Navbar