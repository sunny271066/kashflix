import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import heroImg from "../assets/hero/img38.jpg";

/* TOP 10 */
import img18 from "../assets/top10/img18.jpg";
import img19 from "../assets/top10/img19.jpg";
import img20 from "../assets/top10/img20.jpg";
import img21 from "../assets/top10/img21.jpg";
import img22 from "../assets/top10/img22.jpg";
import img23 from "../assets/top10/img23.jpg";
import img24 from "../assets/top10/img24.jpg";
import img25 from "../assets/top10/img25.jpg";
import img26 from "../assets/top10/img26.jpg";
import img27 from "../assets/top10/img27.jpg";

/* POPULAR */
import img8 from "../assets/mylist/cimg40.jpeg";
import img9 from "../assets/mylist/img49.jpeg";
import img10 from "../assets/mylist/cimg44.jpeg";
import img11 from "../assets/mylist/cimg47.jpeg";
import img12 from "../assets/mylist/cimg48.jpeg";
import img13 from "../assets/mylist/img39.jpeg";
import img14 from "../assets/mylist/img43.jpeg";
import img15 from "../assets/mylist/img41.jpeg";
import img16 from "../assets/mylist/img45.jpeg";
import img17 from "../assets/mylist/img46.jpeg";

/* FRIENDS */
import img28 from "../assets/friends/img28.jpg";
import img29 from "../assets/friends/img29.jpg";
import img30 from "../assets/friends/img30.jpg";
import img31 from "../assets/friends/img31.jpg";
import img32 from "../assets/friends/img32.jpg";
import img33 from "../assets/friends/img33.jpg";
import img34 from "../assets/friends/img34.jpg";
import img35 from "../assets/friends/img35.jpg";
import img36 from "../assets/friends/img36.jpg";
import img37 from "../assets/friends/img37.jpg";

/* NOTIFICATIONS */
import not1 from "../assets/notifications/not1.png";
import not2 from "../assets/notifications/not2.jpeg";
import not3 from "../assets/notifications/not3.jpeg";

/* Shows and Movies */
import dyn from "../assets/watchlist/dynasty.jpeg";
import gg from "../assets/watchlist/gossipgirl.jpg";
import hm from "../assets/watchlist/himym.jpeg";
import rd from "../assets/watchlist/Riverdale.jpeg";
import tvd from "../assets/watchlist/tvd.jpeg";
import tk from "../assets/watchlist/tkb.jpeg";
import tb from "../assets/watchlist/tkb2.jpeg";
import tv from "../assets/watchlist/tkb3.jpeg";

/* Animation Hero*/ 
import p1 from "../assets/herocard/p1.jpg";
import p2 from "../assets/herocard/p2.jpg";
import p3 from "../assets/herocard/p3.jpg";
import p4 from "../assets/herocard/p4.jpg";
import p5 from "../assets/herocard/p5.jpg";
import p6 from "../assets/herocard/p6.jpeg";
import p7 from "../assets/herocard/p7.jpeg";

/* Continue watching */
import cw1 from "../assets/watchlist/cimg1.jpg";

const profiles = [
  { name: "Babes", emoji: "💖" },
  { name: "Honey", emoji: "🍯" },
  { name: "KBC",   emoji: "🎀" },
  { name: "🦷",    emoji: "🦷" },
];

export default function Home() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 700px)");
  const isTiny = useMediaQuery("(max-width: 430px)");

  const [showNotifs, setShowNotifs]       = useState(false);
  const [showProfiles, setShowProfiles]   = useState(false);
  const [activeProfile, setActiveProfile] = useState(profiles[0]);
  const [scrolled, setScrolled]           = useState(false);
  const [currentVideo, setCurrentVideo]   = useState(0);
  const [showMoreInfo, setShowMoreInfo]   = useState(false);
  

  const videos = ["/kash3.mp4"];
const [animationDone, setAnimationDone] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setAnimationDone(true), 2000); // 2s for fan animation
  return () => clearTimeout(timer);
}, []);

