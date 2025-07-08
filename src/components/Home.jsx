// filepath: c:\Users\asus_\portofolio\src\components\Home.jsx
import React from 'react';
import Image from './common/Image';

function Home() {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row align-items-center justify-content-center home-content">
          <div className="col-12 col-lg-7 text-center text-lg-start content-col">
            <div className="home-text-container">
              <h3 className="subtitle">Hi, I'm</h3>
              <h1 className="main-title">Muhammad Zakariyya</h1>
              <p className="home-description">Graphic Designer & Software Engineer based in Indonesia, passionate about creating visually appealing and functional digital experiences.</p>
              <div className="mt-4 home-buttons">
                <a className="btn button me-3" href="/images/logo/FOTO.svg" download>Download CV</a>
                <a className="btn button" href="#contact">Contact Me</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center image-col">
            <div className="profile-image-container">
              <Image src="/images/logo/FOTO.svg" alt="Muhammad Zakariyya" />
            </div>
          </div>
        </div>
      </div>
        <div className="explore-spacer"></div>
      
      <a href="#projects" className="text-decoration-none arrow w-100 d-flex align-items-center flex-column">
        <div className="explore-text">Explore More</div>
        <img id="arrow" className="mt-2 bounce" src="/images/logo/arrow.svg" alt="Scroll down" />
      </a>
    </section>
  );
}

export default Home;
