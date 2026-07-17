import React from 'react'
import { useNavigate } from "react-router-dom"
import { SiOllama } from "react-icons/si";
import { IoChatboxOutline } from "react-icons/io5";
import HeartButton from '../UI/HeartButton';
import GlassButton from '../UI/GlassButton';

function PostCard({setInterecting}) {
      const navigate = useNavigate()
  return (
    <div className="rounded-xl p-4 flex flex-col gap-4 justify-end items-start bg-white/5 border border-white/10">
            <div className="flex gap-4">
                <div className="flex justify-center items-center">
                    <span className='bg-purple-300 rounded-lg p-2.5'><SiOllama /></span>
                </div>
                <div className="text-justify">
                    <p className='font-semibold'>Handle</p>
                    <p className='text-xs'>12 minutes ago</p>
                </div>
            </div>
            <p className='text-justify'> 
                I spent the evening by the lake today. 
                No phones, no notifications, just the sound of the water hitting the stones. 
                It’s strange how much we forget to just... exist. 
                Everything feels so much quieter now.
            </p>
            
            <div className="flex flex-1 gap-1 w-full justify-between ">
                <div className="flex gap-4">
                    <GlassButton color='green'><IoChatboxOutline /></GlassButton>
                    <GlassButton onClick={()=> setInterecting(true)} color='purple'>Interect</GlassButton>
                </div>
                <div className="flex self-center justify-self-end"><HeartButton /></div>
            </div>

    </div>
  )
}

export default PostCard