import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className="text-black">Hello Developers</h1>
      {/* Element to display typing strings */}
      <span ref={el}></span>
    </div>
  );
}

