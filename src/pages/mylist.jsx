import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/popular/img8.jpg";
import img2 from "../assets/popular/img9.jpg";
import img3 from "../assets/popular/img10.jpg";
import img4 from "../assets/popular/img11.jpg";
import img5 from "../assets/popular/img12.jpg";
import img6 from "../assets/popular/img13.jpg";
import img7 from "../assets/popular/img14.jpg";
import img8 from "../assets/popular/img15.jpg";
import img9 from "../assets/popular/img16.jpg";
import img10 from "../assets/popular/img17.jpg";
import img12 from "../assets/mylist/cimg49.jpg";
import img13 from "../assets/mylist/cimg50.jpg";
import img14 from "../assets/mylist/cimg51.jpg";
import img15 from "../assets/mylist/cimg52.jpg";
import img16 from "../assets/mylist/cimg53.jpg";
import img17 from "../assets/mylist/cimg54.jpg";
import img18 from "../assets/mylist/cimg55.jpg";

const initialItems = [
  { id: 1, title: "", src: img1 },
  { id: 2, title: "", src: img2 },
  { id: 3, title: "", src: img3 },
  { id: 4, title: "", src: img4 },
  { id: 5, title: "", src: img5 },
  { id: 6, title: "", src: img6 },
  { id: 7, title: "", src: img7 },
  { id: 8, title: "", src: img8 },
  { id: 9, title: "", src: img9 },
  { id: 10, title: "", src: img10 },
  { id: 12, title: "", src: img12 },
  { id: 13, title: "", src: img13 },
  { id: 14, title: "", src: img14 },
  { id: 15, title: "", src: img15 },
  { id: 16, title: "", src: img16 },
  { id: 17, title: "", src: img17 },
  { id: 18, title: "", src: img18 },
];

export default function MyList() {
  const navigate = useNavigate();
  const [items, setItems] = useState(initialItems);

  return (
    <div style={{ background: "#141414", minHeight: "100vh", color: "white", fontFamily: "Arial" }}>

      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", padding: "16px 50px", display: "flex", alignItems: "center", gap: "28px", background: "black", zIndex: 1000, boxSizing: "border-box" }}>
        <div style={{ color: "#E50914", fontSize: "2rem", fontWeight: "900", letterSpacing: "3px" }}>KASHFLIX</div>
        <span onClick={() => navigate("/home")} style={{ fontSize: "0.95rem", cursor: "pointer", color: "rgba(255,255,255,0.75)" }}>Home</span>
        <span style={{ fontSize: "0.95rem", cursor: "pointer", color: "white" }}>My List</span>
        <span onClick={() => navigate("/shows")} style={{ fontSize: "0.95rem", cursor: "pointer", color: "rgba(255,255,255,0.75)" }}>Shows</span>
      </nav>

      <div style={{ padding: "80px 40px 40px" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>My List</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
          {items.map((item) => (
            <div key={item.id} style={{ position: "relative", borderRadius: "8px", overflow: "hidden", cursor: "pointer", background: "#222" }}>
              <img src={item.src} alt={item.title} style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "12px" }}>
                <h3 style={{ fontSize: "1rem" }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}