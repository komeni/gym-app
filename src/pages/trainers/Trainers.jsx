import React from "react";
import "./Trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainer" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        perspiciatis culpa est deserunt hic. Ab!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
