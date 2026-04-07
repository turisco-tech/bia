import React from "react";

const DadosHenrylle = () => {
  return (
    <div className="dados-henrylle">
      <h3>Links Importantes</h3>
      <div className="links-grid">        
        <a
          href="https://instagram.com/marcosturisco"
          target="_blank"
          rel="noopener noreferrer"
          className="link-card"
        >
          <h4>📸 Instagram</h4>
          <p>Marcos Turisco</p>
        </a>
        
        <a
          href="https://www.linkedin.com/in/marcosturisco/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-card"
        >
          <h4>💼 LinkedIn</h4>
          <p>Software Engeneering</p>
        </a>
      </div>
    </div>
  );
};

export default DadosHenrylle;
