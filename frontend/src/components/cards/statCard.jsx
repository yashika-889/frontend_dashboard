function StatCard({ label, value, Icon, color, iconColor }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white border border-black/20 rounded-[10px] w-full md:w-[240px] h-[72px] md:h-[80px] hover:shadow-md transition-shadow">
      {/* Icon Box */}
      <div 
        className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-[10px] flex items-center justify-center shrink-0"
        style={{ backgroundColor: color }}
      >
        <Icon size={20} className="md:w-[24px] md:h-[24px]" style={{ color: iconColor }} />
      </div>

      {/* Text Info */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[10px] md:text-[11px] font-medium text-black/60 truncate uppercase tracking-tight">
          {label}
        </span>
        <span className="text-[14px] md:text-[16px] font-bold text-black truncate">
          {value}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
