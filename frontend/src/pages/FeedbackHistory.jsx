import { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";

const FeedbackHistory = ({ onFeedbackClick }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("hintro_feedback") || "[]");
    setFeedbackList(data);
  }, []);

  return (
    <div className="flex flex-col flex-1 px-6 md:pl-[72px] md:pr-[48px] w-full max-w-full overflow-x-hidden">
      {/* Header Section (Frame 347) */}
      <div className="mt-[32px] md:mt-[45px] w-full max-w-[1010px]">
        <p className="text-[12px] font-medium text-black/40 leading-[14px] tracking-[0.3px] font-['Inter']">
          <span className="hidden md:inline">Browse your previous feedback submissions</span>
          <span className="md:hidden">Review your previous feedbacks</span>
        </p>
      </div>

      {/* History Table Section (Frame 358) */}
      <div className="mt-[40px] md:mt-[66px] w-full max-w-[1010px] mb-20 overflow-x-auto pb-4 custom-scrollbar">
        {/* Desktop View Table Header - Always Visible on Desktop */}
        <div className="hidden md:flex flex-col min-w-[1010px]">
          <div className="relative w-full h-[45px] bg-[#F8F9FD] border-[0.25px] border-[#00000080] rounded-t-[16px] px-[16px] py-[12px]">
            <div className="relative w-[978px] h-[21px] font-['Inter']">
              <span className="absolute left-0 top-0 text-[14px] font-medium text-black/40 tracking-[0.3px]">Title</span>
              <span className="absolute left-[222px] top-0 text-[14px] font-medium text-black/40 tracking-[0.3px]">Rating</span>
              <span className="absolute left-[444px] top-0 text-[14px] font-medium text-black/40 tracking-[0.3px]">Description</span>
              <span className="absolute left-[692px] top-0 text-[14px] font-medium text-black/40 tracking-[0.3px]">Date</span>
              <span className="absolute left-[923px] top-0 text-[14px] font-medium text-black/40 tracking-[0.3px] whitespace-nowrap">Time</span>
            </div>
          </div>

          {feedbackList.length === 0 ? (
            /* Desktop Empty State Body (Frame 347) */
            <div className="relative w-full h-[241px] bg-white border-b-[0.25px] border-x-[0.25px] border-[#00000080] rounded-b-[16px] flex flex-col items-center">
              {/* Frame 427: No feedbacks yet */}
              <div className="absolute top-[67px] w-[298px] h-[17px] flex items-center justify-center">
                <p className="text-[14px] font-medium text-black tracking-[0.5px] font-['Inter'] text-center">
                  No feedbacks yet
                </p>
              </div>
              {/* Frame 429: Give Feedback Button */}
              <button 
                onClick={onFeedbackClick}
                className="absolute top-[109px] w-auto min-w-[97px] md:min-w-[119px] h-[31px] border-[0.5px] border-black rounded-[4px] flex items-center justify-center px-[12px] md:px-[24px] hover:bg-black/40 transition-all font-['Inter']"
              >
                <span className="text-[10px] md:text-[12px] font-medium text-black tracking-[-0.16px]">
                  Give Feedback
                </span>
              </button>
            </div>
          ) : (
            /* Desktop Filled Table Body */
            <div className="flex flex-col w-full bg-white border-b-[0.25px] border-x-[0.25px] border-[#00000080] rounded-b-[16px] p-[12px_16px] gap-[16px]">
              {feedbackList.map((item) => (
                <div key={item.id} className="relative w-[978px] h-[28px] shrink-0 font-['Inter']">
                  <span className="absolute left-0 top-[7px] text-[14px] font-normal text-black tracking-[0.3px] w-[200px] truncate">
                    {item.title}
                  </span>
                  <span className="absolute left-[222px] top-[7px] text-[14px] font-normal text-black tracking-[0.3px]">
                    {item.rating}
                  </span>
                  <span className="absolute left-[446px] top-[7px] text-[14px] font-normal text-black tracking-[0.3px] w-[230px] truncate" title={item.description}>
                    - {item.description}
                  </span>
                  <span className="absolute left-[691px] top-[7px] text-[14px] font-normal text-black tracking-[0.3px]">
                    {item.date}
                  </span>
                  <span className="absolute left-[922px] top-[7px] text-[14px] font-normal text-black tracking-[0.3px] whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden flex-col w-full min-w-0">
          {feedbackList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-[100px] gap-6 w-full font-['Inter']">
              <p className="text-[14px] font-medium text-black tracking-[0.5px] text-center">
                No feedbacks yet
              </p>
              <button 
                onClick={onFeedbackClick}
                className="w-[120px] h-[32px] border-[0.5px] border-black rounded-[4px] flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <span className="text-[12px] font-normal text-black tracking-[0.5px]">
                  Give Feedback
                </span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-[12px] w-full">
              {feedbackList.map((item) => {
                const numericRating = parseInt(item.rating.split('/')[0]);
                return (
                  <div key={item.id} className="bg-white border border-black/5 rounded-[10px] p-[16px] flex flex-col gap-[8px] shadow-sm font-['Inter']">
                    <div className="flex justify-between items-center h-[20px]">
                      <h4 className="text-[16px] font-medium text-black tracking-[-0.2px]">Feedback Title</h4>
                      <div className="flex items-center gap-[2px]">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg 
                            key={s} 
                            viewBox="0 0 24 24" 
                            className={`w-[14px] h-[14px] ${s <= numericRating ? "fill-[#F8C624]" : "fill-[#D9D9D9]"}`}
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] font-normal text-black/40 leading-[13px] tracking-[0.1px] truncate max-w-full">
                      {item.description}
                    </p>
                    <div className="flex items-center mt-[2px]">
                      <span className="text-[10px] font-medium text-[#6686FF] tracking-[0.3px]">
                        {item.date} . {item.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackHistory;
