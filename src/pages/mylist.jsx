import { useState } from "react";
import img1 from "../assets/mylist/img39.jpeg";
import img2 from "../assets/mylist/cimg40.jpeg";
import img3 from "../assets/mylist/img41.jpeg";
import img4 from "../assets/mylist/cimg42.jpeg";
import img5 from "../assets/mylist/img43.jpeg";
import img6 from "../assets/mylist/cimg44.jpeg";
import img7 from "../assets/mylist/img45.jpeg";
import img8 from "../assets/mylist/img46.jpeg";
import img9 from "../assets/mylist/cimg47.jpeg";
import img10 from "../assets/mylist/cimg48.jpeg";
import img11 from "../assets/mylist/img49.jpeg";

import dyn from "../assets/watchlist/dynasty.jpeg";
import gg from "../assets/watchlist/gossipgirl.jpg";
import hm from "../assets/watchlist/himym.jpeg";
import rd from "../assets/watchlist/Riverdale.jpeg";
import tvd from "../assets/watchlist/tvd.jpeg";
import tk from "../assets/watchlist/tkb.jpeg";
import tb from "../assets/watchlist/tkb2.jpeg";
import tv from "../assets/watchlist/tkb3.jpeg";

const initialItems = [
  { id: 1, title: "Memory 1", src: img1 },
  { id: 2, title: "Memory 2", src: img2 },
  { id: 3, title: "Memory 3", src: img3 },
  { id: 4, title: "Memory 4", src: img4 },
  { id: 5, title: "Memory 5", src: img5 },
  { id: 6, title: "Memory 6", src: img6 },
  { id: 7, title: "Memory 7", src: img7 },
  { id: 8, title: "Memory 8", src: img8 },
  { id: 9, title: "Memory 9", src: img9 },
  { id: 10, title: "Memory 10", src: img10 },
  { id: 11, title: "Memory 11", src: img11 },
];

const watchlist = [
  { title: "Dynasty", image: dyn, link: "https://www.netflix.com/title/80156387" },
  { title: "Gossip Girl", image: gg, link: "https://www.netflix.com/title/70145479" },
  { title: "How I Met Your Mother", image: hm, link: "https://www.hotstar.com/in/shows/how-i-met-your-mother/14560" },
  { title: "Riverdale", image: rd, link: "https://www.netflix.com/title/80128069" },
  { title: "The Vampire Diaries", image: tvd, link: "https://www.netflix.com/title/70143865" },
  { title: "The Kissing Booth", image: tk, link: "https://www.netflix.com/title/80143556" },
  { title: "The Kissing Booth 2", image: tb, link: "https://www.netflix.com/title/81013628" },
  { title: "The Kissing Booth 3", image: tv, link: "https://www.netflix.com/title/81013629" },
];

export default function MyList() {
  const [items, setItems] = useState(initialItems);
  const remove = (id) => setItems(items.filter(item => item.id !== id));

  return (
    <div style={{ background: "#141414", minHeight: "100vh", color: "white", fontFamily: "Arial" }}>

      <div style={{ padding: "40px 40px 20px" }}>
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

      <div style={{ padding: "20px 40px 40px" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "18px", fontWeight: "700" }}>Shows to Watch 🎬</h2>
        <div style={{ display: "flex", gap: "15px", overflowX: "auto", paddingBottom: "15px", scrollbarWidth: "none" }}>
          {watchlist.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", flexShrink: 0 }}>
              <div
                style={{ width: "160px", height: "240px", borderRadius: "10px", overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform 0.3s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)", display: "flex", alignItems: "flex-end", padding: "10px", fontSize: "0.85rem", fontWeight: "600" }}>
                  {item.title}
                </div>
                <div style={{ position: "absolute", top: "8px", right: "8px", background: "#E50914", padding: "2px 6px", borderRadius: "4px", fontSize: "0.65rem", fontWeight: "700" }}>
                  NETFLIX
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}