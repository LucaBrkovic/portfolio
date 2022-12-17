
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg"
import logo from "../assets/img/logo.svg";
export const Footer = () => {
return (
    <footer className="footer">
        <div className="footer-container">
            <div className="logo-container-foter">
                <img src={logo} className="footer-logo"/>
            </div>
          <div className="social-icon social-icon_foter">
                            <a href="https://www.linkedin.com/in/luka-brkovic-319557256/">
							<img src={navIcon1} alt="" />
							</a>
							<a href="https://t.me/lukabrkovic">
							<img src={navIcon2} alt="" />
							</a>
							<a href="https://www.instagram.com/luka_brx/">
							<img src={navIcon3} alt="" />
							</a>
                            <a href="https://www.facebook.com/profile.php?id=100083708395471">
                            <img src={navIcon4} alt="" />
                            </a>
          </div>
        </div>
          <p>Copyright 2022. All Rights Reserved</p>
   
  </footer>
)
}