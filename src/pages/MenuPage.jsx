
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import pizza from '../assets/best-foods/Blueberry-Kale-Smoothie.jpg'
import  API_URL from '../config/api';





export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("breakfast");
  const menuItems = ['breakfast','lunch','dinner','desserts','drinks'];
  const [menu,setMenu] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  

useEffect(() => {
  const STRAPI_URL = API_URL;
  console.log(STRAPI_URL);
  
  // لاحظ استخدام النقاط (breakfast.img) لجلب الصورة من داخل المكون
  // تأكد من كتابة dessert و drink بدون S إذا كانت كذلك في Strapi
  const apiUrl = `${STRAPI_URL}/api/menus?populate[breakfast][populate]=img&populate[lunch][populate]=img&populate[dinner][populate]=img&populate[dessert][populate]=img&populate[drink][populate]=img`;

  axios.get(apiUrl)
    .then((res) => {
      if (res.data.data && res.data.data.length > 0) {
        setMenu(res.data.data[0]);
        console.log("Data with Images:", res.data.data[0]);
      }
    })
    .catch(err => console.error("Error:", err));
}, []);

  return (
    <div className='relative left-1/2 bg-black right-1/2 -ml-[50vw] -mr-[50vw] w-screen min-h-screen  flex flex-col gap-0'>
      <div className='relative w-screen min-h-[150px] bg-cover bg-center flex justify-center items-end '>

          <div
    className="absolute inset-0 bg-cover bg-center scale-110 blur-4"
    style={{
      backgroundImage: "url('/images/menu/backgrounds/upper-background.jpg')",
    }}
  ></div>
  <div className="absolute inset-0 bg-black/35"></div>
   <div className='relative z-30 w-full lg:w-[60%] flex justify-center items-center mb-[-24px] '>
          {menuItems.map((tab) => {
     
            return (
            
            <button
            key={tab}
           onClick={() => setActiveTab(tab)}

          className={`w-[20%] h-[40px] rounded-3xl text-sm lg:rounded-0 lg:text-lg border border-gray-400 text-center flex justify-center items-center
    transition-colors duration-200
    ${activeTab === tab
      ? "bg-neutral-900 text-yellow-500 shadow-md scale-105 lg:scale-100 font-semibold border-0 border-b-3 border-yellow-500"
      : "bg-gray-100 text-gray-500 hover:bg-neutral-200 hover:text-black"}`}
        >{tab}</button>
          )})

          }
          
         
        </div>
 
        
      </div>
      <div></div>
      {/* الجزء السفلي اللي فيه الـ Tabs */}
<div className="relative w-full flex-1 bg-cover bg-center py-16 px-10"
  style={{
    backgroundImage: "url('/images/menu/backgrounds/main-background.jpg')", // عدل المسار حسب مكان الصورة عندك
  }}
>
  {/* طبقة شفافية خفيفة فوق الخلفية علشان تبرز الكلام */}
  <div className=" absolute inset-0 bg-white/70 "></div>
  <div className="absolute inset-0 bg-black/35 blur-lg"></div>

  {/* المحتوى */}
  <div className="relative z-20 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
    {menu[activeTab]?.map((item) => {
      const STRAPI_URL = API_URL;
      const relativePath = item.img?.url;
      const fullImageUrl = relativePath ? `${STRAPI_URL}${relativePath}` : pizza;

      return (
        <div
          key={item.id}
          className="h-[500px] w-[300px] bg-white/80 flex flex-col gap-4 p-3 shadow-lg rounded-lg backdrop-blur-sm"
        >
          <div className="w-full h-[50%] overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src={fullImageUrl}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = pizza;
              }}
            />
          </div>
          <h4 className="text-xl h-[20%] text-black font-bold text-center">
            {item.name}
          </h4>
          <div className="w-full h-[40%] rounded-2xl shadow border border-gray-300 overflow-y-auto bg-transparent">
            <p className="p-2 w-full text-sm text-gray-600 
          mt-1 
          overflow-hidden
          [display:-webkit-box]
          [-webkit-line-clamp:4]
          [-webkit-box-orient:vertical]">{item.desc}</p>
          </div>
          <button
          onClick={() => setSelectedItem(item)}
          className=" self-end mr-1 text-xs text-amber-600 hover:underline"
        >Read More</button>
     
          <h2 className="text-black text-2xl self-center font-bold">
            EGP <span className="text-orange-600">{item.price}</span>
          </h2>
          <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-bold transition-all">
            Add To Cart
          </button>
        </div>
      );
    })}
    {selectedItem && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={() => setSelectedItem(null)}
  >
    <div className="bg-white max-w-md w-full rounded-xl p-6 relative"
         onClick={(e) => e.stopPropagation()}
         >
      <button
        onClick={() => setSelectedItem(null)}
        className="absolute top-3 right-3 text-gray-400 hover:text-black"
      >
        ✕
      </button>

      <h3 className="text-xl font-semibold mb-3">
        {selectedItem.name}
      </h3>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {selectedItem.desc}
      </p>
    </div>
  </div>
)}

    {/* حالة عدم وجود عناصر */}
    {(!menu[activeTab] || menu[activeTab].length === 0) && (
      <div className="col-span-4 text-center text-gray-600 relative z-20">
        No items found for {activeTab}
      </div>
    )}
  </div>
</div>
    </div> 

     


  


 

      

  )
}
