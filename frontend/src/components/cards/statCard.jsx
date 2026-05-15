function StatCard({ label, value, Icon, color, iconColor }) {
  return (
    <div className="flex items-center w-full h-[64px] md:h-[80px] bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] md:rounded-[10px] p-[8px] md:p-[15px] gap-[8px] md:gap-[16px] shadow-sm">
      {/* Icon Box */}
      <div 
        className="w-[32px] md:w-[50px] h-[32px] md:h-[50px] rounded-[6px] md:rounded-[10px] flex items-center justify-center shrink-0"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" style={{ color: iconColor }} />
      </div>

      {/* Text Container */}
      <div className="flex flex-col justify-center overflow-hidden min-w-0">
        <span className="text-[10px] md:text-[16px] font-medium text-black/60 md:text-black/80 leading-tight tracking-[0.1px] md:tracking-[0.3px] truncate">
          {label}
        </span>
        <span className="text-[13px] md:text-[20px] font-bold text-black/90 leading-tight tracking-[0.1px] md:tracking-[0.3px] truncate">
          {value}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
