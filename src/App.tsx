import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/layout/Navbar";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
  <>
    <Navbar />
    <div className="hero-image-container" />
    <div className="hero-text-box">
      <h1>Everthing classy
        All In One Place.
      </h1>
      <p> Discover cute, affordable and carefully selected 
        everyday products of  your choice 
      </p>
      <div>
     
<button className="newsletter-button">Subscribe to our Newsletter</button>
      </div>
  </div>
<section className="category-section">
  <h2>Shop by Category</h2>
<div className="category-grid">
  {[
    { name: "Accessories", image: "/images/Accercories.png" },
    { name: "Beauty", image: "/images/Beauty.png" },
    { name: "Student Essentials", image: "/images/back-to-school.png" },
    { name: "Home & Lifestyle", image: "/images/Home&lifestyle.png" },
    { name: "Shoes & Bags", image: "/images/bags&shoe.png" },
    { name: "Nails", image: "/images/nails.png" },
    { name: "Skin Care", image: "/images/skin-care.jpeg" },
    { name: "Clothing", image: "/images/Clothing.png" },
  ].map((category) => (
    <button className="category-card" key={category.name}>
      <div className="category-image">
        <img src={category.image} alt={category.name} loading="eager"  />
      </div>
      <span>{category.name}</span>
    </button>
  ))}
</div>
</section>

<section className="reach-section">
  <h2>Connect with us</h2>

  <div className="social-links">
    <a href="#" aria-label="WhatsApp" className="whatsapp">
      <svg viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.16-1.35A10 10 0 1 0 12 2Z" />
        <path d="M8.5 7.5c.2-.2.5-.2.7.1l1 1.6c.1.2.1.4-.1.6l-.6.6c.6 1.1 1.5 2 2.6 2.6l.6-.6c.2-.2.4-.2.6-.1l1.6 1c.3.2.3.5.1.7l-.5.6c-.3.4-.8.6-1.3.5-3.1-.7-5.5-3.1-6.2-6.2-.1-.5.1-1 .5-1.3l.6-.5Z" fill="white" />
      </svg>
    </a>

    <a href="#" aria-label="Instagram" className="instagram">
      <svg viewBox="0 0 24 24">
        <defs>
          <linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#F58529" />
            <stop offset="50%" stopColor="#DD2A7B" />
            <stop offset="100%" stopColor="#8134AF" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#instagram-gradient)" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="white" />
      </svg>
    </a>

    <a href="#" aria-label="Facebook" className="facebook">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#1877F2" />
        <path d="M13.5 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.5 1.6-1.5h1.3V4c-.2 0-1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V10H9v3h2v7h2.5Z" fill="white" />
      </svg>
    </a>
  </div>
</section>
</>
);
}

export default App;