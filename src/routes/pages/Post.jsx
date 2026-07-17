import React from 'react'
import { useNavigate } from "react-router-dom"

function Post() {
        const navigate = useNavigate()
  return (
    <div className='h-screen text-white px-32'>
        <h2 className='my-4 font-medium'>Feeling Calm</h2>
        <h3 className='font-semibold text-2xl my-4'>What's on your mind?</h3>
        <p className='font-normal my-4'>This remains completely anonymous. Share as much or as little as you need.</p>

        <textarea
            className="w-full min-h-40 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Why do you feel this way?"
        ></textarea>

        <div className="flex justify-center gap-4 my-4">
            <button className='bg-white/10 px-4 py-1 rounded-full font-medium'>Add image</button>
            <button className='bg-white/10 px-4 py-1 rounded-full font-medium'>Voice Note</button>
            <button className='bg-white/10 px-4 py-1 rounded-full font-medium'>Choose GIF</button>
        </div>

        <button onClick={() => navigate("/mood/feed")} className='bg-white/10 px-8 py-1 rounded my-8'>Vent</button>
        <p>Encrypted And Private</p>
    </div>
  )
}

export default Post