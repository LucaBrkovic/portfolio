import { Col, Container, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import Nav from 'react-bootstrap/Nav';
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
export const Project = () => {
    const projects = [
        {
        title: "Project Inc",
        description: "Design",
        imgUrl : projImg1, 
        },
        {
            title: "Project Inc2",
            description: "Design2",
            imgUrl : projImg2, 
        }
    ]
    return (
        <section className="project" id="project">
        <Container>
            <Row>
                <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur totam id facilis, iure voluptatibus.</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
         <Nav.Item>
            <Nav.Link eventKey="first">Tab One</Nav.Link>
             </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third" >
            Tab Three
         </Nav.Link>
            </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                <Row>
                    {
                        projects.map((project,index) => {
                            return (
                                <ProjectCard key={index}
                                {...project} />
                            )
                        })
                    }
                </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    mimi
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    mimi2
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>

                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}