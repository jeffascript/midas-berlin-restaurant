import React, { useEffect } from 'react';
import { Row, Container, Col } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./AboutUs.css"


const AboutUs = () => {

    useEffect (()=>{
        AOS.init({
            duration : 2000
          })

    }, [])


    return (
       <Container  style={{ padding:"7em 0"}} >
            
          
            <Row >
               
                    <div className="col-12 mt-3 mb-4">
                    <Container>
                    <div data-aos='fade-up'>
                    <h1 className="text-center mx-auto sub-header">Who are We ?</h1>
          </div>
          </Container>
                    </div>
              


                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                    <div data-aos="zoom-in-up">

                    
                    <p className="text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate rem, a impedit sit nisi voluptatem dolore possimus nobis, corporis id veritatis enim excepturi, maiores laborum totam mollitia quia officia quo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magni similique quibusdam tempora optio voluptate rem dignissimos a sed autem! Omnis veniam maiores repudiandae impedit vero ipsa sed nisi ratione?
                    </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div data-aos="zoom-in-right">
                    <p className="text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate rem, a impedit sit nisi voluptatem dolore possimus nobis, corporis id veritatis enim excepturi, maiores laborum totam mollitia quia officia quo.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum accusamus pariatur officiis reprehenderit nesciunt, a alias autem earum quo excepturi aut perferendis quisquam vel at. Adipisci dicta ab quibusdam.
                    </p>
                    </div>
                </div>
            </Row>
       </Container>
    );
};

export default AboutUs;