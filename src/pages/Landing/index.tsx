import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const LandingPage = () => {
  const hero = useRef(null);

  useEffect(() => {
    const typed = new Typed(hero.current, {
      strings: [
        "Crafting Immersive Experiences Through code",
        "Crafting Immersive Experiences Through HTML",
        "Crafting Immersive Experiences Through CSS",
      ],
      smartBackspace: true,
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      //   tech.destroy();
      typed.destroy();
    };
  }, []);
  return (
    <div style={{ textAlign: "left" }}>
      <span style={{ color: "white", fontSize: 90 }} ref={hero} />
      {/* <span style={{ color: "ActiveBorder", fontSize: 20 }} ref={techs} /> */}
    </div>
  );
};
