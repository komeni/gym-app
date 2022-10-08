import React from "react";
import "./About.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo suscipit
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              quas laborum saepe? Cum fugit dignissimos assumenda architecto
              dolores obcaecati adipisci? Vel molestiae delectus qui cupiditate
              voluptatibus aperiam ipsum corporis, in quibusdam incidunt! Eos
              delectus, ipsa odio praesentium ipsam quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              magnam sapiente officia labore nulla hic ducimus rerum quibusdam
              asperiores eius nesciunt voluptate et placeat alias, incidunt
              repudiandae eum non veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ullam facilis a atque maiores! Modi reprehenderit qui
              recusandae mollitia voluptates.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              quas laborum saepe? Cum fugit dignissimos assumenda architecto
              dolores obcaecati adipisci? Vel molestiae delectus qui cupiditate
              voluptatibus aperiam ipsum corporis, in quibusdam incidunt! Eos
              delectus, ipsa odio praesentium ipsam quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              magnam sapiente officia labore nulla hic ducimus rerum quibusdam
              asperiores eius nesciunt voluptate et placeat alias, incidunt
              repudiandae eum non veniam.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              quas laborum saepe? Cum fugit dignissimos assumenda architecto
              dolores obcaecati adipisci? Vel molestiae delectus qui cupiditate
              voluptatibus aperiam ipsum corporis, in quibusdam incidunt! Eos
              delectus, ipsa odio praesentium ipsam quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              magnam sapiente officia labore nulla hic ducimus rerum quibusdam
              asperiores eius nesciunt voluptate et placeat alias, incidunt
              repudiandae eum non veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ullam facilis a atque maiores! Modi reprehenderit qui
              recusandae mollitia voluptates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
