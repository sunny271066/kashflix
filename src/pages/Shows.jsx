import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/popular/cimg7.jpeg";

import dyn from "../assets/watchlist/dynasty.jpeg";
import gg from "../assets/watchlist/gossipgirl.jpg";
import hm from "../assets/watchlist/himym.jpeg";
import rd from "../assets/watchlist/Riverdale.jpeg";
import tvd from "../assets/watchlist/tvd.jpeg";
import tk from "../assets/watchlist/tkb.jpeg";
import tb from "../assets/watchlist/tkb2.jpeg";
import tv from "../assets/watchlist/tkb3.jpeg";

import r1 from "../assets/watchlist/cimg3.jpg";
import r2 from "../assets/watchlist/cimg4.jpeg";
import r3 from "../assets/watchlist/cimg5.jpeg";
import r4 from "../assets/watchlist/cimg6.jpeg";
import r5 from "../assets/watchlist/cimg7.jpeg";
import r6 from "../assets/watchlist/cimg8.jpeg";
import r7 from "../assets/watchlist/cimg9.jpeg";
import r8 from "../assets/watchlist/cimg10.jpg";

const watchlist = [
  { title: "Dynasty", image: dyn, link: "https://www.netflix.com/in/title/80179394" },
  { title: "Gossip Girl", image: gg, link: "https://www.netflix.com/in/title/70143811" },
  { title: "How I Met Your Mother", image: hm, link: "https://www.hotstar.com/in/shows/how-i-met-your-mother/8323" },
  { title: "Riverdale", image: rd, link: "https://www.netflix.com/in/title/80133311" },
  { title: "The Vampire Diaries", image: tvd, link: "https://www.netflix.com/in/title/70143860" },
  { title: "The Kissing Booth", image: tk, link: "https://www.netflix.com/in/title/80143556" },
  { title: "The Kissing Booth 2", image: tb, link: "https://www.netflix.com/in/title/81026818" },
  { title: "The Kissing Booth 3", image: tv, link: "https://www.netflix.com/in/title/81026819" },
  
 
];
 const recommended = [
  { title: "Show 1", image: r1, link: "" },
  { title: "Show 2", image: r2, link: "" },
  { title: "Show 3", image: r3, link: "" },
  { title: "Show 4", image: r4, link: "" },
  { title: "Show 5", image: r5, link: "" },
  { title: "Show 6", image: r6, link: "" },
  { title: "Show 7", image: r7, link: "" },
  { title: "Show 8", image: r8, link: "" },
];

