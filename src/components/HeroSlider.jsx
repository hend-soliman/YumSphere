import { GiCancel } from "react-icons/gi"

export default function HeroSlider({bestFoods,bestFoodsIndex,visibleImages,prevSlide,nextSlide,visibleImagesOnSmallDevice,sliderModal,setPauseSlider,setSliderModal,setBestFoodsIndex}) {
    

    
 
    
  return (
    <div className="w-full  flex flex-col mb-15 mt-5 lg:mt-0 gap-5 lg:gap-20 justify-items-center">
            <h2 className="text-2xl lg:text-6xl self-end mr-5 lg:mr-0 font-bold text-neutral-950 lg:self-center">
              Taste Our Foods & Enjoy
            </h2>
    
            <div className=" hidden lg:grid lg:grid-cols-4 gap-4">
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
    
            <div className='grid grid-cols-1 w-full lg:hidden '>
                {visibleImagesOnSmallDevice.map((el, i) => (
                <div
                  key={i + 1}
                  className="
                  relative flex justify-center group overflow-hidden rounded-xl
                  "
                  onClick={() => {
                        setPauseSlider(true)
                        setSliderModal(true)
                          }}
    
                >
                
                  <img
                    src={el.img}
                    alt=""
                    className="h-100 w-[90%] object-cover backdrop-blur-sm rounded-xl"
                  />
                  
    
                  {sliderModal && <div
        className='
          absolute inset-0
          bg-black/60
          flex items-center justify-center
          text-white text-center px-4
          transition-opacity duration-300
          '
        onClick={(e) => e.stopPropagation()}
          
        
      >
        <GiCancel
        className='
        absolute
        top-10
        right-10
        text-2xl
        '
        onClick={(e)=>{
          e.stopPropagation()
          setSliderModal(false)
          setPauseSlider(false)
        }
        }
         />
        <div>
          <h3 className="text-lg font-bold mb-2">
            {el.name}
          </h3>
          <p className="text-sm">
            {el.desc}
          </p>
        </div>
      </div>}
                 
                  {!sliderModal && i === 0 && (
                    <button
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2
                        w-10 h-10 flex items-center justify-center
                        bg-orange-400/80 text-white rounded-full
                        shadow-lg opacity-100 lg:opacity-0 lg:group-hover:opacity-100
    "
                    >
                      ◀
                    </button>
                  )}
    
                  {!sliderModal && i === 3 && (
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2
                        w-10 h-10 flex items-center justify-center
                        bg-orange-400/80 text-white rounded-full
                        shadow-lg opacity-100 lg:opacity-0 lg:group-hover:opacity-100
    "
                    >
                      ▶
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
      {bestFoods.map((_, index) => (
        <span
          key={index}
          onClick={() => setBestFoodsIndex(index)}
          className={`
            w-3 h-3 rounded-full transition-all duration-300
            ${bestFoodsIndex === index
              ? 'bg-orange-400 scale-110'
              : 'bg-gray-400'}
          `}
        />
      ))}
    </div>
              
          </div>
  )
}
