import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return <div>Miss Classy</div>;
};

export default App;
