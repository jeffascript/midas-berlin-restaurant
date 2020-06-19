import React from "react";
import "./Menu.css";
import "antd/dist/antd.css";
import { menuPlan } from "./MenuObject";

import { Tabs } from "antd";
import { Container, Row, Col } from "reactstrap";
const { TabPane } = Tabs;
// const { Option } = Select;

export const MealItem = ({ menuItem }) => {
  let result;

  menuItem === "All" || "" || undefined
    ? (result = menuPlan.filter(
        ({ menu }) => !menu.some((tag) => tag === menuItem)
      ))
    : (result = menuPlan.filter(({ menu }) =>
        menu.some((tag) => tag === menuItem)
      ));

  // console.log(result);
  return result.map(({ id, recipe, price, image, dishname }) => (
    <>
      <div index={id} className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
        <Row>
          <div className="col">
            <div>
              <img className=" small-Img" alt="cupcake" src={image} />
            </div>
          </div>
          <Col>
            <div>
              <h4> {dishname} </h4>

              <div>
                <p className="text-left">
                  {recipe.map((oneRecipe) => (
                    <>
                      {" "}
                      <span>{oneRecipe} </span>{" "}
                    </>
                  ))}
                </p>
              </div>
            </div>

            <h4 className="mb-5"> {price} </h4>
          </Col>
        </Row>
      </div>
    </>
  ));
};

const MenuShowcase = ({ tabPosition, changeTabPosition }) => {
  return (
    <div>
      {/* <Space style={{ marginBottom: 16 }}>
          Tab position：
          <Select
            value={tabPosition}
            onChange={changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select>
        </Space> */}
      <Tabs tabPosition={tabPosition}>
        {/* {[...Array(6).keys()].map(i => (
  <TabPane tab={`Tab-${i}3453`} key={i} enabled={i === 6}>
   
   <div>Content of tab {i} </div>
   <div> Hello </div>
    
  </TabPane>
))} */}

        <TabPane tab="All" key="1">
          <Container className="h-100 w-100">
            <Row className="h-100 w-100 justify-content-between align-content-center">
              {/* <div className="col-lg-4 col-md-5 col-sm-4 col-xs-6">
                  <Row>
                    <div className="col">
                      <div>
                        <img className=" small-Img" alt="cupcake" src={Img6} />
                      </div>
                    </div>
                    <Col>
                      <div>
                        <h4> CupCake</h4>
                        <p>
                          <span>Cherry</span> <span>Cherry</span>
                          <span>Cherry</span>
                        </p>
                        <p>
                          <span>Ice</span> <span>Cherry</span>
                          <span>Cherry</span>
                        </p>
                        <p>
                          <span>Berry</span> <span>Cherry</span>
                          <span>Cherry</span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div> */}

              <MealItem menuItem="All" />
            </Row>
          </Container>
        </TabPane>
        <TabPane tab="Breakfast" key="2">
          <MealItem menuItem="Breakfast" />
        </TabPane>
        <TabPane tab="Lunch" key="3">
          <MealItem menuItem="Lunch" />
        </TabPane>

        <TabPane tab="Brunch" key="4">
          <MealItem menuItem="Brunch" />
        </TabPane>
        <TabPane tab="Snack" key="5">
          <MealItem menuItem="Snack" />
        </TabPane>

        <TabPane tab="Dinner" key="6">
          <MealItem menuItem="Dinner" />
        </TabPane>
      </Tabs>
      <hr />
    </div>
  );
};

export default MenuShowcase;
