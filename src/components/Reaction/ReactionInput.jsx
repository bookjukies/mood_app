import React from 'react'

function ReactionInput() {
  return (
    <div className='fixed bottom-8 w-3/4'>
        <textarea
            className=" flex-1 w-full min-h-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Why do you feel this way?"
        ></textarea>
    </div>
  )
}

export default ReactionInput