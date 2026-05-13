import { FiX, FiCalendar, FiMessageSquare } from "react-icons/fi";
import { formatRelativeDate } from "../../utils/formatters";

const FeedbackHistoryModal = ({ isOpen, onClose }) => {
  const feedbackList = JSON.parse(localStorage.getItem("hintro_feedback") || "[]").reverse();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <h3 className="text-base font-bold text-gray-900">Feedback History</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <FiX size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {feedbackList.length === 0 ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center">
                <FiMessageSquare size={32} />
              </div>
              <p className="text-sm text-gray-500">No feedback sent yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {feedbackList.map((item) => (
                <div key={item.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <FiCalendar size={12} />
                      {formatRelativeDate(item.timestamp)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    "{item.message}"
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className={`text-sm ${item.rating >= s ? "grayscale-0" : "grayscale opacity-20"}`}>
                        {["😞", "😐", "😊", "😃", "🤩"][s - 1]}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackHistoryModal;
