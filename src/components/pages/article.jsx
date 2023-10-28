import React from "react";
import { useNavigate } from "react-router-dom";
const Article = () => {
    const navigate = useNavigate();
  const url =
    "https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_1280.jpg";
  return (
    <>
    <div className="back-btn">
        <button onClick={()=>{navigate('/')}} title="return to home">
        <p><i className="ri-home-3-line"></i> home</p>
        </button>
    </div>
      <div className="article-container">
        <div className="article-image">
          <img src={url} />
        </div>

        <div className="article">
          <div className="article-1">
            <div className="article-profile">
              <img
                src="https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg"
                alt=""
              />

              <div className="author">
                <div className="about">
                  <p>
                    <i className="ri-calendar-2-fill"></i> Sept.2021
                  </p>
                  <p>
                    <i className="ri-user-fill"></i> John Doe
                  </p>
                  <p>
                    <i className="ri-question-answer-fill"></i> 5
                  </p>
                </div>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <button className="insta-btn"><i className="ri-instagram-line"></i> instagram</button>
                <button className="facebook-btn"><i className="ri-facebook-fill"></i> Facebook</button>
                <button className="LinkedIn-btn"><i className="ri-linkedin-line"></i> LinkedIn</button>
              </div>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              sequi suscipit doloribus, veritatis laborum labore dolore.
              Perferendis, exercitationem soluta consectetur dolorum, quo
              dolorem quibusdam accusamus quos est reprehenderit odit totam quod
              nulla ipsam quidem quis alias eum eligendi atque tempora? Officiis
              explicabo officia quo fuga consequuntur harum non assumenda
              voluptate quia? Quam, totam in! Esse corrupti necessitatibus
              perspiciatis excepturi repellat qui ea voluptates harum, sed eaque
              natus optio deleniti adipisci eum nulla pariatur at! Voluptatum, a
              nisi? Et, distinctio, consectetur ipsam reprehenderit maiores quas
              eligendi cum nobis a autem praesentium officia eius, perferendis
              adipisci. Unde inventore optio labore, soluta quidem, eligendi
              impedit adipisci similique atque repudiandae porro velit libero!
              Tempora eum deserunt iusto fugiat a tempore incidunt quae beatae
              ad voluptatum. Sint ab reiciendis totam corrupti consectetur modi
              quasi distinctio eveniet eos. Cupiditate laboriosam pariatur qui
              quo officia dignissimos unde, doloribus ipsam numquam iusto
              deserunt harum fugit ab odit vel dolore odio aliquam reprehenderit
              repellat cum animi? Tempora expedita voluptatibus officiis
              incidunt est dolore saepe dolores eos, adipisci explicabo, facilis
              modi pariatur aspernatur, repellendus tempore necessitatibus!
              Minima quae magnam, accusamus sed praesentium, quas quis aperiam
              soluta id cum repellat ipsum earum, explicabo numquam? Aspernatur
              ipsum perferendis consectetur provident iure pariatur!
            </p>
            <br />
            <div className="title">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus quas cumque, exercitationem reprehenderit dolore
                libero.
              </p>
            </div>
            <br />
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              sequi suscipit doloribus, veritatis laborum labore dolore.
              Perferendis, exercitationem soluta consectetur dolorum, quo
              dolorem quibusdam accusamus quos est reprehenderit odit totam quod
              nulla ipsam quidem quis alias eum eligendi atque tempora? Officiis
              explicabo officia quo fuga consequuntur harum non assumenda
              voluptate quia? Quam, totam in! Esse corrupti necessitatibus
              perspiciatis excepturi repellat qui ea voluptates harum, sed eaque
              natus optio deleniti adipisci eum nulla pariatur at! Voluptatum, a
              nisi? Et, distinctio, consectetur ipsam reprehenderit maiores quas
              eligendi cum nobis a autem praesentium officia eius, perferendis
              adipisci. Unde inventore optio labore, soluta quidem, eligendi
              impedit adipisci similique atque repudiandae porro velit libero!
              Tempora eum deserunt iusto fugiat a tempore incidunt quae beatae
              ad voluptatum. Sint ab reiciendis totam corrupti consectetur modi
              quasi distinctio eveniet eos. Cupiditate laboriosam pariatur qui
              quo officia dignissimos unde, doloribus ipsam numquam iusto
              deserunt harum fugit ab odit vel dolore odio aliquam reprehenderit
              repellat cum animi? Tempora expedita voluptatibus officiis
              incidunt est dolore saepe dolores eos, adipisci explicabo, facilis
              modi pariatur aspernatur, repellendus tempore necessitatibus!
              Minima quae magnam, accusamus sed praesentium, quas quis aperiam
              soluta id cum repellat ipsum earum, explicabo numquam? Aspernatur
              ipsum perferendis consectetur provident iure pariatur!
            </p>
          </div>
          <div className="article-2">
            <h1>About Us</h1>
          </div>
        </div>

        <div className="similar-posts"></div>
      </div>
    </>
  );
};

export default Article;
