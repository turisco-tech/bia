import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>AWS 2026</p>
        <Link to="/about" className="footer-link">
          Sobre a Agenda
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
