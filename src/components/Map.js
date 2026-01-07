import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <section id="map">
      <iframe
        className="mapa_frame"
        title="Google Maps - Girona"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Girona,+Spain&z=14&output=embed"
        allowFullScreen
      />
    </section>
  );
}
