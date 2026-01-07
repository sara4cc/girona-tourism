import React from "react";
import "./VideoSection.css";
import audio from "../videosNAudios/audio.MP3"

const YT_ID = "zxouyEeabew";

export default function VideoSection() {
  return (
    <section id="video" className="videoSec">
      <h2 className="videoSec_title">Why Girona?</h2>
      <p>Watch this video of the most iconic parts of Girona</p>

      <iframe
        className="videoSec_video"
        src={`https://www.youtube.com/embed/${YT_ID}`}
        title="Why Girona video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <div className="videoSec_audioWrap">
        <p className="videoSec_audioText">
          Enjoy a short audio mix inspired by Girona’s local spirit with the song "Girona m'enamora" and the passion for its football team with its anthem.
        </p>

        <audio className="videoSec_audio" controls preload="metadata">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
}
