import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Container style={{ padding: "7em 0 0 0" }}>
        <Row>
          <div className="col-12 mt-3 mb-4">
            <Container>
              <div data-aos="fade-up">
                <h1 className="text-center mx-auto sub-header ">
                  Contact Us Today
                </h1>
                <div className="header-divider"></div>
              </div>
            </Container>
          </div>

          <Container style={{ maxWidth: "28em", padding: "2em" }}>
            <div className="col-12">
              <div data-aos="zoom-in-up">
                <Row className="text-justify text-white justify-content-center align-content-center mt-3">
                  <div className="font-weight-bold ">
                    {" "}
                    10 Levetsowstraße, Berlin 10555.
                  </div>
                </Row>
                <Row className="text-justify text-white justify-content-center align-content-center mt-3">
                  <div>
                    <a
                      className=" font-weight-light select-color link"
                      href="mailto:info@midas-berlin.de"
                    >
                      {" "}
                      info@midas-berlin.de
                    </a>
                  </div>
                </Row>
                <Row className="text-justify text-white justify-content-center align-content-center mt-3">
                  <div className=" font-weight-light select-color ">
                    +49 176 810 18608
                  </div>
                </Row>
              </div>
            </div>
          </Container>
          <div
            className="col-12  "
            style={{
              borderBottom: "2px solid #2b2c2d",
              paddingBottom: "2em",
            }}
          >
            <Container style={{ maxWidth: "28em", padding: "2em" }}>
              <div data-aos="fade-up">
                <div
                  className="text-center  sub-header d-flex   align-content-center mt-5 ml-5 mr-5"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <div className="footer-icon">
                    <FaFacebookF />
                  </div>
                  <div className="footer-icon">
                    <FaTwitter />
                  </div>
                  <div className="footer-icon">
                    {" "}
                    <FiInstagram />{" "}
                  </div>
                </div>
              </div>
            </Container>
          </div>

          <div className="col-12">
            <Row className="d-flex justify-content-between align-content-center ">
              <div className="m-4">
                <a href="/" className="footer-note">
                  Terms of Use
                </a>{" "}
                &nbsp;&nbsp;
                <a href="/" className="footer-note">
                  Privacy Policy
                </a>
                &nbsp;&nbsp;
                <a href="/" className="footer-note">
                  Sitemap
                </a>
                &nbsp;&nbsp;
                <a href="/" className="footer-note">
                  Contact
                </a>
              </div>
              <div className="m-4">
                <p className="plain-footer-note">
                  {" "}
                  {new Date().getFullYear()}&nbsp;&nbsp;{" "}
                  <a href="/" className="footer-footlinks">
                    Midas Berlin
                  </a>{" "}
                  &nbsp;&nbsp; All rights Reserved.
                </p>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
