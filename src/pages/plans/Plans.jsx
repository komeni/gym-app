import React from "react";
import "./Plans.css";
import Card from "../../ui/Card";
import { plans } from "../../data";
import Header from "../../components/Header";
import PlansImage from "../../images/header_bg_4.jpg";

const Plans = () => {
  return (
    <>
      <Header title="Memebership Plans" image={PlansImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia,
        optio velit.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn ld">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
