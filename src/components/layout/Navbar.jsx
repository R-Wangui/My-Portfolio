import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = ({ variant = "default" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current page from URL
  const getCurrentPage = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname === "/productdesign") return "uiux";
    if (location.pathname === "/frontend") return "frontend";
    return "home";
  };

  const currentPage = getCurrentPage();

  // Navigation links with React Router paths
  const navLinks = [
    { name: "Home", path: "home", route: "/" },
    { name: "UI/UX Design", path: "uiux", route: "/productdesign" },
    { name: "Frontend Dev", path: "frontend", route: "/frontend" },
  ];

  const handleNavClick = (route) => {
    navigate(route);
    setMenuOpen(false);
  };

  // Variant styles
  const variants = {
    default: {
      bgScrolled: "bg-slate-950/90 backdrop-blur-md shadow-lg",
      bgTransparent: "bg-transparent",
      brandGradient: "from-cyan-400 to-purple-500",
      textColor: "text-slate-300",
      textHover: "hover:text-white",
      activeColor: "text-cyan-400",
      activeBg: "bg-slate-800",
      menuBg: "bg-slate-900/95",
      // brandText: "Wangui",
      // icon: null,
    },
    uiux: {
      bgScrolled: "bg-white/80 backdrop-blur-md shadow-lg",
      bgTransparent: "bg-transparent",
      brandGradient: "from-purple-600 to-pink-600",
      textColor: "text-slate-700",
      textHover: "hover:text-purple-600",
      activeColor: "text-purple-600",
      activeBg: "bg-purple-50",
      menuBg: "bg-white/95",
      // brandText: "Wangui",
      // icon: null,
    },
    frontend: {
      bgScrolled: "bg-slate-950/90 backdrop-blur-md border-b border-slate-800",
      bgTransparent: "bg-transparent",
      brandGradient: "text-cyan-400",
      textColor: "text-slate-400",
      textHover: "hover:text-cyan-400",
      activeColor: "text-cyan-400",
      activeBg: "bg-slate-800",
      menuBg: "bg-slate-900/95 border-b border-slate-800",
      brandText: "Wangui",
      // brandSuffix: "/dev",
      // icon: Terminal,
      // mono: true,
    },
  };

  const style = variants[variant];
  const Icon = style.icon;

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? style.bgScrolled : style.bgTransparent
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <motion.button
            className={`text-2xl font-bold cursor-pointer flex items-center gap-2 ${
              variant === "frontend" ? "font-mono" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick("/")}
          >
            {Icon && <Icon size={20} />}
            <span
              className={`bg-gradient-to-r ${style.brandGradient} bg-clip-text text-transparent`}
            >
              {style.brandText}
              {style.brandSuffix && (
                <span className="text-slate-500">{style.brandSuffix}</span>
              )}
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex space-x-8 ${
              variant === "frontend" ? "font-mono text-sm" : ""
            }`}
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.path}
                onClick={() => handleNavClick(link.route)}
                className={`transition-colors relative ${
                  currentPage === link.path
                    ? style.activeColor
                    : `${style.textColor} ${style.textHover}`
                }`}
                whileHover={{ y: -2 }}
              >
                {variant === "frontend" ? (
                  <>
                    {/* <span className="text-cyan-400">&lt;</span> */}
                    {link.name.toLowerCase().replace(" ", "_")}
                    {/* <span className="text-cyan-400">/&gt;</span> */}
                  </>
                ) : (
                  link.name
                )}
                {link.path === currentPage && variant === "default" && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${style.textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-md ${style.menuBg} ${
              variant === "frontend" ? "font-mono" : ""
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.route)}
                className={`block w-full text-left px-4 py-3 ${
                  link.path === currentPage
                    ? `${style.activeColor} ${style.activeBg}`
                    : style.textColor
                } ${style.textHover}`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

Navbar.propTypes = {
  variant: PropTypes.oneOf(["default", "uiux", "frontend"]),
};

export default Navbar;
