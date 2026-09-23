import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const phrase = "Sustained with grace";
    let index = 0;

    const typing = setInterval(() => {
      setText(phrase.slice(0, index + 1));
      index += 1;

      if (index >= phrase.length) {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="splash-screen">
      <p>{text}</p>
    </section>
  );
};

export default SplashScreen;
