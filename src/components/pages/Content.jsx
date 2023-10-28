import { useNavigate } from "react-router-dom"
const Content = () => {
  const navigate = useNavigate();
  const ar = [
    {"title":"Lorem ipsum dolor sit amet.",
    "url":"https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_640.jpg",
    "date":"Sept.2021",
    "name":"Adam Evans",
    "comments":"3",
    "message":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {"title":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore facilis",
    "url":"https://cdn.pixabay.com/photo/2023/09/30/14/17/ocean-8285752_640.jpg",
    "date":"June.2019",
    "name":"Yo Fei",
    "comments":"3",
    "message":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum quos voluptates quia libero earum corrupti!",
  },
  {"title":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, optio.",
  "url":"https://cdn.pixabay.com/photo/2023/09/22/11/10/lisbon-8268841_640.jpg",
  "date":"July.2023",
  "name":"Chris",
  "comments":"8",
  "message":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum quos voluptates quia libero earum corrupti!",
  },
{"title":"Lorem ipsum dolor sit amet consectetur.",
"url":"https://cdn.pixabay.com/photo/2023/09/17/11/08/dahlias-8258327_640.jpg",
"date":"Sept.2018",
"name":"Joseph",
"comments":"5",
"message":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum quos voluptates quia libero earum corrupti!",
},
{"title":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore facilis",
"url":"https://cdn.pixabay.com/photo/2023/09/29/07/52/mountains-8283189_640.jpg",
"date":"Feb.2013",
"name":"Mario",
"comments":"4",
"message":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum quos voluptates quia libero earum corrupti!",
},
]

  const images=[
    {
      "url":"https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177_1280.jpg"
    },
    {
      "url":"https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_640.jpg",
    },
    {
      "url":"https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_640.jpg",
    },
    {
      "url":"https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_640.jpg",
    },
    {
      "url":"https://cdn.pixabay.com/photo/2016/06/25/12/48/go-pro-1478810_640.jpg",
    },
    {
      "url":"https://cdn.pixabay.com/photo/2018/08/29/22/52/woman-3640935_640.jpg",
    },
    {
      "url":"https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_640.jpg",
    },
    {
      "url":"https://cdn.pixabay.com/photo/2019/06/01/22/41/river-4245261_640.jpg",
    },
  ]

  
  return (
    <>
      <div className="content-container">
        
        <div className="container-1">
        
        <div className="sub-container-1">
         <h3>New Arrivals</h3>
          {ar.map((item)=>
            <div className="text-1" onClick={()=>{navigate('/article')}}>
            <div className="content-image">
              <img src={item.url} alt=""/>
            </div>
            <div className="content-text">
              <h2>{item.title}</h2>
            <div className="info">
              <p><i className="ri-calendar-2-fill"></i> {item.date}</p>
              <p><i className="ri-user-fill"></i> {item.name}</p>
              <p><i className="ri-question-answer-fill"></i> {item.comments}</p>
            </div>
              <p  className="message">{item.message}</p>
            </div>
          </div>
          )}
        </div>


        <div className="sub-container-2">
          <div className="ad-2">
            <p> <br />
              870px X 200px <br />Ad goes Here
            </p>
          </div>
        </div>
          
        <div className="sub-container-3">
          
        </div>  

        </div>
        




        {/*******************************************************************************container-2********************************************************************************************************/}
        
        
        <div className="container-2">
          <h3>Editor's Choice</h3>
          <div className="container-2-image">
            <img src="https://cdn.pixabay.com/photo/2023/09/22/11/10/lisbon-8268841_640.jpg" alt="" />
          </div>
          <div className="container-2-image">
            <img src="https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_640.jpg" alt="" />
          </div>
          <div className="container-2-image">
            <img src="https://cdn.pixabay.com/photo/2023/08/30/13/13/el-chalten-8223303_1280.jpg" alt="" />
          </div>
          <div className="container-2-image">
            <img src="https://cdn.pixabay.com/photo/2023/10/02/16/09/bike-8289452_640.jpg" alt="" />
          </div>

          <div className="ad-3">
            <p>300px X 200px <br />Ad Goes Here</p>
          </div>

          <div className="subscribe">
            <h3>Join Our NewsLetter</h3>
            <form action="">
              <input type="text" placeholder="enter mail" required />
              <button><a href="#">Subscribe</a></button>
            </form>
          </div>

          <div className="network">
            <h3>Network</h3>
            <p className="facebook"><i className="uil uil-facebook"></i> Facebook</p>
            <p className="instagram"><i className="uil uil-instagram"></i> Instagram</p>
            <p className="bing"><i className="uil uil-linkedin"></i> LinkedIn</p>
            <p className="github"><i className="uil uil-github"></i> Github</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content