const heroCards = [p1, p2, p3, p4, p5, p6, p7];
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = () => { setShowNotifs(false); setShowProfiles(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const videoDurations = [15000];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo(prev => (prev + 1) % videos.length);
    }, videoDurations[currentVideo]);
    return () => clearInterval(interval);
  }, [currentVideo]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showMoreInfo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showMoreInfo]);

  const notifications = [
    { image: not3, title: "Chaos Era",        desc: "New episode dropped: 'She did what again?'", time: "2m ago" },
    { image: not1, title: "Emotional Damage", desc: "Continuing from where you left off...",       time: "1h ago" },
    { image: not2, title: "KBC Origins",      desc: "Reminder: This is still unresolved.",         time: "3h ago" },
  ];

  const top10 = [
    { title: "",   image: img18 },
    { title: "",        image: img19 },
    { title: "",      image: img20 },
    { title: "", image: img21 },
    { title: "",   image: img22 },
    { title: "",  image: img23 },
    { title: "",   image: img24 },
    { title: "",    image: img25 },
    { title: "",  image: img26 },
    { title: "",       image: img27 },
  ];

  const popular = [
    { title: "",  image: img8  },
    { title: "",  image: img9  },
    { title: "",  image: img10 },
    { title: "",  image: img11 },
    { title: "",  image: img12 },
    { title: "",  image: img13 },
    { title: "",  image: img14 },
    { title: "",  image: img15 },
    { title: "",  image: img16 },
    { title: "", image: img17 },
  ];

  const friends = [
    { title: "",       image: img28 },
    { title: "",     image: img29 },
    { title: "",          image: img30 },
    { title: "",       image: img31 },
    { title: "",    image: img32 },
    { title: "", image: img33 },
    { title: "",        image: img34 },
    { title: "",       image: img35 },
    { title: "",   image: img36 },
    { title: "",      image: img37 },
  ];

  const watchlist = [
    { title: "Dynasty",               image: dyn, link: "https://www.netflix.com/title/80156387" },
    { title: "Gossip Girl",           image: gg,  link: "https://www.netflix.com/title/70145479" },
    { title: "How I Met Your Mother", image: hm,  link: "https://www.hotstar.com/in/shows/how-i-met-your-mother/14560" },
    { title: "Riverdale",             image: rd,  link: "https://www.netflix.com/title/80128069" },
    { title: "The Vampire Diaries",   image: tvd, link: "https://www.netflix.com/title/70143865" },
    { title: "To Kill a Mockingbird", image: tk,  link: "" },
    { title: "tkb2",                  image: tb,  link: "" },
    { title: "tkb3",                  image: tv,  link: "" },
  ];

  const continueWatching = [
  { title: "", image: cw1, link: "" },  // add your link here
];

  

  const renderRow = (title, items) => (
  <div style={{ marginTop: isMobile ? "32px" : "45px", width: "100%" }}>
    <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.8rem", marginBottom: isMobile ? "12px" : "18px", fontWeight: "700" }}>{title}</h2>
    <div style={{ display: "flex", gap: isMobile ? "10px" : "15px", overflowX: "auto", paddingBottom: "15px", scrollbarWidth: "none", scrollSnapType: "x proximity" }}>
      {items.map((item, index) => (
        <div key={index} style={{
          minWidth: isMobile ? "46vw" : "210px", height: isMobile ? "290px" : "315px", maxHeight: isMobile ? "290px" : "none", borderRadius: isMobile ? "8px" : "10px",
          overflow: "hidden", position: "relative", flexShrink: 0,
          cursor: "pointer", transition: "0.3s ease", scrollSnapAlign: "start", background: "#111",
        }}>
         <img
  src={item.image}
  alt=""
  style={{
    width: "100%",
    height: "100%",
    objectFit: "fill",
    objectPosition: "center",
    display: "block"
  }}
/>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent 55%)",
            display: "flex", alignItems: "flex-end", padding: "15px",
            fontSize: isMobile ? "0.9rem" : "1rem", fontWeight: "600",
          }}>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  </div>
);
  const renderLinkRow = (title, items) => (
  <div style={{ marginTop: isMobile ? "32px" : "45px", width: "100%" }}>
    <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.8rem", marginBottom: isMobile ? "12px" : "18px", fontWeight: "700" }}>{title}</h2>
    <div style={{ display: "flex", gap: isMobile ? "10px" : "15px", overflowX: "auto", paddingBottom: "15px", scrollbarWidth: "none", scrollSnapType: "x proximity" }}>
      {items.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", flexShrink: 0 }}>
          <div style={{
            minWidth: isMobile ? "46vw" : "210px", height: isMobile ? "290px" : "315px", maxHeight: isMobile ? "290px" : "none", borderRadius: isMobile ? "8px" : "10px",
            overflow: "hidden", position: "relative",
            cursor: "pointer", transition: "0.3s ease", scrollSnapAlign: "start", background: "#111",
          }}>
           <img
  src={item.image}
  alt=""
  style={{
    width: "100%",
    height: "100%",
    objectFit: "fill",
    objectPosition: "center",
    display: "block"
  }}
/>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent 55%)",
              display: "flex", alignItems: "flex-end", padding: "15px",
              fontSize: isMobile ? "0.9rem" : "1rem", fontWeight: "600",
            }}>
              {item.title}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

  return (
    <div style={{
      width: "100%", minHeight: "100vh", background: "black",
      color: "white", overflowX: "hidden", fontFamily: "Arial, sans-serif",
    }}>

{/* ── MORE INFO MODAL ── */}
      {showMoreInfo && (
        <div
          onClick={() => setShowMoreInfo(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.75)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: isMobile ? "10px" : "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#181818",
              borderRadius: isMobile ? "10px" : "12px",
              width: "100%",
              maxWidth: "850px",
              maxHeight: isMobile ? "94vh" : "90vh",
              overflowY: "auto",
              position: "relative",
              scrollbarWidth: "none",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowMoreInfo(false)}
              style={{
                position: "absolute", top: "14px", right: "14px",
                zIndex: 10, background: "#181818", border: "none",
                color: "white", width: "36px", height: "36px",
                borderRadius: "50%", fontSize: "1.1rem",
                cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}
            >
              ✕
            </button>

            {/* Banner — conveyor belt */}
            <div style={{ position: "relative", width: "100%", height: isMobile ? "280px" : "420px", borderRadius: isMobile ? "10px 10px 0 0" : "12px 12px 0 0", overflow: "hidden" }}>
              <div style={{ display: "flex", position: "absolute", top: "50%", transform: "translateY(-50%)", animation: "scrollBelt 30s linear infinite" }}>
                {[...heroCards, ...heroCards].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    style={{
                      width: isMobile ? "190px" : "300px", height: isMobile ? "285px" : "450px",
                      objectFit: "cover", borderRadius: "10px",
                      marginRight: "20px", flexShrink: 0,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                  />
                ))}
              </div>
              {/* gradient over images */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, #181818 0%, transparent 60%)",
              }} />
              {/* Title over banner */}
              <div style={{ position: "absolute", bottom: isMobile ? "18px" : "24px", left: isMobile ? "18px" : "28px" }}>
                <h1 style={{ fontSize: isMobile ? "2.1rem" : "3rem", fontWeight: "900", margin: 0, lineHeight: 1 }}>Kashish</h1>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: isMobile ? "18px 18px 28px" : "20px 28px 36px" }}>

              {/* Play button row */}
              <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                <button style={{
                  flex: 1, padding: "12px", border: "none", borderRadius: "5px",
                  fontSize: "1rem", fontWeight: "700", cursor: "pointer",
                  background: "white", color: "black",
                }}>
                  ▶ Play
                </button>
              </div>

              {/* Two-column info — mirrors Netflix layout */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr", gap: isMobile ? "20px" : "28px" }}>

                {/* LEFT: badges + description */}
                <div>
                  {/* Year · Duration · Rating badges */}
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "14px", flexWrap: "wrap" }}>
                    <span style={{ color: "#46d369", fontWeight: "700", fontSize: "0.95rem" }}>2006</span>
                    <span style={{ color: "#bcbcbc", fontSize: "0.9rem" }}>20 Years</span>
                    <span style={{
                      border: "1px solid #888", padding: "1px 7px",
                      fontSize: "0.78rem", color: "#bcbcbc", borderRadius: "3px",
                    }}>U/A 16+</span>
                    <span style={{
                      border: "1px solid #888", padding: "1px 7px",
                      fontSize: "0.78rem", color: "#bcbcbc", borderRadius: "3px",
                    }}>HD</span>
                  </div>

                  {/* Description — EDIT THIS TEXT */}
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#ddd", margin: 0 }}>
                    Hi bro Wishing You The Happiest Birthday ever, I cant beleive I actually missed you growing up as a teenager but I'm really glad that I got to wish you on your 20th birthday atleast.I ve probably told you this  but your probably like the sweetest person ever.Even the day i texted u I never really thought that we would ever talk again let alone meet sm .I still remember the first time I ever saw you down when Rishi gave us a break, you were by the swings and you literally accepted me on ur spam the same day🤣🤣. It was so funny and then you voted on that st/tm thingy which i got to know years later was by mistake but ig u were so nice even then that u didnt wanna tell me despite knowing that I liked u and i even gave u a rose which u took so well🤣.U literally gave me sm tea on Saraf and my other school friends which prob no one ever gave considering how close i was to a few and ig u always looked out for me when i was so naive which I really appreciated. U literally gave me sm confidence to even talk to u on call cause i could never do it cause u were the only person till date whom i was ever shy of speaking to and you forced me by emotional blackmailing sm! and you lost sm of ur accent broo! its crazy how your way of talking just changed in a few years.U literally used to get whenever I was feeling low like my seniors farewell and stuff without even me telling u and u were really good at consoling (u arent now and i m better anyways)Even photochats were fine idk why u stopped.I still love how you yet get pissed at every small thing or pretend udk or didnt understand smthng when u very well did.Ig I just love to annoy u and it was like one of the biggest things i missed whenever we fought or werent talking at all. I just want you to know that even if i irritate u too much sometimes it doesnt mean i ve taken u for granted or smthng, u ll always be special to me and ik how much u must have thought it over b4 talking again which i truly appreciate.Ik u probably dont remember anything lol  but i never really did anything on any of your birthdays especially when ig u were expecting a lot or the most from me, idk prob i was really shy to even meet you and on a few of them we were just fighting lol and i kinda messed up this one as well by giving my gift too early, i was too panicky and was gonna go to pune but didnt thats another tale but ya, surprisingly i did have many ideas this year kinda a few yrs late but nvm, I just really hope u like this photo album thingy and I m really glad you're in my life and u mean a lot to me. Hope you had a blast and didnt let anyone ruin it.Also the play button doesnt work cause i didnt have any vid to put in..
              
                  </p>
                </div>

                {/* RIGHT: Cast / Genre / Tags */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
                  <div>
                    <span style={{ color: "#777" }}>Cast: </span>
                    <span style={{ color: "#ddd" }}>Kashish Saumil Bhansali</span>
                  </div>
                  <div>
                    <span style={{ color: "#777" }}>Genres: </span>
                    <span style={{ color: "#ddd" }}>Belgian Series, Horror Comedy</span>
                  </div>
                  <div>
                    <span style={{ color: "#777" }}>This show is: </span>
                    <span style={{ color: "#ddd" }}>Scary, Extremely Mean</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        padding: isMobile ? "12px 16px" : "16px 50px", display: "flex", justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center", zIndex: 1000,
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "10px" : 0,
        background: scrolled
          ? "black"
          : "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)",
        transition: "background 0.4s ease",
        boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "14px" : "28px", flexWrap: isMobile ? "wrap" : "nowrap", paddingRight: isMobile ? "78px" : 0 }}>
          <div style={{ color: "#E50914", fontSize: isMobile ? "1.35rem" : "2rem", fontWeight: "900", fontFamily: "'Stint Ultra Condensed', sans-serif", letterSpacing: isMobile ? "2px" : "3px", flexBasis: isMobile ? "100%" : "auto" }}>
            KASHFLIX
          </div>
          <span style={{ fontSize: isMobile ? "0.85rem" : "0.95rem", cursor: "pointer", color: "white" }}>Home</span>
          <span onClick={() => navigate("/mylist")} style={{ fontSize: isMobile ? "0.85rem" : "0.95rem", cursor: "pointer", color: "rgba(255,255,255,0.75)" }}>My List</span>
          <span onClick={() => navigate("/shows")} style={{ fontSize: isMobile ? "0.85rem" : "0.95rem", cursor: "pointer", color: "rgba(255,255,255,0.75)" }}>Shows</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "14px" : "22px", position: isMobile ? "absolute" : "static", top: isMobile ? "12px" : "auto", right: isMobile ? "16px" : "auto" }}>
          {/* BELL */}
          <div style={{ position: "relative" }}>
            <div
              onClick={(e) => { e.stopPropagation(); setShowNotifs(!showNotifs); setShowProfiles(false); }}
              style={{ cursor: "pointer", userSelect: "none", display: "flex", alignItems: "center" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </div>
            <div style={{
              position: "absolute", top: "-4px", right: "-4px",
              width: "9px", height: "9px", background: "#E50914", borderRadius: "50%",
              pointerEvents: "none",
            }} />
            {showNotifs && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute", top: "40px", right: 0, width: isMobile ? "calc(100vw - 32px)" : "340px",
                  maxWidth: "340px",
                  background: "#141414", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "8px", zIndex: 9999, overflow: "hidden",
                }}
              >
                <div style={{ padding: "14px 18px", fontWeight: "700", fontSize: "1rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  Notifications
                </div>
                {notifications.map((n, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "12px", padding: "14px 18px",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    alignItems: "center", cursor: "pointer", transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <img src={n.image} alt="" style={{ width: "60px", height: "45px", objectFit: "cover", borderRadius: "5px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "0.9rem" }}>{n.title}</div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "3px" }}>{n.desc}</div>
                      <div style={{ fontSize: "0.75rem", color: "#E50914", marginTop: "4px" }}>{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PROFILE */}
          <div style={{ position: "relative" }}>
            <div
              onClick={(e) => { e.stopPropagation(); setShowProfiles(!showProfiles); setShowNotifs(false); }}
              style={{
                cursor: "pointer", userSelect: "none",
                width: "36px", height: "36px", borderRadius: "6px",
                background: "rgba(255,255,255,0.12)",
                border: "2px solid rgba(255,255,255,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem",
              }}
            >
              {activeProfile.emoji}
            </div>
            {showProfiles && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute", top: "48px", right: 0, width: isMobile ? "180px" : "200px",
                  background: "#141414", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "8px", zIndex: 9999, overflow: "hidden", padding: "8px 0",
                }}
              >
                {profiles.map((p) => (
                  <div
                    key={p.name}
                    onClick={() => { setActiveProfile(p); setShowProfiles(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "10px 16px", cursor: "pointer", transition: "background 0.2s",
                      background: activeProfile.name === p.name ? "rgba(255,255,255,0.08)" : "transparent",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                    onMouseLeave={e => e.currentTarget.style.background = activeProfile.name === p.name ? "rgba(255,255,255,0.08)" : "transparent"}
                  >
                    <div style={{
                      width: "34px", height: "34px", borderRadius: "5px",
                      background: "rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.3rem", flexShrink: 0,
                    }}>
                      {p.emoji}
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: "500" }}>{p.name}</span>
                    {activeProfile.name === p.name && (
                      <span style={{ marginLeft: "auto", color: "#E50914", fontSize: "0.75rem" }}>●</span>
                    )}
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "8px", padding: "10px 16px" }}>
                  <div
                    onClick={() => { setShowProfiles(false); navigate("/"); }}
                    style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
                    onMouseEnter={e => e.currentTarget.style.color = "white"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                  >
                    Manage Profiles
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        width: "100%", minHeight: isMobile ? "720px" : "100vh", height: isMobile ? "auto" : "100vh", position: "relative",
        overflow: "hidden",
        display: "flex", alignItems: isMobile ? "flex-end" : "center", padding: isMobile ? "120px 20px 120px" : "0 80px", boxSizing: "border-box",
      }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", background: "#141414" }}>
  {!animationDone ? (
    /* FAN ANIMATION — 5 cards */
    [p1, p2, p3, p4, p5].map((img, i) => {
      const positions = [
        { x: -300, rotate: -15 },
        { x: -150, rotate: -8 },
        { x: 0, rotate: 0 },
        { x: 150, rotate: 8 },
        { x: 300, rotate: 15 },
      ];
      return (
        <img
          key={i}
          src={img}
          alt=""
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: isMobile ? "220px" : "400px", height: isMobile ? "440px" : "800px",
            objectFit: "cover", borderRadius: "10px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
            transform: `translate(-50%, -50%) translateX(${isMobile ? positions[i].x * 0.48 : positions[i].x}px) rotate(${positions[i].rotate}deg)`,
            transition: `transform 1s ease ${i * 0.1}s`,
            animation: `cardEntry${i} 1s ease ${i * 0.1}s forwards`,
          }}
        />
      );
    })
  ) : (
    /* CONVEYOR BELT — 7 cards looping */
    <div style={{ display: "flex", position: "absolute", top: "50%", transform: "translateY(-50%)", animation: "scrollBelt 30s linear infinite" }}>
      {[...heroCards, ...heroCards].map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          style={{
            width: isMobile ? "220px" : "400px", height: isMobile ? "440px" : "800px",
            objectFit: "cover", borderRadius: "10px",
            marginRight: isMobile ? "12px" : "20px", flexShrink: 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        />
      ))}
    </div>
  )}
</div>
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: isMobile ? "linear-gradient(to top, black 8%, rgba(0,0,0,0.75) 45%, transparent 75%)" : `
            linear-gradient(to top, black 5%, transparent 40%),
            linear-gradient(to right, rgba(0,0,0,0.85), transparent)
          `,
        }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "700px" }}>
          <h1 style={{ fontSize: isMobile ? "clamp(3.3rem, 18vw, 5rem)" : "7rem", fontWeight: "900", marginBottom: "15px", lineHeight: "0.9" }}>
            Kashish
          </h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.3rem", lineHeight: isMobile ? "1.55" : "1.7", marginBottom: isMobile ? "22px" : "30px", color: "rgba(255,255,255,0.9)", maxWidth: isMobile ? "32rem" : "none" }}>
            A limited series starring the most dramatic,
            iconic and emotionally expensive human alive.
          </p>
          <div style={{ display: "flex", gap: isMobile ? "10px" : "15px", flexWrap: "wrap" }}>
            <button style={{ padding: isMobile ? "12px 22px" : "14px 34px", border: "none", borderRadius: "5px", fontSize: isMobile ? "0.95rem" : "1rem", fontWeight: "700", cursor: "pointer", background: "white", color: "black", flex: isTiny ? "1 1 100%" : "0 0 auto" }}>
              ▶ Play
            </button>
            <button
              onClick={() => setShowMoreInfo(true)}
              style={{ padding: isMobile ? "12px 22px" : "14px 34px", border: "none", borderRadius: "5px", fontSize: isMobile ? "0.95rem" : "1rem", fontWeight: "700", cursor: "pointer", background: "rgba(109,109,110,0.7)", color: "white", flex: isTiny ? "1 1 100%" : "0 0 auto" }}
            >
              ⓘ More Info
            </button>
          </div>
        </div>
      </section>

      {/* ── ROWS ── */}
      <div style={{ width: "100%", padding: isMobile ? "0 16px 44px" : "0 60px 60px 60px", marginTop: isMobile ? "-84px" : "-120px", position: "relative", zIndex: 20, boxSizing: "border-box" }}>
        {renderRow("Top 10 Shows in India Today", top10)}
        {renderRow("See What's Popular", popular)}
        {renderRow('Because you watched "Yourself become friends with me"', friends)}
        {renderLinkRow("Continue Watching for Kashish", continueWatching)}
      </div>
      
  
      {/* ── FOOTER ── */}
      <footer style={{ textAlign: "center", padding: "60px 20px", opacity: 0.7, fontSize: "0.95rem" }}>
        Renewed for another season ❤️
      </footer>

    </div>
  );
}
