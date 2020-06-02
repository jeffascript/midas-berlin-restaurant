import React, { useState } from "react";
import Header from "./components/HeaderComponent/TopHeader/Header";
import NavBar from "./components/NavBarComponent/NavBar";
import { Container, Row } from "reactstrap";
import imgForBg from "./img/slider/slide_2.jpg";
import "./App.css";
import Sticky from "react-stickynode";
import CarouselComponent from "./components/HeaderComponent/CarouselComponent/Carousel";
import { Link } from "react-scroll";
import AboutUs from "./components/AboutComponent/AboutUs";
import Offers from "./components/OffersComponent/Offers";



const bgImg = {
  background: `url(${imgForBg}) no-repeat fixed 0px 0px / cover`,
  height: "40vmax", //100vh
  width: "100%",
};

function App() {
  const [stickyNav, setStickynav] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setStickynav(true);
    } else setStickynav(false);
  };

  return (
    <>
      <div className="w-100 h-100" style={{ overflowX: "hidden" }}>

        <div id="home">
          <Container fluid className="main-bg position-relative  p-0 after-main">

            <header>
              <div
                className="position-absolute vw-100 vw-100 "
                style={{ zIndex: "15" }}
              >
                <Header />
                <Sticky
                  enabled={true}
                  top={0}
                  bottomBoundary="#footer"
                  onStateChange={handleStateChange}
                >
                  <Container fluid>
                    <Row>
                      <NavBar isNavSticky={stickyNav} />
                    </Row>
                  </Container>
                </Sticky>
              </div>
            </header>

            <CarouselComponent />
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className="mouse"></div>
            </Link>
          </Container>
        </div>


        <section id="about" >
          <Container fluid  >
            <AboutUs />
          </Container>
        </section>



        <section id="offer" className="section-outline">
          <Container fluid className="bg-dark section-dark-cover " style={bgImg}>
            <Row >
           <Offers />
            </Row>
          </Container>
        </section>



        <section id="menu" >
          <Container fluid  >
            <AboutUs />
          </Container>
        </section>



        <section id="menu">
          <Container fluid className="bg-primary ">
            <Row>
              <h5>heyy</h5>
            </Row>
          </Container>
        </section>
        



      </div>
    </>
  );
}

export default App;
