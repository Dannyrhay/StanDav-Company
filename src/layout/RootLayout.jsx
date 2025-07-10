import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  // Check if the current page is one that should have a full-screen hero.
  const hasFullScreenHero = location.pathname === "/" || location.pathname === "/about";

  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      {/*
        The 'relative' class is applied when there's a full-screen hero.
        The conditional padding-top is applied to all other pages.
      */}
      <main className={hasFullScreenHero ? 'relative' : 'pt-20'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;