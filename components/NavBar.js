/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const NavBAr = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <nav className={showNav ? "nav-color" : ""}>
      <div className="image-container">
        <img src="/images/netflix-logo-png-2584.png" alt="Logo" />
      </div>

      <button className="signin">Sign In</button>
    </nav>
  );
};

export default NavBAr;
