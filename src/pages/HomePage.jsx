import React, {useEffect, useState } from 'react'
import spicyChicken from '../assets/best-foods/chicken-spaghetti.jpg'
import smokedBeef from '../assets/best-foods/Shredded-Smoked-Pulled-Beef-Sandwiches.jpg'
import pumpkinJuice from '../assets/best-foods/pumpkin_juice_1.jpg'
import milkShake from '../assets/best-foods/strawberrybananamilkshake-9.jpg'
import blueberryShake from '../assets/best-foods/Blueberry-Kale-Smoothie.jpg'
import pizzaSlides from '../assets/pizza-slides.png'
import * as Yup from 'yup'
import HeroSlider from '../components/HeroSlider'
import HeroUserReviewForm from '../components/HeroUserReviewForm'
import HeroUserReviews from '../components/HeroUserReviews'

export default function Homepage() {
  const bestFoods = [
        {
          name: 'SPICY CHICKEN SPAGHETTI',
          desc: 'Served with green chillies',
          img: spicyChicken,
        },
        {
          name: 'SMOKED BEEF SUB-SANDWITCH',
          desc: 'Slow cooked beef sub',
          img: smokedBeef,
        },
        {
          name: 'PUMPKIN SPICE JUICE',
          desc: 'Chilled drink with cinamen',
          img: pumpkinJuice,
        },
        {
          name: 'COLD MILK SHAKE JUICE',
          desc: 'With fresh milk',
          img: milkShake,
        },
        {
          name: 'BLUEBERRY MILK SMOOTHIE',
          desc: 'With fresh Papermint',
          img: blueberryShake,
        },
      ]

      const [bestFoodsIndex, setBestFoodsIndex] = useState(0);
        const [pauseSlider,setPauseSlider] = useState(false);
        const [sliderModal,setSliderModal] = useState(false);
        const [usersOpenionIndex,setUsersOpenionIndex] = useState(0)

    useEffect(() => {
        if(bestFoods.length === 0) return;
        if (pauseSlider) return;
        
          const interval = setInterval(() => {
          setBestFoodsIndex((prev) => (prev + 1) % bestFoods.length)
        }, 2000)
        
        return () => clearInterval(interval)
      }, [bestFoods.length,pauseSlider])

         
      const visibleImages = []
      for (let i = 0; i < 4; i++) {
        visibleImages.push(bestFoods[(bestFoodsIndex + i) % bestFoods.length])
      }
    
      const visibleImagesOnSmallDevice =[]
      for(let i =0 ; i < 1; i++){
        visibleImagesOnSmallDevice.push(bestFoods[(bestFoodsIndex + i) % bestFoods.length])
      }
  
  const usersOpenion = [
     {
      rating:5,
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, turpis at imperdiet fringilla, ante arcu vehicula lectus, nec porta urna nulla ac neque. Pellentesque hendrerit purus nulla, vel dapibus purus commodo sit amet. Fusce lacinia, libero pellentesque laoreet euismod, ipsum ante accumsan sapien, at viverra lacus ex in massa. Vestibulum quis nisl id nibh consectetur auctor. ',
      name:'Jomana Adel'
    },
    {
      rating:3,
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, turpis at imperdiet fringilla, ante arcu vehicula lectus, nec porta urna nulla ac neque. Pellentesque hendrerit purus nulla, vel dapibus purus commodo sit amet. Fusce lacinia, libero pellentesque laoreet euismod, ipsum ante accumsan sapien, at viverra lacus ex in massa. Vestibulum quis nisl id nibh consectetur auctor. Proin elementum sem id dui pretium tristique a et urna. Duis ut bibendum orci. Aliquam tincidunt justo id auctor pulvinar.',
      name:'Karim Emad'
    },

   {
      rating:4,
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, turpis at imperdiet fringilla, ante arcu vehicula lectus, nec porta urna nulla ac neque. Pellentesque hendrerit purus nulla, vel dapibus purus commodo sit amet. Fusce lacinia, libero pellentesque laoreet euismod, ipsum ante accumsan sapien, at viverra lacus ex in massa. Vestibulum quis nisl id nibh consectetur auctor. Proin elementum sem id dui pretium tristique a et urna. Duis ut bibendum orci.',
      name:'Hend Adel'
    }
    ,
    {
      rating:2,
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, turpis at imperdiet fringilla, ante arcu vehicula lectus, nec porta urna nulla ac neque. Pellentesque hendrerit purus nulla, vel dapibus purus commodo sit amet. Fusce lacinia, libero pellentesque laoreet euismod, ipsum ante accumsan sapien, at viverra lacus ex in massa. Vestibulum quis nisl id nibh consectetur auctor. Proin elementum sem id dui pretium tristique a et urna. Duis ut bibendum orci.',
      name:'Ramy Emad'
    }
  ]

  

  

  useEffect(() => {
 if(usersOpenion.length === 0) return;

 const interval = setInterval(() => {
   setUsersOpenionIndex((prev) => (prev + 1) % usersOpenion.length)
 },4000)
  return () => clearInterval(interval)
  },[usersOpenion.length])

  const nextSlide = () => {
        setBestFoodsIndex((prev) => (prev + 1) % bestFoods.length)
      }
    
      const prevSlide = () => {
        setBestFoodsIndex((prev) => (prev === 0 ? bestFoods.length - 1 : prev - 1))
      }

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),

    subject: Yup.string()
      .min(3, 'Subject must be at least 3 characters')
      .required('Subject is required'),

    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),

    checked: Yup.boolean().oneOf([true], 'You must agree before submitting'),
  })

  const giveOpenion = (values) => {
    console.log(values)
  }

  const visibleReviews =[
    usersOpenion[usersOpenionIndex]
  ];
  
  
 

  return (
    <div className="bg-white min-h-dvh flex flex-col gap-20 lg:gap-0 w-full">
      
    <HeroSlider 
    bestFoods={bestFoods} 
    bestFoodsIndex={bestFoodsIndex} 
    visibleImages={visibleImages} prevSlide={prevSlide} nextSlide={nextSlide} visibleImagesOnSmallDevice={visibleImagesOnSmallDevice} 
    sliderModal={sliderModal} 
    setPauseSlider={setPauseSlider} 
    setSliderModal={setSliderModal}
    setBestFoodsIndex={setBestFoodsIndex}
     />

    <HeroUserReviewForm validationSchema={validationSchema} giveOpenion={giveOpenion} />
    <HeroUserReviews visibleReviews={visibleReviews} pizzaSlides={pizzaSlides} />

     

      
    </div>
  )
}
