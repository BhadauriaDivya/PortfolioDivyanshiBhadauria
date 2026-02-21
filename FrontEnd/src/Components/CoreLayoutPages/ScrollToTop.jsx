import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Optional: Scroll to top on any internal link click
    const handleLinkClick = (e) => {
      const target = e.target.closest("a"); // Find nearest anchor tag
      if (target && target.getAttribute("href")?.startsWith("/")) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;