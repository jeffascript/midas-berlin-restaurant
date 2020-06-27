import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.49)" }}>
          <Col className="col-lg-8 col-md-6  d-none d-md-block">
            <Container>
              <div className="text-white header-info">
                <p>
                  <FaRegEnvelope style={{ fontSize: "small" }} />{" "}
                  <span>
                    {" "}
                    Email:
                    <a
                      href="mailto:ofoaro.jeff@gmail.com?subject=I%20want%20to%20Buy%20this%20webpage&body=I you want to hire you or I want to buy this web page?"
                      className="text-white"
                    >
                      info@midas-berlin.de
                    </a>
                  </span>
                </p>
                <p>
                  <FiPhoneCall /> <span> Telephone: +49 176 810 18608</span>
                </p>
              </div>
            </Container>
          </Col>

          <Col>
            <Row className="h-100">
              <div className="col-md-6 p-0 col-sm-4 col-xs-4 w-0">
                <div className="top-socials h-100">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    {" "}
                    <FaFacebookF />{" "}
                  </a>

                  <a href="/" target="_blank" rel="noopener noreferrer">
                    {" "}
                    <FaInstagram />{" "}
                  </a>

                  <a href="/" target="_blank" rel="noopener noreferrer">
                    {" "}
                    <FaTwitter />{" "}
                  </a>
                </div>
              </div>

              <div className="col-md-6 p-0 col-sm-8 col-xs-8">
                <div className="top-booking">
                  <a href="mailto:ofoaro.jeff@gmail.com?subject=I%20want%20to%20Buy%20this%20webpage&body=I you want to hire you or I want to buy this web page?">
                    Make a Reservation
                  </a>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
