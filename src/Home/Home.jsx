import React, { Fragment } from "react";
import "./Home.scss";
import image from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <Fragment>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={image} alt="pic2" />
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus delectus facilis beatae error voluptas provident
            asperiores hic, quibusdam molestiae.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div className="who-we-r">
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            dolor modi mollitia inventore deleniti recusandae minus enim porro
            eaque, repellat nisi? Id error perferendis laborum eum quod totam
            quis aspernatur? Nobis hic facilis totam culpa odio est. Excepturi
            inventore architecto laboriosam asperiores veniam.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div className="brands">
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
