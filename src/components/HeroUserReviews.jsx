import { RiDoubleQuotesL } from "react-icons/ri"
import StarRating from "../layouts/StarRating"

export default function HeroUserReviews({visibleReviews, pizzaSlides}) {
  return (
    <div className='w-full flex justify-center pb-30 relative'>
          { visibleReviews.map((el,index) => {
          return (
            <div key={index} className='w-[40%] min-h-[420px]  flex flex-col gap-5 items-center '>
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
  )
}
