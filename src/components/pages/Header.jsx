const Header = () => {
  const links=[
    "Home",
    "News",
    "Articles",
    "Posts",
    "About",
    "Contact",
  ]
  return (
    <>
    <header>
       <div className="nav-container-3">
          <div className="nav-links">
              <ul>
              {
                links.map((item, index)=>{
                  return(
                    <li key={index}>
                      <a href="">{item}</a>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </div>


          <div className="header-content">
            
            <div className="image-container-1">
              <img src="https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346_640.jpg" alt="" />
              <div className="info">
                  <p><i className="ri-calendar-2-fill"></i> Aug.2022</p>
                  <p><i className="ri-user-fill"></i> Chris</p>
                  <p><i className="ri-question-answer-fill"></i> 4</p>
              </div>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Dicta, tempore!</h2>
            </div>
            
            <div className="image-container-2">
              
              <div className="image-2">
                <img src="https://cdn.pixabay.com/photo/2023/09/21/17/41/sports-8267310_640.jpg" alt="" />
                
                <div className="info">
                  <p><i className="ri-calendar-2-fill"></i> Dec.2019</p>
                  <p><i className="ri-user-fill"></i> Jeff</p>
                  <p><i className="ri-question-answer-fill"></i> 6</p>
                </div>
                  <h2>Lorem ipsum dolor sit amet.</h2>
              </div>


              <div className="image-container-3">
                
                <img src="https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_640.jpg" alt="" />
                <div className="info">
                  <p><i className="ri-calendar-2-fill"></i> Jul.2023</p>
                  <p><i className="ri-user-fill"></i> Mario</p>
                  <p><i className="ri-question-answer-fill"></i> 12</p>
                </div>
                  <h2>Lorem ipsum dolor sit amet consectetur <br /> adipisicing.</h2>
              </div>
            </div>
            
          </div>

          <marquee>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi magni optio inventore, veniam reprehenderit.</marquee>
    </header>
    </>
  )
}

export default Header