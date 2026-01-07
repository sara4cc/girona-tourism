import React from "react";
import "./Hero.css";
import image from "../images/girona.png";

const MENU = [
  
  { label: "Plan your visit", href: "#", desc: "Plan your visit choosing between the best options." },
  { label: "Why Girona?", href: "#video", desc: "Watch a video of the most iconic parts and listen to its representative songs" },
  { label: "Map", href: "#map", desc: "Locate quickly and plan the route." },
];

export default function Hero({ onGoVisit }) {
  function goTo(e, hash) {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleMenuClick(e, item) {
    if (item.label === "Plan your visit") {
      e.preventDefault();
      if (onGoVisit) onGoVisit();
      return;
    }

    goTo(e, item.href);
  }

  return (
    <section className="hero" id="inici">
      <div className="hero_inner">
        <div className="hero_left">
          <h1 className="hero_title">Discover Girona</h1>

          <div className="hero_menu">
            {MENU.map((item) => (
              <a
                key={item.label}
                className="hero_menuItem"
                href={item.href}
                onClick={(e) => handleMenuClick(e, item)}
              >
                <div className="hero_menuTop">
                  <span className="hero_menuLabel">{item.label}</span>
                  <span className="hero_arrow">→</span>
                </div>
                <div className="hero_menuDesc">{item.desc}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="hero_right">
          <img className="hero_image" src={image} alt="Girona" />
        </div>
      </div>
    </section>
  );
}
