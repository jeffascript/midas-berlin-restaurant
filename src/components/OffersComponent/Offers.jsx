import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "reactstrap";
import "./OffersStyles.css";
import Slider from "react-slick";
import promo1 from "../../img/promotions/promo_slide_1.jpg";
import promo2 from "../../img/promotions/promo_slide_2.jpg";

const promoProps = [
  {
    index: 1,
    image: promo1,
    bigText: " 50% from our new offers on Wednesdays between 12 -16:00 2020",
    smallText: "coke/fanta/sprite 40cl + fries & Pizza for € 6,79- ",
  },
  {
    index: 2,
    image: promo2,
    bigText: " 25% from our new offers from Tuesday April 2020",
    smallText: "coke/fanta/sprite 40cl + Eggs & Omlette for € 9,99 ",
  },
];

const Offers = () => {
  const settings = {
    //dots: true,
    //  fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Container fluid>
        <Slider {...settings}>
          {/* <Row>
               <Col>
          
           </Col>
          <Col>
            
          </Col>
              
           </Row> */}

          {promoProps &&
            promoProps.map(({ index, image, bigText, smallText }) => (
              <Container key={index}>
                <Row className="mt-5 mb-5 ">
                  <Col>
                    <img src={image} className="img-fluid" alt="promo" />
                  </Col>

                  <Col
                    style={{
                      margin: "4em 0 4em -11em",
                      background: "#ffffffe0",
                      boxShadow: "-4px 5px 8px 0px rgba(0, 0, 0, 0.71)",
                    }}
                  >
                    <Container>
                      <Row>
                        <Col className="p-3">
                          <h3
                            className=" text-capitalize sub-header"
                            style={{ fontSize: "3vw" }}
                          >
                            {bigText}
                          </h3>
                          <p>{smallText}</p>
                          <div className="order-button">
                            <a href="#">Place Order</a>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            ))}
        </Slider>
      </Container>

      {/* <div className="grid-main">
                       <div className="grid-col-1">
                       <img
src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
style={{
  display: 'inline-block',
  height: '100%',
  margin: 'auto',
  width: '100%'
}}
/>
                       </div>
                       <div className="grid-col-2">
                          <Container>
                              <Row>
                                 <Col>
                                 <h3 className=" text-capitalize">
                                     50% from our new offers from thursday July 2020
                                 </h3>
                                 </Col>
                              </Row>
                          </Container>
                       </div>
        
                   </div> */}
    </>
  );
};

export default Offers;

// <img
// src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// style={{
//   display: 'block',
//   height: '100%',
//   margin: 'auto',
//   width: '100%'
// }}
// />
// <img
// src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// style={{
//   display: 'block',
//   height: '100%',
//   margin: 'auto',
//   width: '100%'
// }}
// />
// <img
// src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// style={{
//   display: 'block',
//   height: '100%',
//   margin: 'auto',
//   width: '100%'
// }}
// />
{
  /* <img
src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
style={{
  display: 'block',
  height: '100%',
  margin: 'auto',
  width: '100%'
}}
/>

<img
src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
style={{
  display: 'block',
  height: '100%',
  margin: 'auto',
  width: '100%'
}}
/> */
}
