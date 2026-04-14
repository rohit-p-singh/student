import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { CardContainer } from "./components/CardContainer";
import "./styles/style.css";
import Footer from "./components/Footer";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar open={open} setOpen={setOpen} />

        <div className={`main ${open ? "shift" : ""}`}>
          <Hero />

          <CardContainer open={open} />
          
        </div>
      </div>
      <Footer />
    </>
  );
}