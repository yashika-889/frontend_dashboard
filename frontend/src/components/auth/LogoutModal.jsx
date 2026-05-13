import { FiX } from "react-icons/fi";

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-[400px] rounded-[16px] shadow-2xl p-8 flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Content */}
        <div className="flex flex-col gap-2 mb-10">
          <h3 className="text-[20px] font-bold text-black tracking-[0.3px]">
            Leaving already?
          </h3>
          <p className="text-[12px] font-normal text-black/60 leading-relaxed tracking-[0.3px]">
            You can log back in anytime to continue your meetings with Hintro.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="flex-1 h-[40px] border border-gray-200 rounded-[8px] text-[14px] font-medium text-black hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="flex-1 h-[40px] bg-black rounded-[8px] text-[14px] font-medium text-white hover:bg-gray-900 transition-all shadow-sm"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
