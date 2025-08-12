import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// --- Icon Components ---
const MenuIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> </svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg> );

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const heroPaths = ["/", "/about", "/services", "/listings", "/contact"];
    const hasFullScreenHero = heroPaths.includes(location.pathname);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        if (hasFullScreenHero) {
            window.addEventListener("scroll", handleScroll);
        } else {
            setIsScrolled(false);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasFullScreenHero]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Properties', path: '/listings' },
        { name: 'Contact', path: '/contact' },
    ];

    const headerClasses = hasFullScreenHero
        ? `p-4 fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`
        : 'bg-white p-4 sticky top-0 z-50 shadow-md';

    const navTextColor = hasFullScreenHero && !isScrolled ? 'text-white' : 'text-neutral-800';
    const underlineColor = hasFullScreenHero && !isScrolled ? 'bg-white' : 'bg-amber-500';

    const navLinks = (
        <>
            {navItems.map(item => (
                 <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setShowMenu(false)}
                    // Use NavLink's render prop to access isActive state
                    className="relative group py-2"
                >
                    {({ isActive }) => (
                        <>
                            <span className={`transition-colors duration-300 ${isActive ? 'font-bold' : ''}`}>
                                {item.name}
                            </span>
                            {/* This span is the animated underline */}
                            <span
                                className={`
                                    absolute bottom-0 left-0 block w-full h-0.5
                                    ${underlineColor}
                                    transform transition-transform duration-300 ease-in-out
                                    origin-left  /* This is the key change for left-to-right animation */
                                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                `}
                            >
                            </span>
                        </>
                    )}
                </NavLink>
            ))}
        </>
    );

    return (
        <header className={headerClasses}>
            <nav className="container mx-auto flex justify-between items-center">
                {/* Left Column: Takes up available space */}
                <div className="flex-1">
                    <NavLink to="/" className={`text-2xl font-bold ${navTextColor}`}>
                        StanDav
                    </NavLink>
                </div>

                {/* Center Column: Contains the navigation links */}
                <div className={`hidden md:flex flex-none justify-center space-x-8 items-center ${navTextColor}`}>
                    {navLinks}
                </div>

                {/* Right Column: Takes up available space and pushes content to the end */}
                <div className="flex-1 flex justify-end">
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className={`text-2xl ${navTextColor}`}>
                            {showMenu ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* MODIFICATION START: Mobile menu container with slide-down animation */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${showMenu ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className={`flex flex-col items-center space-y-4 rounded-lg p-4 text-center ${hasFullScreenHero && !isScrolled ? 'bg-black bg-opacity-80 text-white' : 'bg-white text-neutral-800'}`}>
                    {navLinks}
                </div>
            </div>
            {/* MODIFICATION END */}
        </header>
    );
};

export default Navbar;
