import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png"

export default function Navbar({ onGoHome, onGoVisit, currentView, reserves = [] }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openReserves, setOpenReserves] = useState(false);

  function goToSection(e, hash) {
    e.preventDefault();
    // Si no està a home, torna a home i després scroll
    if (currentView !== "home") {
      onGoHome();
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } 
    else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setOpenMenu(false);
  }

  return (
    <>
      <header className="nav">
        <div className="nav_inner">
          <a
            className="nav_brand"
            href="#inici"
            onClick={(e) => {
              e.preventDefault();
              onGoHome();
            }}
          >
            <img className="nav_logo" src={logo}/>
            <div className="nav_title">
              <span>Girona</span>
              <span>•</span>
              <span>Tourism</span>
            </div>
          </a>

          

          <nav className="nav_links">
            <button
              type="button"
              className="nav_links"
              onClick={() => {
                onGoVisit();
                setOpenMenu(false);
              }}
            >
              Plan visit
            </button>

            <a href="#why-girona" onClick={(e) => goToSection(e, "#video")}>
              Why Girona?
            </a>

            <a href="#map" onClick={(e) => goToSection(e, "#map")}>
              Map
            </a>

            <a href="#contact" onClick={(e) => goToSection(e, "#contact")}>
              Contact
            </a>

            <button
              type="button"
              className="nav_btnLink"
              onClick={() => setOpenReserves(true)}
            >
              See your plan {reserves.length > 0 ? `(${reserves.length})` : ""}
            </button>
          </nav>

        
        </div>
      </header>

      <div className={`resSlide ${openReserves ? "resSlide--open" : ""}`} onClick={() => setOpenReserves(false)}>
        <div className="resSlide_panel" onClick={(e) => e.stopPropagation()}>
          <div className="resSlide_top">
            <h3 className="resSlide_title">Reserves</h3>
            <button className="resSlide_close" type="button" onClick={() => setOpenReserves(false)}>
              ✕
            </button>
          </div>

          {reserves.length === 0 ? (
            <p className="resSlide_empty">You don't have any visits booked yet.</p>
          ) : (
            <ul className="resSlide_list">
              {reserves.map((r) => (
                <li key={r.id} className="resSlide_item">
                  <div className="resSlide_name">{r.title}</div>
                  <div className="resSlide_desc">{r.desc}</div>
                </li>
              ))}
            </ul>
          )}

          <p className="resSlide_hint">
            To add a visit to your plan go to <b>“Plan visit”</b>.
          </p>
        </div>
      </div>
    </>
  );
}
