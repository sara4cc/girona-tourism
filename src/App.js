import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Visit from "./components/Visit";
import Map from "./components/Map";
import VideoSection from "./components/VideoSection";

export default function App() {
  const [view, setView] = useState("home");
  const [reserves, setReserves] = useState([]);

  const goHome = () => setView("home");
  const goVisit = () => setView("visit");

  return (
    <>
      <Navbar
        currentView={view}
        onGoHome={goHome}
        onGoVisit={goVisit}
        reserves={reserves}
      />

      {view === "home" ? (
        <>
          <Hero onGoVisit={goVisit} />

          <section id="video" style={{ padding: "80px 20px" }}>
            <VideoSection />
          </section>

          <section id="map" style={{ padding: "80px 20px" }}>
            <h2>Map</h2>
            <Map />
          </section>
        </>
      ) : (
        <Visit
          onBack={goHome}
          reserves={reserves}
          setReserves={setReserves}
        />
      )}

      <Footer />
    </>
  );
}
