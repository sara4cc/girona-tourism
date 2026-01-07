import React, { useState } from "react";
import "./Visit.css";

import catedral from "../images/visits/catedral.jpg";
import call from "../images/visits/call.jpg";
import muralles from "../images/visits/muralles.jpg";
import onyar from "../images/visits/onyar.jpg";
import museum from "../images/visits/museu.jpg";
import bath from "../images/visits/banys.jpg";
import galligants from "../images/visits/galligants.jpg";
import felix from "../images/visits/stFelix.jpg";

const ACTIVITIES = [
  {
    id: "catedral",
    title: "Cathedral of Girona",
    img: catedral,
    location: "Plaça de la Catedral, 17004 Girona, Spain",
    longDesc:
      "Girona’s Cathedral is one of the city’s most iconic landmarks. Its monumental baroque façade and wide staircase lead to a vast Gothic nave—one of the widest in the world. Inside, you’ll find impressive artworks, a calm atmosphere, and centuries of history. It’s a must-see to understand Girona’s medieval heritage and enjoy panoramic views of the old town.",
  },
  {
    id: "call",
    title: "The Jewish Quarter",
    img: call,
    location: "El Call, Barri Vell, Girona, Spain",
    longDesc:
      "The Jewish Quarter (El Call) is a maze of narrow stone streets that preserves the atmosphere of medieval Girona. Walking through its alleys feels like stepping back in time. It’s one of the best preserved Jewish quarters in Europe, ideal for slow wandering, photography, and discovering hidden corners. Nearby, you can also visit the Jewish History Museum for deeper context.",
  },
  {
    id: "muralles",
    title: "City Walls & Views",
    img: muralles,
    location: "Passeig de la Muralla, Girona, Spain",
    longDesc:
      "The city walls offer one of the best ways to experience Girona from above. This scenic walk is easy to follow and connects viewpoints over the old town, rooftops, and surrounding hills. It’s especially beautiful in the late afternoon, when the light turns warm and the city feels golden. Great for photos and a relaxed stroll.",
  },
  {
    id: "onyar",
    title: "Onyar’s Houses",
    img: onyar,
    location: "River Onyar, Girona, Spain",
    longDesc:
      "The colorful houses along the Onyar River are Girona’s signature postcard view. Cross one of the bridges, like Pont de Pedra or the iconic red Eiffel Bridge to enjoy reflections on the water and vibrant façades. It’s a perfect spot for sunset photos and a great starting point to explore the old town on foot.",
  },
  {
    id: "museu",
    title: "Girona Art Museum",
    img: museum,
    location: "Pujada de la Catedral, 12, 17004 Girona, Spain",
    longDesc:
      "Located in the Episcopal Palace near the Cathedral, the Girona Art Museum is the best place to explore local Catalan art in a peaceful setting. The collection ranges from Romanesque to modern works, offering a cultural break from the busy streets. It’s ideal if you want a quieter visit with historical context and beautiful interiors.",
  },
  {
    id: "bath",
    title: "Arab Baths",
    img: bath,
    location: "Carrer del Rei Ferran el Catòlic, Girona, Spain",
    longDesc:
      "Despite the name, the Arab Baths are actually Romanesque baths inspired by Moorish design. They are compact but stunning, with columns, arches, and a distinctive octagonal pool area. The space feels timeless and is a quick but memorable visit, perfect if you enjoy architecture, history, and unique atmospheres.",
  },
  {
    id: "galligants",
    title: "Sant Pere de Galligants Monastery",
    img: galligants,
    location: "Carrer de Santa Llúcia, 8, 17007 Girona, Spain",
    longDesc:
      "This Romanesque monastery is one of Girona’s most charming historic buildings. It often hosts the Archaeology Museum of Catalonia (Girona), and the site itself is worth the visit for its cloister, stonework, and quiet surroundings. It’s a great stop if you enjoy medieval architecture and calmer corners away from the main crowds.",
  },
  {
    id: "felix",
    title: "Basilica of Saint Feliu",
    img: felix,
    location: "Plaça de Sant Feliu, 17004 Girona, Spain",
    longDesc:
      "The Basilica of Saint Feliu is a key Gothic church in Girona, notable for its tall bell tower and dramatic interior. It played an important role in the city’s religious history and offers a different feel from the Cathedral, often quieter, with beautiful stained glass and a strong medieval character. A great visit if you want to deepen your understanding of Girona’s heritage.",
  },
];

export default function Visit({ onBack, reserves, setReserves }) {
  const [selected, setSelected] = useState(null); // activitat seleccionada pel popup

  function addToPlan(item) {
    setReserves((prev) => {
      if (prev.some((x) => x.id === item.id)) return prev;
      return [...prev, item];
    });
  }

  function removeFromPlan(id) {
    setReserves((prev) => prev.filter((x) => x.id !== id));
  }

  function empty() {
    setReserves([]);
  }

  function confirmPlan() {
    alert("Plan confirmed!");
  }

  return (
    <main className="vis">
      <div className="vis_top">
        <div>
          <h1 className="vis_title">Plan your visit</h1>
          <p className="vis_subtitle">
            Click a place to see details, then <b>Add to plan</b>.
          </p>
        </div>

        <button className="vis_back" type="button" onClick={onBack}>
          ← Back
        </button>
      </div>

      <div className="vis_layout">
        <section className="vis_list">
          {ACTIVITIES.map((a) => (
            <button
              key={a.id}
              type="button"
              className="visit_box"
              onClick={() => setSelected(a)}
            >
              <img className="visit_thumb" src={a.img} alt={a.title} />
              <span className="visit_title">{a.title}</span>
            </button>
          ))}
        </section>

        <aside className="vis_side" aria-label="Reserves">
          <div className="resBox">
            <div className="resBox_top">
              <h2 className="resBox_title">Your plan</h2>
              {reserves.length > 0 && (
                <button className="resBox_clear" type="button" onClick={empty}>
                  empty
                </button>
              )}
            </div>

            {reserves.length === 0 ? (
              <p className="resBox_empty">You haven't added anything yet.</p>
            ) : (
              <ul className="resBox_list">
                {reserves.map((r) => (
                  <li key={r.id} className="resBox_item">
                    <div className="resBox_name">{r.title}</div>
                    <button
                      className="resBox_remove"
                      type="button"
                      onClick={() => removeFromPlan(r.id)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <button
              className="resBox_confirm"
              type="button"
              disabled={reserves.length === 0}
              onClick={confirmPlan}
            >
              Confirm
            </button>
          </div>
        </aside>
      </div>

      {selected && (
        <div className="modal_overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" type="button" onClick={() => setSelected(null)}>
              ✕
            </button>

            <img className="modal_img" src={selected.img} alt={selected.title} />

            <h3 className="modal_title">{selected.title}</h3>
            <p className="modal_location"><b>Location:</b> {selected.location}</p>
            <p className="modal_desc">{selected.longDesc}</p>

            <div className="modal_actions">
              <button
                className="modal_add"
                type="button"
                onClick={() => {
                  addToPlan(selected);
                  setSelected(null);
                }}
              >
                Add to plan
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
