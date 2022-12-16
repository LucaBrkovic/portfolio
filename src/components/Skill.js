import React from 'react'
import { Col, Row, Container  } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/skill1.svg"
import skill2 from "../assets/img/skill2.svg"
import skill3 from "../assets/img/skill3.svg"
import skill4 from "../assets/img/skill4.svg"
import colorSharp from "../assets/img/color-sharp.png"
export const  Skill = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 766, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
           <Col>
            <div className='skill-bx'>
                <h2>
                    Skills 
                </h2>
                <p>I can't guarantee you with experience, but I promise you that the effort is guaranteed.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className='item'>
                    <img src={skill1} alt="Image" />
                    <h5>Java Script</h5>
                </div>
                <div className='item'>
                    <img src={skill2} alt="Image" />
                    <h5>React</h5>
                </div>
                <div className='item'>
                    <img src={skill3} alt="Image" />
                    <h5>Responsive Design</h5>
                </div>
                <div className='item'>
                    <img src={skill4} alt="Image" />
                    <h5>Adobe Illustrator</h5>
                </div>
                </Carousel>
            </div>
           </Col> 
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} />
    </section>
  )
}
