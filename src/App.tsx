import React from "react";
import "./App.css"; // Assume you have CSS styling in this file
import { Link } from "react-scroll";
import team_pic from "./img/team_pic.png";
import logo from "./img/logo.png"; // Lägg till din logga här
import Typewriter from "./Typewriter"; // Import the Typewriter component

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        {/* Logga till vänster */}
        <img src={logo} alt="Company Logo" className="App-logo" />

        {/* Navigeringsmenyn */}
        <nav>
          <ul>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="demo" smooth={true} duration={500}>
                Demo
              </Link>
            </li>
            <li>
              <Link to="presentation" smooth={true} duration={500}>
                Presentation
              </Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={500}>
                Team
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Quote */}
      <section className="hero">
        <h1>"Your legal success is our priority"</h1>
      </section>

      {/* Moving Image Section */}
      <section className="moving-image-section">
        {/* Typewriter Section */}
        <section className="typewriter-section">
          <Typewriter />
        </section>

        {/* Floating Geometric Shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              At our company, we are dedicated to providing exceptional legal
              services. With a focus on integrity, trust, and results, we help
              clients navigate complex legal landscapes with confidence.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Company Image"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo-section">
        <h2>Demo</h2>
        <div className="demo-content">
          <div className="demo-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="demo-text">
            <p>
              Our demo video showcases how our services can make a difference
              for you. Watch and learn more about the solutions we offer.
            </p>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="presentation-section">
        <h2>Presentation</h2>
        <div className="presentation-content">
          <div className="presentation-text">
            <p>
              In this presentation, we provide a deep dive into our services,
              case studies, and success stories. See how we help our clients
              achieve their goals.
            </p>
          </div>
          <div className="presentation-video">
            <iframe
              src="https://www.youtube.com/embed/qFWhLo0sWfQ?start=3642"
              title="Presentation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-content">
          <div className="team-text">
            <p>
              Our team is composed of skilled professionals with years of
              experience in delivering top-notch legal services. Each member
              brings unique expertise to ensure the success of our clients.
            </p>
          </div>
          <div className="team-image">
            <img src={team_pic} alt="Team Image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
