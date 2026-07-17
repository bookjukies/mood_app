import React from 'react'
import MoodCard from '../../components/UI/MoodCard'

function Mood() {
    const moods = [
  {
    id: 1,
    emoji: "\u{1F600}", // 😀
    label: "Happy",
    color: "bg-yellow-100",
  },
  {
    id: 2,
    emoji: "\u{1F614}", // 😔
    label: "Sad",
    color: "bg-blue-100",
  },
  {
    id: 3,
    emoji: "\u{1F620}", // 😠
    label: "Angry",
    color: "bg-red-100",
  },
  {
    id: 4,
    emoji: "\u{1F628}", // 😨
    label: "Anxious",
    color: "bg-purple-100",
  },
  {
    id: 5,
    emoji: "\u{1F970}", // 🥰
    label: "Loved",
    color: "bg-pink-100",
  },
  {
    id: 6,
    emoji: "\u{1F62A}", // 😪
    label: "Tired",
    color: "bg-gray-100",
  },
  {
    id: 7,
    emoji: "\u{1F62B}", // 😫
    label: "Stressed",
    color: "bg-orange-100",
  },
  {
    id: 8,
    emoji: "\u{1F929}", // 🤩
    label: "Excited",
    color: "bg-amber-100",
  },
  {
    id: 9,
    emoji: "\u{1F622}", // 😢
    label: "Lonely",
    color: "bg-cyan-100",
  },
  {
    id: 10,
    emoji: "\u{1F60C}", // 😌
    label: "Calm",
    color: "bg-green-100",
  },
];
  return (
    <div className='h-screen px-16 text-white'>
        <h2 className='my-4'>How are you feeling right now?</h2>
        <p className='mb-12'>You will join a temporary community of 200 people in the same state.</p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 ">
            {moods.map(mood => <MoodCard emoji={mood.emoji} label={mood.label} id={mood.id} key={mood.id}/>)}
        </div>

        <div className="mt-24">
            <button className='mb-6   hover:bg-purple-950 bg-white/10 px-4 py-1 rounded-full'>Custom Mood</button>
            <p>“Your feelings are valid, even if they don't have a label yet.”</p>
        </div>

    </div>
  )
}

export default Mood