"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Header background change on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Scroll-triggered slow fade-in observer
    const faders = document.querySelectorAll(".fade-in");
    const fadeOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, fadeOptions);

    faders.forEach((fader) => {
      fadeObserver.observe(fader);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      faders.forEach((fader) => {
        fadeObserver.unobserve(fader);
      });
    };
  }, []);

  return (
    <>
      {/* Clean Navigation Header */}
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-main">Airlink Castle</span>
            <span className="logo-sub">Kerala · India</span>
          </a>
          <div className="nav-links">
            <a href="#suites">Suites</a>
            <a href="#dining">Dining</a>
            <a href="#arrival">Arrival</a>
          </div>
          <a href="https://wa.me/919961111111" className="cta-button">
            Reserve
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section id="hero">
        <div className="hero-image-bg"></div>
        <div className="hero-content">
          <div className="hero-subline">COCHIN · KERALA · INDIA</div>
          <h1 className="hero-headline">Some arrivals are destinations in themselves.</h1>
          <a href="#suites" className="cta-button">
            Reserve a Suite
          </a>
        </div>
      </section>

      {/* 2. The Castle Editorial Section */}
      <section id="castle" className="fade-in">
        <div className="castle-layout">
          <div className="castle-quote-container">
            <blockquote className="castle-quote">
              Built at the threshold of arrival and stillness, Airlink Castle is where Kerala's most{" "}
              <span className="gold-word">discerning</span> travellers choose to pause.
            </blockquote>
          </div>
          <div className="castle-visual">
            <img
              src="/images/hotel/presidential-livingroom.jpg"
              alt="Hotel Airlink Castle architectural detail"
            />
          </div>
        </div>
      </section>

      {/* 3. Suites Section */}
      <section id="suites" className="fade-in">
        <div className="section-title-wrapper">
          <div className="section-title">The Accommodations</div>
        </div>

        {/* Suite 1: Wayfarer */}
        <div className="suite-row">
          <div className="suite-image">
            <img src="/images/hotel/transit-room.jpg" alt="The Wayfarer Suite at Hotel Airlink Castle" />
          </div>
          <div className="suite-info">
            <h3 className="suite-name">The Wayfarer Suite</h3>
            <p className="suite-description">
              For those between worlds. A considered refuge with all that a single night demands.
            </p>
            <span className="suite-action">Rates and availability on request</span>
            <a href="https://wa.me/919961111111" className="suite-action gold-link">
              Enquire
            </a>
          </div>
        </div>

        {/* Suite 2: Castle Suite */}
        <div className="suite-row reverse">
          <div className="suite-image">
            <img src="/images/hotel/executive-room.jpg" alt="The Castle Suite at Hotel Airlink Castle" />
          </div>
          <div className="suite-info">
            <h3 className="suite-name">The Castle Suite</h3>
            <p className="suite-description">
              Unhurried space for the guest who expects more than comfort — they expect taste.
            </p>
            <span className="suite-action">Rates and availability on request</span>
            <a href="https://wa.me/919961111111" className="suite-action gold-link">
              Enquire
            </a>
          </div>
        </div>

        {/* Suite 3: Sovereign */}
        <div className="suite-row">
          <div className="suite-image">
            <img
              src="/images/hotel/presidential-bedroom.jpg"
              alt="The Sovereign Suite at Hotel Airlink Castle"
            />
          </div>
          <div className="suite-info">
            <h3 className="suite-name">The Sovereign</h3>
            <p className="suite-description">
              The castle's finest room. Reserved for those who require nothing explained.
            </p>
            <span className="suite-action">Rates and availability on request</span>
            <a href="https://wa.me/919961111111" className="suite-action gold-link">
              Enquire
            </a>
          </div>
        </div>
      </section>

      {/* 4. Dining Section */}
      <section id="dining" className="fade-in">
        <div className="section-title-wrapper">
          <div className="section-title">The Culinary Venues</div>
        </div>

        <div className="dining-grid">
          {/* Venue 1 */}
          <div className="dining-card">
            <div className="dining-image">
              <img src="/images/hotel/royal-dine.jpg" alt="Royal Dine Experience" />
            </div>
            <h3 className="dining-name">Royal Dine</h3>
            <p className="dining-description">
              <em>The art of the long dinner.</em> Kerala's finest produce, composed with intention.
            </p>
          </div>

          {/* Venue 2 */}
          <div className="dining-card">
            <div className="dining-image">
              <img src="/images/hotel/castle-cafe.jpg" alt="Castle Cafe Experience" />
            </div>
            <h3 className="dining-name">Castle Café</h3>
            <p className="dining-description">
              <em>For mornings that belong to you.</em> Coffee, light meals, and no reason to hurry.
            </p>
          </div>

          {/* Venue 3 */}
          <div className="dining-card">
            <div className="dining-image">
              <img src="/images/hotel/simply-fish.jpg" alt="Simply Fish Experience" />
            </div>
            <h3 className="dining-name">Simply Fish</h3>
            <p className="dining-description">
              <em>The sea, honestly prepared.</em> A Kerala table the way it should be.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Editorial Stats Section */}
      <section id="stats" className="fade-in">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-num">45</span>
            <span className="stat-desc">Suites, each distinct</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">3</span>
            <span className="stat-desc">Dining experiences, none ordinary</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">∞</span>
            <span className="stat-desc">Minutes to departure, when ready</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">1</span>
            <span className="stat-desc">Standard. Exceptional.</span>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials" className="fade-in">
        <div className="testimonial-container">
          <span className="quote-mark">“</span>
          <blockquote className="testimonial-text">
            To find such absolute silence so close to departure is rare. The woodwork is exceptional,
            but it is the unhurried service that remains with you.
          </blockquote>
          <div className="testimonial-author">Sarah Jenkins · London</div>
        </div>
      </section>

      {/* 7. Arrival Section */}
      <section id="arrival" className="fade-in">
        <h2 className="arrival-headline">Arrival</h2>
        <p className="arrival-address">
          We are where Kerala begins — and where your journey pauses.
          <br />
          Near Cochin International Airport, Nedumbassery, Athani P.O., Kochi, Kerala 683585, India
        </p>
        <div className="arrival-actions">
          <a
            href="https://maps.google.com/?q=Hotel+Airlink+Castle+Kochi"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Open in Maps
          </a>
          <a href="https://wa.me/919961111111" className="arrival-link">
            Speak with our team →
          </a>
        </div>
      </section>

      {/* 8. Footer Section */}
      <footer>
        <div className="footer-logo">Airlink Castle</div>
        <div className="footer-divider"></div>
        <div className="footer-links">
          <a href="#suites">Suites</a>
          <a href="#dining">Dining</a>
          <a href="#arrival">Arrival</a>
        </div>
        <div className="footer-copy">© 2026 Hotel Airlink Castle. All rights reserved.</div>
      </footer>
    </>
  );
}
