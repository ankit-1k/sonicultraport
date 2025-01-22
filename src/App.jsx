import React, { useState, useEffect, useRef } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import axios from "axios";

function App() {
  const [load, upadateLoad] = useState(true);
  const [announcement, setAnnouncement] = useState([]);
  const modalRef = useRef(null);

  const fetchAnnouncement = async () => {
    try {
      const response = await axios.get(
        "https://sonicadminbackend.vercel.app/api/getannouncement"
      );

      const filteredAnnouncements = response.data.filter(
        (item) => item.category === "ankitkumarpanda"
      );

      setAnnouncement(filteredAnnouncements);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  useEffect(() => {
    if (announcement.length > 0 && modalRef.current) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    }
  }, [announcement]);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        ref={modalRef}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Announcement
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {announcement.map((item, index) => (
                <p key={index}>{item.desc}</p>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="*" element={<Navigate to="/"/>} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
