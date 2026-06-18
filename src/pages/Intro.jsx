import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/popular/img8.jpg";
import img9 from "../assets/cimg50.jpg";
import img10 from "../assets/cimg51.jpg";
import img11 from "../assets/cimg52.jpg";


const images = [img11, img2, img6, img7, img8,img9,img10,img1];

const profiles = [
  { name: "Babes", emoji: "💖" },
  { name: "Honey", emoji: "🍯" },
  { name: "KBC",   emoji: "🎀" },
  { name: "🦷",    emoji: "🦷" },
];

export default function Intro() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
        setFading(false);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative", overflow: "hidden", fontFamily: "Arial, sans-serif", background: "black" }}>

      {/* BACKGROUND IMAGE with zoom */}
      {/* BACKGROUND IMAGES - two layers for smooth crossfade */}
{images.map((img, i) => (
  <div
    key={i}
    style={{
      position: "absolute", inset: 0,
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: i === currentImage ? 1 : 0,
      transition: "opacity 2s ease",
      transform: i === currentImage ? "scale(1.12)" : "scale(1)",
      transition: "opacity 2s ease, transform 6s ease",
    }}
  />
))}

      {/* DARK OVERLAY */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 100%)",
      }} />

      {/* CONTENT */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column",
        alignItems: "center", paddingTop: "90px", color: "white",
      }}>

        

        <h1 style={{
          color: "#E50914", fontSize: "5rem", fontWeight: "900",
          margin: 0, letterSpacing: "4px",
          fontFamily: "'Arial Black', sans-serif",
          textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}>
          KASHFLIX
        </h1>

        <p style={{ marginTop: "12px", fontSize: "1.8rem", color: "rgba(255,255,255,0.85)", fontWeight: "300" }}>
          Choose your profile
        </p>

        {/* PROFILES */}
        <div style={{ marginTop: "60px", display: "flex", gap: "40px" }}>
          {profiles.map((profile) => (
            <div
              key={profile.name}
              onClick={() => navigate("/home")}
              style={{ textAlign: "center", cursor: "pointer" }}
            >
              <div
                style={{
                  width: "160px", height: "160px", borderRadius: "12px",
                  background: "rgba(30,30,30,0.85)",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255,255,255,0.15)",
                  display: "flex", justifyContent: "center", alignItems: "center",
                  fontSize: "4.5rem",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.borderColor = "white";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                {profile.emoji}
              </div>
              <p style={{ marginTop: "16px", fontSize: "1.3rem", fontWeight: "500", color: "rgba(255,255,255,0.8)" }}>
                {profile.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}