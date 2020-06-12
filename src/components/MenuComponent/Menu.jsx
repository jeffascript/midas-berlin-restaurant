import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import MenuShowcase from "./MenuShowcase";
import { useWindowDimensions } from "../ScreenSize";

const Menu = () => {
    const [tabPosition, setTabPosition] = useState("");
    const { width } = useWindowDimensions();

    useEffect(() => {
        width <= 500 ? setTabPosition("top") : setTabPosition("left");
    }, [width]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const changeTabPosition = (tabPosition) => {
        setTabPosition(tabPosition);
    };

    return (
        <Container style={{ padding: "7em 0" }}>
            <Row>
                <div className="col-12 mt-3 mb-4">
                    <Container>
                        <div data-aos="fade-up">
                            <h1 className="text-center mx-auto sub-header">
                                Our Current Menu
                            </h1>
                            <div className="header-divider"></div>
                        </div>
                    </Container>
                </div>

                <div className="col-12">
                    <div data-aos="fade-up-right">
                        <MenuShowcase
                            changeTabPosition={changeTabPosition}
                            tabPosition={tabPosition}
                        />
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Menu;
