import React from 'react'
import { useNavigate } from "react-router-dom"

import { FaRegFaceMeh } from "react-icons/fa6"

function Home() {
  const navigate = useNavigate()

  return (
    <div className='flex justify-center items-center flex-col aurora animated-bg gap-4 text-white'>
        
        <div className="emo-log-color bg-purple-950 p-4 border-2 border-purple-900 rounded-full"><FaRegFaceMeh size={50}/></div>

        <div className="glass-card mt-8 mb-24">
            <h1>Mood Social</h1>
            <h2>A digital sanctuary for emotional honesty.</h2>
        </div>

        <button 
          onClick={() => navigate("/mood")} 
          className='border-2 border-dashed font-medium py-2 px-6 rounded-4xl text-purple-600 bold bg-purple-950 border-violet-900 hover:bg-purple-500 hover:text-purple-900'>
            GET STARTED
        </button>

        <div className="dot-row">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
        
        <p>Connecting to collective calm</p>

    </div>
  )
}

export default Home