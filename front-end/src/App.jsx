import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import TipForm from "./components/TipForm";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#profile">Profile</a>
          </li>
          <li className="nav-item">
            <a href="#tips">Tips</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Header />
      <main>
        <ProfileCard
          name="Firefly"
          bio="A front end developer who loves to create beautiful websites."
          imageUrl="https://avatars.githubusercontent.com/u/77844703?v=4"
        />
        <TipForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
