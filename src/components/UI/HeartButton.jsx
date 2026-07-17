import React from 'react'
    import { CiHeart } from "react-icons/ci";

function HeartButton() {
  return (


<div className="flex self-center justify-self-end">
  <button
    className="
      group
      p-2
      rounded-full
      bg-white/15
      border border-white/10
      backdrop-blur-md
      transition-all duration-200
      hover:bg-green-500/25
      hover:border-green-400/30
      active:bg-green-700/40
      active:scale-95
      active:translate-y-[1px]
      active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.25)]
    "
  >
    <CiHeart
      className="
        text-xl
        text-white/80
        transition-colors duration-200
        group-hover:text-green-300
        group-active:text-green-100
      "
    />
  </button>
</div>
  )
}

export default HeartButton