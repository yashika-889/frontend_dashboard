import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiMenu, FiLogOut } from "react-icons/fi";
import profileImg from "../../assets/profile.jpg";

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
    <header className="flex items-center justify-between bg-white h-[64px] border-b border-[#E2E2E8] relative z-[100] w-full px-4 md:px-0">
      {/* Left Section */}
      <div className="flex items-center md:static w-10 md:w-auto">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <FiMenu size={24} className="text-black" />
        </button>
      </div>

      {/* Title - Centered on Mobile, Left on Desktop */}
      <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-1 md:pl-[48px]">
        <h1 className="text-[18px] md:text-[24px] font-medium text-black tracking-[0.3px] leading-tight truncate text-center md:text-left">
          {title}
        </h1>
      </div>

      {/* Right Section Group (Frame 412 + Right Side Menu) */}
      <div className="flex items-center gap-[20.83px] pr-[34.5px]">
        {/* Watch Tutorial Button (Frame 412) */}
        <button className="hidden sm:flex items-center justify-center gap-[13px] w-[136px] h-[32px] border border-black rounded-[4px] bg-white px-[12px] py-[6px] hover:bg-gray-50 transition-all shrink-0">
          <div className="w-[20px] h-[20px] bg-black rounded-[2px]" style={{ clipPath: 'polygon(20% 10%, 20% 90%, 85% 50%)' }} />
          <span className="text-[12px] font-normal text-black tracking-[-0.2px] leading-[15px] whitespace-nowrap">Watch Tutorial</span>
        </button>

        {/* User Information Area */}
        <div className="relative" ref={dropdownRef}>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-[10.41px] cursor-pointer transition-all ${isDropdownOpen ? 'opacity-80' : 'hover:opacity-80'}`}
          >
            <div className="w-[34.71px] h-[34.71px] rounded-full overflow-hidden bg-[#D9D9D9] shrink-0 border-[0.5px] border-black/10">
              <img
                src={profileImg}
                alt="User avatar"
                className="w-full h-full object-cover"
                style={{ 
                  width: '43.39px', 
                  height: '65.09px',
                  marginLeft: '-2.6px',
                  marginTop: '-6.94px',
                  maxWidth: 'none',
                  objectPosition: 'center 20%'
                }}
              />
            </div>
            <FiChevronDown 
              size={17.36} 
              className={`text-[#444750] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-100 rounded-xl py-3 z-[110] animate-in fade-in slide-in-from-top-2 duration-200">
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