import React from "react";

function NavButton({
  icon: Icon,
  label,
  active = false,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        group flex w-full items-center gap-2 rounded-xl px-3 py-2
        transition-all duration-200 active:scale-[0.98]
        ${
          active
            ? "bg-white/10 border border-green-400/20 text-green-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
            : "text-white/80 hover:bg-white/5 hover:text-green-400"
        }
        ${className}
      `}
    >
      <Icon
        className={`
          text-lg transition-colors
          ${active ? "text-green-400" : "group-hover:text-green-400"}
        `}
      />

      <span
        className={`
          transition-colors
          ${active ? "text-green-400" : "group-hover:text-green-400"}
        `}
      >
        {label}
      </span>
    </button>
  );
}

export default NavButton;