import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiMenu, FiLogOut } from "react-icons/fi";

function Navbar({ onMenuClick, currentUser, setCurrentUser, onLogoutClick, title = "Dashboard" }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between bg-white px-4 md:px-8 h-[64px] border-b border-brand-border shadow-[0px_0px_4px_rgba(0,0,0,0.25)] relative z-[100]">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <FiMenu size={24} className="text-black" />
        </button>
        <h1 className="text-[20px] md:text-[24px] font-medium text-black tracking-[0.3px] leading-[29px] truncate max-w-[200px] md:max-w-none">
          {title}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Watch Tutorial Button */}
        <button className="hidden sm:flex items-center justify-center gap-2 w-[136px] h-[32px] border border-black rounded-[4px] bg-white hover:bg-gray-50 transition-all">
          <div className="w-[12px] h-[12px] bg-black rounded-[2px]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
          <span className="text-[12px] font-normal text-black tracking-[-0.2px]">Watch Tutorial</span>
        </button>

        {/* User Profile Area */}
        <div className="relative" ref={dropdownRef}>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 p-1.5 rounded-xl cursor-pointer transition-all ${isDropdownOpen ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
          >
            <div className="w-[32px] h-[32px] md:w-[34.71px] md:h-[34.71px] rounded-full overflow-hidden bg-[#D9D9D9] border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <FiChevronDown 
              size={17} 
              className={`text-[#444750] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-100 rounded-xl shadow-2xl py-3 z-[110] animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 pb-2 mb-2 border-b border-gray-50">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Switch Demo View</p>
              </div>
              
              <button 
                onClick={() => { setCurrentUser("u1"); setIsDropdownOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-[13px] font-medium flex items-center justify-between hover:bg-gray-50 transition-colors ${currentUser === "u1" ? "text-blue-600 bg-blue-50/50" : "text-gray-700"}`}
              >
                <span>Empty State</span>
                {currentUser === "u1" && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
              </button>
              
              <button 
                onClick={() => { setCurrentUser("u2"); setIsDropdownOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-[13px] font-medium flex items-center justify-between hover:bg-gray-50 transition-colors ${currentUser === "u2" ? "text-blue-600 bg-blue-50/50" : "text-gray-700"}`}
              >
                <span>Filled State</span>
                {currentUser === "u2" && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
              </button>

              <div className="h-[1px] bg-gray-100 my-2" />

              <button 
                onClick={() => { onLogoutClick(); setIsDropdownOpen(false); }}
                className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-red-600 flex items-center gap-2 hover:bg-red-50 transition-all"
              >
                <FiLogOut size={16} />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;