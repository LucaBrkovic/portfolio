import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

import headerImg from "../assets/img/header-img.svg"
import { Github } from "react-bootstrap-icons"
import "animate.css"
import TrackVisibility from "react-on-screen"
import { motion } from "framer-motion"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "Programmer"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300- Math.random() * 80)
    const period = 1500

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length 
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else  if(isDeleting && updatedText === ""){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible}) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 
                        <span className="tagline">Welcome to my Portfolio</span>
                        <div className="title-container">
                        <h1>{`Hi my name is Luka `}<br/> <span className="wrap wrap-color">  {text}</span></h1>
                        </div>
                        <p>Frontend developer in progress, based in Germany, code addicted...</p>
                        <div className="btn-container">
                           <a href="https://github.com/LucaBrkovic"><motion.button whileHover={{ scale: 1.1 }}>Github <Github/></motion.button></a>
                            <a href="#connect"><motion.button  whileHover={{ scale: 1.1 }}>Contact me</motion.button></a>
                        </div>
                       </div>} 
                     </TrackVisibility>  
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    
                        <img src={headerImg} alt="Header Img" />
        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}