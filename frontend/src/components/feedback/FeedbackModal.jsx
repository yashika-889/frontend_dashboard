import { useState } from "react";
import { FiArrowLeft, FiStar, FiX } from "react-icons/fi";

const FeedbackModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setRating(0);
    setHoveredRating(0);
    setMessage("");
    setIsSubmitted(false);
    onClose();
  };

  const handleSubmit = () => {
    if (rating > 0 && message.trim().length > 0) {
      const now = new Date();
      
      // Formatting date: e.g. "15th May 2026"
      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'long' });
      const year = now.getFullYear();
      const suffix = (day % 10 === 1 && day !== 11) ? 'st' : (day % 10 === 2 && day !== 12) ? 'nd' : (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
      const formattedDate = `${day}${suffix} ${month} ${year}`;

      // Formatting time: e.g. "5:00 pm"
      const formattedTime = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      }).toLowerCase();

      const newFeedback = {
        id: Date.now(),
        title: "My Feedback",
        rating: `${rating}/5`,
        description: message,
        date: formattedDate,
        time: formattedTime
      };

      const existingFeedback = JSON.parse(localStorage.getItem("hintro_feedback") || "[]");
      localStorage.setItem("hintro_feedback", JSON.stringify([newFeedback, ...existingFeedback]));

      setIsSubmitted(true);
    }
  };

  const hasRating = rating > 0;
  const isHighRating = rating >= 4;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-[2px] animate-in fade-in duration-200 p-4">
      {isSubmitted ? (
        /* Acknowledgement View (Frame 342 / 367) */
        <div className="bg-white w-full max-w-[557px] h-auto md:h-[364px] min-h-[300px] rounded-[8px] p-[24px] md:p-[32px] flex flex-col items-center justify-center relative animate-in zoom-in-95 duration-300">
          {/* Close Icon (Top Right) */}
          <button 
            onClick={handleClose}
            className="absolute top-[16px] right-[16px] md:top-[24px] md:right-[24px] w-[20px] h-[20px] flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <FiX size={18} className="text-black" strokeWidth={2.5} />
          </button>

          {/* Frame 340 Content */}
          <div className="flex flex-col items-center gap-[32px] md:gap-[56px] w-full md:w-[506px]">
            {/* Success Badge (Frame 357) */}
            <div className="flex items-center justify-center w-[80px] h-[80px] md:w-[104px] md:h-[104px] bg-[rgba(255,215,0,0.1)] border-[6px] md:border-[10px] border-[rgba(255,215,0,0.2)] rounded-full">
               <div className="flex items-center justify-center w-[50px] h-[50px] md:w-[64px] md:h-[64px] bg-[rgba(255,215,0,0.2)] border-[12px] md:border-[20px] border-[rgba(255,215,0,0.3)] rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" className="md:w-[40px] md:h-[40px]">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            {/* Thank You Text (Frame 300) */}
            <div className="flex flex-col items-center gap-[4px] md:gap-[2px] w-full md:w-[506px]">
              <h3 className="text-[18px] md:text-[20px] font-medium text-black leading-[24px] tracking-[0.3px] font-['Inter'] text-center">
                Thank you for your feedback!!
              </h3>
              <p className="w-full max-w-[383px] text-[11px] md:text-[12px] font-normal text-black/40 leading-[15px] text-center tracking-[0.3px] font-['Inter']">
                Our team reviews every suggestion to improve AI responses, workflows, and overall experience.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Form View */
        <div 
          className={`bg-white w-full max-w-[577px] rounded-[8px] p-[24px] md:p-[32px] flex flex-col items-center animate-in zoom-in-95 duration-200 relative transition-all duration-300 ${
            hasRating ? "h-auto md:h-[414px]" : "h-auto md:h-[286px]"
          }`}
        >
          {/* Frame 340 */}
          <div 
            className={`flex flex-col items-start w-full md:w-[506px] transition-all duration-300 ${
              hasRating ? "gap-[24px] md:gap-[32px]" : "gap-[32px] md:gap-[40px]"
            }`}
          >
            {/* Frame 300: Title + Subtext */}
            <div className="flex flex-col items-start gap-[2px] w-full md:w-[506px] self-stretch">
              <h3 className="w-full md:w-[506px] text-[18px] md:text-[20px] font-medium text-black leading-[24px] tracking-[0.3px] font-['Inter']">
                Give Feedback
              </h3>
              <p className="w-full md:w-[506px] text-[11px] md:text-[12px] font-normal text-black/40 leading-[15px] tracking-[0.3px] font-['Inter']">
                Describe your experience using Hintro...
              </p>
            </div>

            {/* Frame 338/301: Stars Section */}
            <div className="flex flex-col items-center w-full md:w-[506px] self-stretch">
              <div className="flex flex-row justify-center items-center gap-[8px] md:gap-[16px] w-full md:w-[264px] h-[40px]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    onMouseEnter={() => setHoveredRating(s)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(s)}
                    className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex items-center justify-center transition-all"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      fill={(hoveredRating || rating) >= s ? "#F8C624" : "#D9D9D9"}
                      className="w-full h-full transition-colors duration-200"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Conditional Text Area (Frame 310) */}
            {hasRating && (
              <div className="flex flex-col items-start gap-[2px] w-full md:w-[506px] h-auto animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="w-full md:w-[506px] text-[11px] md:text-[12px] font-medium text-black/40 leading-[15px] tracking-[0.3px] font-['Inter']">
                  {isHighRating ? "What did you like the most?" : "What frustrated you or felt confusing?"}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full md:w-[506px] h-[100px] md:h-[121px] border border-[#E3E9EF] rounded-[4px] p-3 text-[12px] font-normal text-black outline-none focus:border-black/20 transition-all resize-none"
                  placeholder="..."
                />
              </div>
            )}

            {/* Frame 339: Buttons Section */}
            <div className="flex flex-row justify-between items-center w-full md:w-[506px] h-[34px] self-stretch mt-4 md:mt-auto">
              {/* Frame 311: Back Button */}
              <button 
                onClick={handleClose}
                className="flex flex-row justify-center items-center py-[6px] md:py-[8px] px-[10px] md:px-[14px] gap-[6px] md:gap-[10px] w-auto min-w-[70px] md:w-[84px] h-[34px] bg-white border border-black/50 rounded-[4px] hover:bg-gray-50 transition-all"
              >
                <FiArrowLeft size={13} className="text-black md:w-[13.62px]" />
                <span className="text-[11px] md:text-[12px] font-medium text-black tracking-[0.3px] font-['Poppins']">
                  Back
                </span>
              </button>

              {/* button1: Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!hasRating || message.trim().length === 0}
                className={`flex flex-row justify-center items-center py-[6px] md:py-[8px] px-[10px] md:px-[14px] gap-[6px] md:gap-[10px] w-auto min-w-[70px] md:w-[73px] h-[34px] rounded-[4px] transition-all ${
                  hasRating && message.trim().length > 0 
                    ? "bg-black hover:bg-gray-900" 
                    : "bg-black/50 cursor-not-allowed"
                }`}
              >
                <span className="text-[11px] md:text-[12px] font-medium text-white tracking-[0.3px] font-['Poppins']">
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackModal;
