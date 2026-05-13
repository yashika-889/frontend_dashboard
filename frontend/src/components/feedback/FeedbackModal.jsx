import { useState } from "react";
import { FiX, FiCheckCircle, FiMessageSquare, FiSend } from "react-icons/fi";

const FeedbackModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Rating/Type, 2: Message, 3: Success
  const [rating, setRating] = useState(0);
  const [type, setType] = useState("suggestion");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const feedback = {
      id: Date.now(),
      rating,
      type,
      message,
      timestamp: new Date().toISOString(),
    };

    // Store in localStorage
    const existingFeedback = JSON.parse(localStorage.getItem("hintro_feedback") || "[]");
    localStorage.setItem("hintro_feedback", JSON.stringify([...existingFeedback, feedback]));

    setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setRating(0);
    setMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-bold text-gray-900">
            {step === 3 ? "Feedback Received" : "Send Feedback"}
          </h3>
          <button onClick={handleClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <FiX size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                  Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Suggestion", "Bug", "Question", "Other"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t.toLowerCase())}
                      className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all ${
                        type === t.toLowerCase()
                          ? "bg-blue-50 border-blue-200 text-blue-600 shadow-sm"
                          : "bg-white border-gray-100 text-gray-600 hover:border-gray-200"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                  How are we doing?
                </label>
                <div className="flex items-center justify-between px-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onClick={() => setRating(s)}
                      className={`text-2xl transition-transform hover:scale-110 ${
                        rating >= s ? "grayscale-0" : "grayscale opacity-30"
                      }`}
                    >
                      {["😞", "😐", "😊", "😃", "🤩"][s - 1]}
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={rating === 0}
                onClick={() => setStep(2)}
                className="w-full bg-[#111827] text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Tell us more
                </label>
                <textarea
                  autoFocus
                  placeholder="Share your thoughts or describe the issue..."
                  className="w-full h-32 p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none transition-all"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-50 text-gray-600 py-3 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!message.trim()}
                  className="flex-[2] bg-[#111827] text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  <FiSend size={16} />
                  Submit Feedback
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="py-8 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2">
                <FiCheckCircle size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Thank you!</h4>
              <p className="text-sm text-gray-500 max-w-[240px]">
                Your feedback helps us make Hintro better for everyone.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 bg-[#111827] text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
