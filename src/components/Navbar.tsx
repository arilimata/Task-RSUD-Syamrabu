import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icon hamburger dan close

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "Rekam Medik", path: "/rekam-medik" },
    { name: "Pendapatan Parkir", path: "/pendapatan-parkir" },
    { name: "SKM", path: "/skm" },
    { name: "Harmoni", path: "/harmoni" },
    { name: "Sakip", path: "/sakip" },
  ];

  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const found = tabs.find((tab) => location.pathname.includes(tab.path));
    if (found) setActive(found.name);
  }, [location.pathname]);

  return (
    <div className="w-full shadow-sm bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
        <p className="text-3xl md:text-4xl font-bold text-[#6f6f6f]">
          <span className="text-[#249c83]">MY</span>SYAMRABU
        </p>

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-2/5 border border-[#249c83] rounded-full overflow-hidden bg-white shadow-sm">
          <input
            className="flex-1 px-4 py-2 outline-none"
            placeholder="Search..."
          />
          <img
            src="./src/assets/search-icon.svg"
            className="p-2 cursor-pointer hover:scale-110 transition-transform duration-200"
          />
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 ml-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Tabs */}
      <nav className="relative w-full border-t border-gray-200">
        {/* Desktop Tabs */}
        <ul className="hidden md:flex w-full">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`relative flex-1 text-center py-3 cursor-pointer transition-all duration-300
                ${
                  active === tab.name
                    ? "bg-linear-to-r from-[#3dc8b2] to-[#8eeebc] text-[#02582e] font-semibold shadow-md"
                    : "bg-[#e6f0ef] text-[#3d3d3d] hover:bg-[#34b5a0]/30 hover:text-[#00783e]"
                }`}
            >
              {tab.name}
              {active === tab.name && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#077b43] rounded-full"></span>
              )}
            </li>
          ))}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 rounded-full"></span>
        </ul>

        {/* Mobile Tabs */}
        {mobileOpen && (
          <ul className="flex flex-col md:hidden w-full bg-white shadow-md">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                onClick={() => {
                  navigate(tab.path);
                  setMobileOpen(false);
                }}
                className={`py-3 px-4 border-b border-gray-200 cursor-pointer transition-colors duration-200
                  ${
                    active === tab.name
                      ? "bg-linear-to-r from-[#3dc8b2] to-[#8eeebc] text-[#02582e] font-semibold"
                      : "text-[#3d3d3d] hover:bg-[#34b5a0]/30 hover:text-[#00783e]"
                  }`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
