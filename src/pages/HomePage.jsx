import React, { use, useEffect, useState } from 'react'
import spicyChicken from '../assets/best-foods/chicken-spaghetti.jpg'
import smokedBeef from '../assets/best-foods/Shredded-Smoked-Pulled-Beef-Sandwiches.jpg'
import pumpkinJuice from '../assets/best-foods/pumpkin_juice_1.jpg'
import milkShake from '../assets/best-foods/strawberrybananamilkshake-9.jpg'
import blueberryShake from '../assets/best-foods/Blueberry-Kale-Smoothie.jpg'
import { RiDoubleQuotesL } from "react-icons/ri";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import StarRating from '../layouts/StarRating'
import pizzaSlides from '../assets/pizza-slides.png'
import * as Yup from 'yup'

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

  const [usersOpenion, setUserOpenion] = useState([
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
  ])

  const [bestFoodsIndex, setBestFoodsIndex] = useState(0);
  const [usersOpenionIndex, setUsersOpenionIndex] = useState(0);

  useEffect(() => {
    if(bestFoods.length === 0) return;
    
      const interval = setInterval(() => {
      setBestFoodsIndex((prev) => (prev + 1) % bestFoods.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [bestFoods.length])

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

  const visibleImages = []
  for (let i = 0; i < 4; i++) {
    visibleImages.push(bestFoods[(bestFoodsIndex + i) % bestFoods.length])
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
    <div className="bg-white min-h-dvh flex flex-col w-full">
      

      <div className="w-full h-dvh flex flex-col gap-20 justify-items-center">
        <h2 className="text-6xl font-bold text-neutral-950 self-center">
          Taste Our Foods & Enjoy
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {visibleImages.map((el, i) => (
            <div
              key={i + 1}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={el.img}
                alt=""
                className="h-100 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end pb-4 justify-center text-white">
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold mb-2">{el.name}</h3>
                  <p className="text-sm opacity-90">{el.desc}</p>
                </div>
              </div>

              {i === 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2
                    w-10 h-10 flex items-center justify-center
                    bg-orange-400/80 text-white rounded-full
                    shadow-lg opacity-0 group-hover:opacity-100
                    transition hover:scale-110"
                >
                  ◀
                </button>
              )}

              {i === 3 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2
                    w-10 h-10 flex items-center justify-center
                    bg-orange-400/80 text-white rounded-full
                    shadow-lg opacity-0 group-hover:opacity-100
                    transition hover:scale-110"
                >
                  ▶
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col pt-5">
        <section className="w-full flex flex-col items-center gap-3 pb-10">
          <h1 className="text-5xl text-neutral-950 font-bold">
            Feel free to drop us a line!
          </h1>

          <div className="w-[63%] flex flex-col items-center text-lg text-gray-700 line-clamp-2">
            <p>
              Let's talk if you have any query or suggestion. We are open to learn
              from you.
            </p>
            <p>So don't hesitate to reach us anytime.</p>
          </div>
        </section>

        <div className=" bg-white flex flex-col gap-3">
          <Formik
            initialValues={{
              username: '',
              subject: '',
              email: '',
              checked: false,
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => giveOpenion(values)}
          >
            <Form className="w-full h-[400px] gap-5 items-center flex">
              <div className="w-[50%] h-full flex flex-col gap-4">
                <Field
                  name="username"
                  placeholder="Your Name"
                  className="input w-full rounded border border-gray-300
                    focus:outline-none focus:border-orange-500
                    focus:ring-2 focus:ring-orange-500/40
                    transition bg-white text-gray-600"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="subject"
                  placeholder="Subject"
                  className="input w-full rounded border border-gray-300
                    focus:outline-none focus:border-orange-500
                    focus:ring-2 focus:ring-orange-500/40
                    transition bg-white text-gray-600"
                />
                <ErrorMessage
                  name="subject"
                  component="p"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="email"
                  placeholder="Email Address"
                  className="input w-full rounded border border-gray-300
                    focus:outline-none focus:border-orange-500
                    focus:ring-2 focus:ring-orange-500/40
                    transition bg-white text-gray-600"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />

                <p className="text-xl text-gray-500 font-semibold">
                  <Field
                    type="checkbox"
                    name="checked"
                    className="checkbox border-4 border-orange-400 opacity-20
                      checked:bg-orange-500 checked:opacity-60
                      checked:border-orange-300 checked:text-white"
                  />
                  Send me a copy
                  <ErrorMessage
                    name="checked"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </p>
              </div>

              <div className="w-[50%] h-full flex flex-col gap-4">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Type your message here"
                  className="textarea w-full h-[38%] resize-none
                    rounded border border-gray-300
                    focus:outline-none focus:border-orange-500
                    focus:ring-2 focus:ring-orange-500/40
                    transition bg-white text-gray-600
                    placeholder:text-lg"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 text-sm"
                />

                <button
                  type="submit"
                  className="btn bg-neutral-950 text-white text-xl rounded
                    w-[40%] hover:bg-neutral-800"
                >
                  GIVE US A SHOT
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      <div className='w-full flex justify-center pb-30 relative'>
          { visibleReviews.map((el,index) => {
          return (
            <div className='w-[40%] min-h-[420px]  flex flex-col gap-5 items-center '>
              <RiDoubleQuotesL />
              <StarRating rating={el.rating}/>
              <p className='text-center text-gray-700'>{el.desc}</p>
              <p className='text-black'>-{el.name}</p>
            </div>
            

          )  

          })
            

          }
          <img
  src={pizzaSlides}
  alt="pizza"
  className="
    absolute
    bottom-0
    -right-[190px]
    w-110
    pointer-events-none
    opacity-70
  "
/>

           

        
        

      </div>
    </div>
  )
}
