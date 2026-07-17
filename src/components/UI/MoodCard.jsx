import React from 'react'
import { useNavigate } from "react-router-dom"

function MoodCard({emoji, label, id}) {
    const navigate = useNavigate()
    
  return (
    <div className='
        flex 
        flex-col 
        gap-2 
        p-6
        text-center 
        rounded-xl 
        transition-all 
        duration-300 
        hover:-translate-y-2
        bg-white/10
        backdrop-blur-xl
        border border-white/10
        shadow-2xl
        hover:shadow-purple-900
        hover:bg-purple-950
    '>
        <div className="">{emoji}</div>
        <p>{label}</p>
        <p className="flex items-center justify-center gap-2 text-green-500">
            <span className=" text-xl mb-1">●</span>
            <span>90 online</span>
        </p>
        <button  onClick={() => navigate("/mood/post")}  className='bg-white/15 rounded-xl border border-dashed border-indigo-600 py-1' >Select</button>
    </div>
  )
}

export default MoodCard