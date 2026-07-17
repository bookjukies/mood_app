import React,{useState} from 'react'
import { CiCloudOn, CiHeart} from "react-icons/ci";

import GlassButton from '../../components/UI/GlassButton';
import PostCard from '../../components/Feed/PostCard';
import UserBanner from '../../components/Feed/UserBanner';
import SideBar from '../../components/SideBar';
import FeedInterection from './FeedInterection';



function Feed() {
  const [isInterecting, setIsInterecting] = useState(false)

  const setInterecting = (state) =>{
    console.log(state);
    
    setIsInterecting(state)
  }
  return (
    <div className='h-screen text-white pr-8 flex flex-col gap-4'>
        <div className="flex">
            <SideBar setInterecting={setInterecting}/>
            {isInterecting? <FeedInterection /> : <div className="flex flex-col gap-4 py-4">
                <UserBanner />
                <PostCard setInterecting={setInterecting} />
            </div>}
        </div>
    </div>
  )
}

export default Feed