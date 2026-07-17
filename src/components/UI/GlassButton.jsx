// GlassButton.jsx
import React from 'react'

const colorMap = {
  green:
    'bg-green-400/20 border-green-300/30 text-green-100 hover:bg-green-400/30 active:bg-green-500/35 active:scale-95',

  purple:
    'bg-purple-400/20 border-purple-300/30 text-purple-100 hover:bg-purple-400/30 active:bg-purple-500/35 active:scale-95',

  red:
    'bg-red-400/20 border-red-300/30 text-red-100 hover:bg-red-400/30 active:bg-red-500/35 active:scale-95',

  blue:
    'bg-blue-400/20 border-blue-300/30 text-blue-100 hover:bg-blue-400/30 active:bg-blue-500/35 active:scale-95',

  amber:
    'bg-amber-400/20 border-amber-300/30 text-amber-100 hover:bg-amber-400/30 active:bg-amber-500/35 active:scale-95',

  gray:
    'bg-gray-400/20 border-gray-300/30 text-gray-100 hover:bg-gray-400/30 active:bg-gray-500/35 active:scale-95',

  indigo:
    'bg-indigo-400/20 border-indigo-300/30 text-indigo-100 hover:bg-indigo-400/30 active:bg-indigo-500/35 active:scale-95',

  cyan:
    'bg-cyan-400/20 border-cyan-300/30 text-cyan-100 hover:bg-cyan-400/30 active:bg-cyan-500/35 active:scale-95',

  teal:
    'bg-teal-400/20 border-teal-300/30 text-teal-100 hover:bg-teal-400/30 active:bg-teal-500/35 active:scale-95',

  pink:
    'bg-pink-400/20 border-pink-300/30 text-pink-100 hover:bg-pink-400/30 active:bg-pink-500/35 active:scale-95',

  rose:
    'bg-rose-400/20 border-rose-300/30 text-rose-100 hover:bg-rose-400/30 active:bg-rose-500/35 active:scale-95',

  orange:
    'bg-orange-400/20 border-orange-300/30 text-orange-100 hover:bg-orange-400/30 active:bg-orange-500/35 active:scale-95',

  lime:
    'bg-lime-400/20 border-lime-300/30 text-lime-100 hover:bg-lime-400/30 active:bg-lime-500/35 active:scale-95',

  emerald:
    'bg-emerald-400/20 border-emerald-300/30 text-emerald-100 hover:bg-emerald-400/30 active:bg-emerald-500/35 active:scale-95',

  sky:
    'bg-sky-400/20 border-sky-300/30 text-sky-100 hover:bg-sky-400/30 active:bg-sky-500/35 active:scale-95',

  violet:
    'bg-violet-400/20 border-violet-300/30 text-violet-100 hover:bg-violet-400/30 active:bg-violet-500/35 active:scale-95',

  slate:
    'bg-slate-400/20 border-slate-300/30 text-slate-100 hover:bg-slate-400/30 active:bg-slate-500/35 active:scale-95',

  zinc:
    'bg-zinc-400/20 border-zinc-300/30 text-zinc-100 hover:bg-zinc-400/30 active:bg-zinc-500/35 active:scale-95',
}

function GlassButton({
  color = 'green',
  active = false,
  children,
  className = '',
  ...props
}) {
  return (
    <button
      className={`
        backdrop-blur-md border rounded-full px-4 py-1.5
        transition-all duration-200
        ${colorMap[color]}
        ${
          active
            ? 'bg-white/30 scale-95 shadow-[inset_0_3px_8px_rgba(0,0,0,0.25)]'
            : ''
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default GlassButton