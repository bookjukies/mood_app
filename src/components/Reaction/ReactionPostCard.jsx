import React from 'react'
import { CiCloudOn} from "react-icons/ci";

function ReactionPostCard() {
  return (
    <div className="rounded-xl p-4 flex flex-col gap-4 justify-end items-start bg-white/5 border border-green-500/15">
        <div className="flex text-start gap-3 rounded-xl items-center">
            <div className="flex justify-center items-center">
                <span className='bg-purple-300 rounded-full p-1.5'><CiCloudOn /></span>
            </div>
            <div className="flex-1">
                <h2 className='text-2xl font-semibold'>Handle</h2>
                <p className='text-xs'>Feeling Calm • 2h ago</p>
            </div>
        </div>
        <p className='text-justify'> 
            I spent the evening by the lake today. 
            No phones, no notifications, just the sound of the water hitting the stones. 
            It’s strange how much we forget to just... exist. 
            Everything feels so much quieter now.
        </p>

        <div className="flex gap-4">
            <p>42 Support</p>
            <p>12 Reflections</p>
        </div>
    </div>
  )
}

export default ReactionPostCard