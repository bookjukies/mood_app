import React from 'react'
import GlassButton from '../UI/GlassButton'
import { CiCloudOn} from "react-icons/ci";

function UserBanner() {
  return (
    <div className="flex text-start p-3 gap-3 rounded-xl items-center bg-white/10 border border-white/15">
        <div className="flex justify-center items-center">
            <span className='bg-purple-300 rounded-full p-1.5'><CiCloudOn /></span>
        </div>
        <div className="flex-1">
            <h2 className='text-2xl font-semibold'>Mood</h2>
            <p className='text-xs'>Showing 148 people in your mood server</p>
        </div>
        <div className="flex gap-4 ">
            <GlassButton color='purple'>My Feed</GlassButton>
            <GlassButton color='blue'>Global Feed</GlassButton>
        </div>
    </div>
  )
}

export default UserBanner