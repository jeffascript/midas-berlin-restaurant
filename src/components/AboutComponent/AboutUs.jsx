import React, { useEffect } from "react";
import { Row, Container } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container style={{ padding: "7em 0" }}>
      <Row>
        <div className="col-12 mt-3 mb-4">
          <Container>
            <div data-aos="fade-up">
              <h1 className="text-center mx-auto sub-header">Who are We ?</h1>
              <div className="header-divider"></div>
            </div>
          </Container>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div data-aos="zoom-in-up">
            <p className="text-justify">
              Peter &amp; Dirk Fridl have been running the Midas for over 10
              years. The Midas Restaurant is one of the first restaurants to be
              located in the then rather gray Moabit. The menu is small but
              varied: our kitchen creates a new selection of
              German-international delicacies every day, classic, without any
              frills. Midas stands for the modern metropolitan kitchen of
              Berlin. Cosmopolitan and regional, high quality and carefree.
              Highly rated in the Moabit district. 
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div data-aos="zoom-in-right">
            <p className="text-justify">
              The Midas is located in Berlin-Mitte and is barrier-free. For 4
              years in the Moabit and already a permanent institution: The
              Midas! Behind the high glass facades you can look out over the
              Spree and let yourself be pampered by top chef Holger Zurbrüg and
              his team. Peter is the co-founder of the Japanese-Italian kitchen
              style, which he crowned by winning the Risotto World Championship
              title in Spain in 2009 and in 2011 he was able to bring the Vice
              World Champion title on olive oil from France to Berlin.
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default AboutUs;
