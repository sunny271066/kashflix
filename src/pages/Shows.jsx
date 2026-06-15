import { useNavigate } from "react-router-dom";

import dyn from "../assets/watchlist/dynasty.jpeg";
import gg from "../assets/watchlist/gossipgirl.jpg";
import hm from "../assets/watchlist/himym.jpeg";
import rd from "../assets/watchlist/Riverdale.jpeg";
import tvd from "../assets/watchlist/tvd.jpeg";
import tk from "../assets/watchlist/tkb.jpeg";
import tb from "../assets/watchlist/tkb2.jpeg";
import tv from "../assets/watchlist/tkb3.jpeg";

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

export default function Shows() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#141414", minHeight: "100vh", color: "white", fontFamily: "Arial" }}>

      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", padding: "16px 50px", display: "flex", alignItems: "center", gap: "28px", background: "black", zIndex: 1000, boxSizing: "border-box" }}>
        <div style={{ color: "#E50914", fontSize: "2rem", fontWeight: "900", letterSpacing: "3px" }}>KASHFLIX</div>
        <span onClick={() => navigate("/home")} style={{ fontSize: "0.95rem", cursor: "pointer", color: "rgba(255,255,255,0.75)" }}>Home</span>
        <span onClick={() => navigate("/mylist")} style={{ fontSize: "0.95rem", cursor: "pointer", color: "rgba(255,255,255,0.75)" }}>My List</span>
        <span style={{ fontSize: "0.95rem", cursor: "pointer", color: "white" }}>Shows</span>
      </nav>

      <div style={{ padding: "120px 50px 60px" }}>
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

    </div>
  );
}