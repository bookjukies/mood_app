import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CiCloudOn} from "react-icons/ci";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { TfiGallery } from "react-icons/tfi";
import { IoChatboxOutline } from "react-icons/io5";
import { RiHome9Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";


import NavButton from './UI/NavButton';

function SideBar({setInterecting}) {
    const navigate = useNavigate()
  return (
    <div className='bg-white/5  w-1/3 mr-8 h-screen flex flex-col p-4 text-start justify-between pb-16'>
        <div className="">
            <div className="flex items-center gap-2">
                <span className='bg-purple-300 rounded-full p-1.5'><CiCloudOn /></span>
                <div className="font-semibold">
                    <div className="">
                        <p>Feeling: Mood</p>
                    </div>
                    <p className='text-xs'>Handle</p>
                </div>
            </div>

            <div className="flex flex-col gap-1 py-4">
            <NavButton
                icon={RiHome9Line}
                label="Home"
                active
                onClick={() => navigate('/mood/feed')}
            />

            <NavButton
                icon={IoChatboxOutline}
                label="Chats"
                onClick={() => navigate('/mood/chat')}
            />

            <NavButton
                icon={VscGitPullRequestGoToChanges}
                label="Requests"
                onClick={() => console.log("Requests")}
            />

            <NavButton
                icon={TfiGallery}
                label="Gallery"
                onClick={() => console.log("Gallery")}
            />
            </div>
        </div>

        <div className="py-8">
            <button
                className="w-full group flex items-center justify-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 bg-green-400"
            >
                <FaPlus className="text-lg text-black transition-colors group-hover:text-white" />
                <span className="text-black transition-colors group-hover:text-white">
                    New Post
                </span>
            </button>
        </div>

    </div>
  )
}

export default SideBar