import React from 'react'
import { CiCloudOn} from "react-icons/ci";

function ReactionComment() {
  return (
    <div className="rounded-xl p-4 flex flex-col gap-4 justify-end items-start bg-white/5 border border-white/10">

        <div className="flex text-start gap-3 rounded-xl items-center">
            <div className="flex justify-center items-center">
                <span className='bg-purple-300 rounded-full p-1.5'><CiCloudOn /></span>
            </div>
            <div className="flex-1">
                <h2 className=''>Handle</h2>
            </div>
            <div className=""> • 1h ago</div>
        </div>

        <p className='text-justify'> 
            I spent the evening by the lake today.
        </p>

        <div className="flex gap-4">
            <p>42 Support</p>
            <p>12 Reflections</p>
        </div>
    </div>
  )
}

export default ReactionComment