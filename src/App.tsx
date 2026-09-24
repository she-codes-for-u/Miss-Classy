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
      <p> Discover cute, affordable and carefully
        everyday products of  your choice 
      </p>
      <div>
     
<button className="newsletter-button">Subscribe to our Newsletter</button>
      </div>
  </div>
  </>
);
}

export default App;
