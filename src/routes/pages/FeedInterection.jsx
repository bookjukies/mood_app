import React from 'react'
import ReactionPostCard from '../../components/Reaction/ReactionPostCard'
import ReactionComment from '../../components/Reaction/ReactionComment'
import ReactionInput from '../../components/Reaction/ReactionInput'


function FeedInterection() {
  return (
    <div className='h-screen flex flex-col gap-4 py-4 relative'>
        <ReactionPostCard />
  
        <h2 className='text-justify'>Reflections</h2>

        <ReactionComment />

        <ReactionInput />
    </div>
  )
}

export default FeedInterection