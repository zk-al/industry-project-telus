import "./Footer.scss";

import footerImg from "../../assets/images/telus-footer-img.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src={footerImg} alt="" />
      <p className="footer__text">© 2024 TELUS</p>
    </div>
  );
}

export default Footer;
