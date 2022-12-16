import { Col } from "react-bootstrap"
import { Github } from "react-bootstrap-icons"
export const ProjectCard = ({title, description, imgUrl, linkSite, linkGit}) => {
    return (
        <Col sm={6} md={4}>
       
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <div className="site-btn-container">
                 <a href={linkSite}><button className="site-btn">WebSite</button></a>
                <a href={linkGit}><button className="site-btn">Github <Github/></button></a>   
                </div>
                
            </div>
        </div>
        
        </Col>
    )
} 