export default function Shows() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#141414", minHeight: "100vh", color: "white", fontFamily: "Arial" }}>

      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", padding: "16px 50px", display: "flex", alignItems: "center", gap: "28px", background: scrolled ? "black" : "transparent", transition: "background 0.4s ease", zIndex: 1000, boxSizing: "border-box" }}>
        <div style={{ color: "#E50914", fontSize: "2rem", fontWeight: "900", letterSpacing: "3px" }}>KASHFLIX</div>
        <span onClick={() => navigate("/home")} style={{ fontSize: "0.95rem", cursor: "pointer", color: "rgba(255,255,255,0.75)" }}>Home</span>
        <span onClick={() => navigate("/mylist")} style={{ fontSize: "0.95rem", cursor: "pointer", color: "rgba(255,255,255,0.75)" }}>My List</span>
        <span style={{ fontSize: "0.95rem", cursor: "pointer", color: "white" }}>Shows</span>
      </nav>

      {/* BANNER */}
      <div style={{
        width: "100%", height: "70vh", position: "relative",
        background: `
          linear-gradient(to top, #141414 5%, transparent 40%),
          linear-gradient(to right, rgba(0,0,0,0.85), transparent),
          url(${bannerImg})
        `,
        backgroundSize: "cover", backgroundPosition: "center",
        display: "flex", alignItems: "center",
        padding: "0 80px", boxSizing: "border-box",
      }}>
        <div>
          <h1 style={{ fontSize: "7rem", fontWeight: "900", lineHeight: "0.9", marginBottom: "20px", letterSpacing: "5px" }}>
            TWENTY
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", marginBottom: "20px" }}>
            A curated collection of her favourite shows.
          </p>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button style={{ padding: "10px 28px", border: "none", borderRadius: "5px", fontSize: "1rem", fontWeight: "700", cursor: "pointer", background: "white", color: "black" }}>
              ▶ Play
            </button>
            <button
              onClick={() => setShowModal(true)}
              style={{ padding: "10px 22px", border: "none", borderRadius: "5px", fontSize: "1rem", fontWeight: "700", cursor: "pointer", background: "rgba(109,109,110,0.7)", color: "white", display: "flex", alignItems: "center", gap: "8px" }}
            >
              ⓘ More Info
            </button>
          </div>
          {/* A RATING */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "16px" }}>
            <span style={{ border: "1px solid rgba(255,255,255,0.6)", padding: "1px 8px", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>A</span>
          </div>
        </div>
      </div>

      {/* SHOWS GRID */}
      <div style={{ padding: "20px 50px 60px" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "30px" }}>Shows 🎬</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "20px" }}>
          {watchlist.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
              <div
                style={{ width: "100%", aspectRatio: "2/3", borderRadius: "10px", overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform 0.3s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)", display: "flex", alignItems: "flex-end", padding: "10px", fontSize: "0.85rem", fontWeight: "600" }}>
                  {item.title}
                </div>
                <div style={{ position: "absolute", top: "8px", right: "8px", background: item.link.includes("netflix") ? "#E50914" : "#1a6bcc", padding: "2px 6px", borderRadius: "4px", fontSize: "0.65rem", fontWeight: "700" }}>
                  {item.link.includes("netflix") ? "NETFLIX" : "HOTSTAR"}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* RECOMMENDED ROW */}
<div style={{ padding: "0 50px 60px" }}>
  <h2 style={{ fontSize: "1.8rem", marginBottom: "18px", fontWeight: "700" }}>Recommended For You 🍿</h2>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "20px" }}>
    {recommended.map((item, index) => (
      <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
        <div
          style={{ width: "100%", aspectRatio: "2/3", borderRadius: "10px", overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform 0.3s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)", display: "flex", alignItems: "flex-end", padding: "10px", fontSize: "0.85rem", fontWeight: "600" }}>
            {item.title}
          </div>
        </div>
      </a>
    ))}
  </div>
</div>

      {/* MORE INFO MODAL */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#181818", borderRadius: "12px", width: "90%", maxWidth: "850px", maxHeight: "90vh", overflowY: "auto", position: "relative" }}
          >
            {/* BANNER IMAGE AT TOP */}
            <div style={{ position: "relative", width: "100%", height: "400px" }}>
              <img src={bannerImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px 12px 0 0" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #181818 5%, transparent 50%)", borderRadius: "12px 12px 0 0" }} />
              <div
                onClick={() => setShowModal(false)}
                style={{ position: "absolute", top: "15px", right: "15px", width: "36px", height: "36px", borderRadius: "50%", background: "#181818", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1.2rem" }}
              >✕</div>
              <div style={{ position: "absolute", bottom: "20px", left: "30px" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "900" }}>TWENTY</h1>
                <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                  <button style={{ padding: "10px 28px", border: "none", borderRadius: "5px", fontSize: "1rem", fontWeight: "700", cursor: "pointer", background: "white", color: "black" }}>▶ Play</button>
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div style={{ padding: "20px 30px 40px", display: "flex", gap: "40px" }}>
              <div style={{ flex: 2 }}>
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px", fontSize: "0.9rem", alignItems: "center" }}>
                  <span style={{ color: "#46d369", fontWeight: "700" }}>2026</span>
                  <span style={{ color: "#ddd" }}>20 Seasons</span>
                  <span style={{ border: "1px solid #777", padding: "0 6px", borderRadius: "3px", color: "#ddd" }}>A</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#aaa", marginBottom: "16px" }}>
                  Drama, Emotional Damage
                </div>
                <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#ddd" }}>
                  Write your description here — edit this in the code!
                </p>
              </div>
              <div style={{ flex: 1, fontSize: "0.85rem", lineHeight: "2" }}>
                <div><span style={{ color: "#777" }}>Cast: </span><span style={{ color: "#ddd" }}>Kashish Saumil Bhansali</span></div>
                <div><span style={{ color: "#777" }}>Genres: </span><span style={{ color: "#ddd" }}>Belgian Series, Horror Comedy</span></div>
                <div><span style={{ color: "#777" }}>This Show Is: </span><span style={{ color: "#ddd" }}>Scary and Extremely Mean</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}