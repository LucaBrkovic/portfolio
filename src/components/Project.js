import { Col, Container, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import Nav from 'react-bootstrap/Nav';
import gradiant from "../assets/img/gradiant.png"
export const Project = () => {
    const projects = [
        {
        title: "Template",
        description: "Template",
        imgUrl : gradiant, 
        linkSite: "",
        linkGit: ""
        },
        {
            title: "Template",
            description: "Template",
            imgUrl : gradiant, 
            linkSite: "",
            linkGit: ""
        },
        {
            title: "Template",
            description: "Template",
            imgUrl : gradiant, 
            linkSite: "",
            linkGit: ""
        }
    ]
    return (
        <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
            <h2>Projects</h2>
            <p>All my Project, at one place. </p>
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
                    
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    
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