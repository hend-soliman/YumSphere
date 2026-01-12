import { RiDoubleQuotesL } from "react-icons/ri"
import StarRating from "../layouts/StarRating"

export default function HeroUserReviews({visibleReviews, pizzaSlides}) {
  return (
    <div className='w-full flex   px-5 lg:px-0 overflow-x-hidden  relative'>
          { visibleReviews.map((el,index) => {
          return (
            
                <div className="w-full realtive">
                    <div className="absolute inset-0 bg-orange-200 rounded-xl"></div>
            
                <div key={index} className='relative top-[10%] lg:left-[30%] lg:top-[0] lg:flex lg:justify-center w-full h-[200px] px-5 lg:px-0  lg:w-[40%] overflow-hidden overflow-y-scroll lg:overflow-visible h-dvh lg:min-h-[350px]  flex flex-col gap-5 items-center'>
              <RiDoubleQuotesL className="text-black text-xl" />
              <StarRating rating={el.rating}/>
              <p className='text-center text-gray-950 lg:text-gray-700'>{el.desc}</p>
              <p className='text-black'>-{el.name}</p>
            </div>
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
    -right-[20%]
    lg:-right-[190px]
    w-110
    pointer-events-none
    lg:opacity-70
    opacity-25
  "
/>

           

        
        

      </div>
  )
}
