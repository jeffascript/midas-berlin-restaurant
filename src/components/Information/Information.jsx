import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCreditCard } from "react-icons/bs";
import { IoMdCash } from "react-icons/io";
import { GiFoodTruck } from "react-icons/gi";

const Information = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>


      <Container style={{ padding: "7em 0" }}>
        <Row>
          <div className="col-12 mt-3 mb-4">
            <Container>
              <div data-aos="fade-up">
                <h1 className="text-center mx-auto sub-header ">
                  Our Opening Times
                </h1>
                <div className="header-divider"></div>
              </div>
            </Container>
          </div>

          <Container style={{ maxWidth: "28em", padding: "2em" }}>
            <div className="col-12">
              <div data-aos="zoom-in-up">
                <Row className="text-justify text-white justify-content-between align-content-center">
                  <div className="font-weight-bold "> Monday - Friday</div>
                  <div >10:00 - 22:00 </div>
                </Row>
                <Row className="text-justify text-white justify-content-between align-content-center">
                  <div className="font-weight-bold "> Saturday - Sunday</div>
                  <div >09:00 - 20:00 </div>
                </Row>
              </div>

                                

            </div>
          </Container>
          <div className="col-12 mt-3 mb-4">
            <Container>
              <div data-aos="fade-up">
                <div className="text-center mx-auto sub-header d-flex  justify-content-around align-content-center mt-5">




                



<div>
                    <BsCreditCard style={{fontSize:"12vmin"}}/>
                    <div className="text-white">EC &amp; Mastercard</div>
                </div>
                                <div><IoMdCash style={{fontSize:"12vmin"}}/>
                                <div className="text-white">Cash</div>
                                </div>

                               <div > <GiFoodTruck style={{fontSize:"12vmin"}}/>
                               <div className="text-white">Home delivery</div>
                               </div>
                </div>
              </div>
            </Container>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Information;
