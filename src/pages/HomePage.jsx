import React, { useEffect, useState } from 'react'
import spicyChicken from '../assets/best-foods/chicken-spaghetti.jpg'
import smokedBeef from '../assets/best-foods/Shredded-Smoked-Pulled-Beef-Sandwiches.jpg'
import pumpkinJuice from '../assets/best-foods/pumpkin_juice_1.jpg'
import milkShake from '../assets/best-foods/strawberrybananamilkshake-9.jpg'
import blueberryShake from '../assets/best-foods/Blueberry-Kale-Smoothie.jpg'

export default function Homepage() {
  const bestFoods=  [
    {name: 'SPICY CHICKEN SPAGHETTI',desc:'Served with green chillies',img:spicyChicken},
      {name: 'SMOKED BEEF SUB-SANDWITCH',desc:'Slow cooked beef sub',img:smokedBeef},
      {name: 'PUMPKIN SPICE JUICE',desc:'Chilled drink with cinamen',img:pumpkinJuice},
      {name: 'COLD MILK SHAKE JUICE',desc:'With fresh milk',img:milkShake},
      {name: 'BLUEBERRY MILK SMOOTHIE',desc:'With fresh Papermint',img:blueberryShake},

  ]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
    
  },[index])

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % bestFoods.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? bestFoods.length - 1 : prev - 1
    );
  };

   const visibleImages = [];
  for (let i = 0; i < 4; i++) {
    visibleImages.push(bestFoods[(index + i) % bestFoods.length]);
  }
  return (
    <div className='bg-white h-dvh flex flex-col w-full overflow-auto'>
      {/* دودو هنا الجزء بتاعك الاول فى HomePage */}
      <div>

      </div>
      {/****************************** */}

      <div className='w-full h-dvh flex flex-col gap-20 justify-items-center'>
        <h2 className='text-6xl font-bold text-neutral-950 self-center '>Taste Our Foods & Enjoy</h2>
          <div className="grid grid-cols-4 gap-4">
        {visibleImages.map((el, i) => (
          <div
            key={i+1}
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src={el.img}
              alt=""
              className="h-100 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end pb-4 justify-center text-white'> 
                <div className="text-center px-4">
    
    {/* Product Name */}
    <h3 className="text-xl font-bold mb-2">
      {el.name}
    </h3>

    {/* Description */}
    <p className="text-sm opacity-90">
      {el.desc}
    </p>

  </div>

            </div>
          

            {/* Left Arrow */}
            {i === 0 && (
              <button
                onClick={prevSlide}
                className=" absolute left-3 top-1/2 -translate-y-1/2
    w-10 h-10
    flex items-center justify-center
    bg-orange-400/80 text-white
    rounded-full
    shadow-lg
    opacity-0 group-hover:opacity-100
    transition hover:scale-110"
              >
                ◀
              </button>
            )}

            {/* Right Arrow */}
            {i === 3 && (
              <button
                onClick={nextSlide}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
    w-10 h-10
    flex items-center justify-center
    bg-orange-400/80 text-white
    rounded-full
    shadow-lg
    opacity-0 group-hover:opacity-100
    transition hover:scale-110
                "
              >
                ▶
              </button>
            )}
          </div>
        ))}
      </div>
      </div>


    </div>
  )
}
