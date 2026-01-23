import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/ASF_PHOTO.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Flights", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gray-200/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <img
              src={logo}
              alt="AirFareScope Logo"
              className="h-10 w-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-lg font-semibold text-black transition-transform duration-300 group-hover:scale-105">
              <span className="text-4xl">A</span>ir<span className="text-2xl">F</span>are
              <span className="text-gray-600">Scope</span>
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-2xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-700 hover:text-black hover:scale-105"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-gray-200/70 backdrop-blur border border-gray-300 transition-transform duration-300 hover:scale-110"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden backdrop-blur-xl bg-gray-200/85 transition-all duration-300">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-gray-900/90 text-white rounded-xl"
                      : "text-gray-700 hover:text-black hover:scale-105"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
