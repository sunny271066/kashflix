import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/popular/img8.jpg";

export default function Intro() {
  const navigate = useNavigate();

  const images = [img1, img2, img6, img7, img8];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const profiles = [
    {
      name: "Babes",
      emoji: "💖",
    },
    {
      name: "Honey",
      emoji: "🍯",
    },
    {
      name: "KBC",
      emoji: "🎀",
    },
    {
      name: "🦷",
      emoji: "🦷",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Background Slideshow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "1s ease-in-out",
          transform: "scale(1.03)",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85))",
        }}
      />

      {/* Bottom Fade */}
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-10%",
          width: "120%",
          height: "320px",
          background:
            "linear-gradient(to top, rgba(45,60,65,0.95), rgba(45,60,65,0.1))",
          borderRadius: "50%",
          filter: "blur(5px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "90px",
          color: "white",
        }}
      >
        <h1
          style={{
            color: "#E50914",
            fontSize: "5rem",
            fontWeight: "900",
            margin: 0,
            letterSpacing: "2px",
            textShadow: "0 0 20px rgba(229,9,20,0.4)",
          }}
        >
          KASHFLIX
        </h1>

        <p
          style={{
            marginTop: "10px",
            fontSize: "2rem",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Choose your profile
        </p>

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
          }}
        >
          {profiles.map((profile) => (
            <div
              key={profile.name}
              onClick={() => navigate("/home")}
              style={{
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "2px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "4.5rem",
                  transition: "0.3s",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
              >
                {profile.emoji}
              </div>

              <p
                style={{
                  marginTop: "18px",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                {profile.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}