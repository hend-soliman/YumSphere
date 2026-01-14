import React, { useState } from 'react'

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("breakfast");
  const menuItems = ['breakfast','lunch','dinner','desserts','drinks'];

  return (
    <div className='relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-dvh bg-yellow-200 flex flex-col gap-5'>
      <div className='w-full h-[150px] flex justify-center items-end bg-red-300 relative'>
        <div className='w-[60%] flex justify-center items-center absolute top-32'>
          {menuItems.map((tab) => (
            <button
            key={tab}
           onClick={() => setActiveTab(tab)}

          className={`w-[20%] h-[40px] border border-gray-400 text-center flex justify-center items-center
    transition-colors duration-200
    ${activeTab === tab
      ? "bg-neutral-900 text-white font-semibold"
      : "bg-gray-100 text-gray-500 hover:bg-neutral-200 hover:text-black"}`}
        >{tab}</button>
          ))

          }
          
         
        </div>
      </div>
    </div>
  )
}
