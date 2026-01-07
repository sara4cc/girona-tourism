// Footer.js
import React from "react";
import "./Footer.css";

export default function Footer() {
  function goTo(e, hash) {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer_inner">
        <div className="footer_title">Contact</div>

        <div className="footer_rows">
          <div className="footer_row">
            <span className="footer_label">Email</span>
            <a className="footer_link" href="mailto:info@girona-tourism.com">
              info@girona-tourism.com
            </a>
          </div>

          <div className="footer_row">
            <span className="footer_label">Phone number</span>
            <a className="footer_link" href="tel:+34123444555">
              +34 123444555
            </a>
          </div>
        </div>

        <a className="footer_back" href="#inici" onClick={(e) => goTo(e, "#inici")}>
          Go back to start ↑
        </a>
      </div>

      <div className="footer_bottom">© 2026 Sara Casademont</div>
    </footer>
  );
}
