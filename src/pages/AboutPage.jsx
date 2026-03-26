// import React from "react";

// export default function AboutPage() {
//   return (
//     <div className="w-full min-h-screen bg-gray-50 p-5">
      
//       {/* Hero Section */}
//       <div className=" rounded-xl p-10 mb-10 text-center">
//         <h1 className=" text-[#ffc554] text-4xl font-bold mb-3">Welcome to YumSphere</h1>
//         <p className="text-lg text-gray-700 max-w-xl mx-auto">
//           Experience fine dining with the freshest ingredients and modern culinary creations.
//         </p>
//       </div>

//       {/* Our Mission / Values */}
//       <div className="mb-10">
//         <h2 className="text-[#ffc554] text-2xl font-semibold mb-6 text-center">Our Values</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-5 rounded-lg shadow text-center">
//             <div className="text-4xl mb-3">🍕</div>
//             <h3 className="text-[#ffc554] font-semibold mb-1">Quality Food</h3>
//             <p className="text-gray-700">Only the freshest ingredients for every dish.</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow text-center">
//             <div className="text-4xl mb-3">👨‍🍳</div>
//             <h3 className="text-[#ffc554] font-semibold mb-1">Skilled Chefs</h3>
//             <p className="text-gray-700">Our chefs craft each dish with care and passion.</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow text-center">
//             <div className="text-4xl mb-3">💛</div>
//             <h3 className="text-[#ffc554] font-semibold mb-1">Customer Satisfaction</h3>
//             <p className="text-gray-700">We prioritize your experience above all.</p>
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div>
//         <h2 className="text-[#ffc554] text-2xl font-semibold mb-6 text-center">Our Team</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-5 rounded-lg shadow text-center">
//             <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
//               <span className="text-gray-600">Image</span>
//             </div>
//             <h3 className="font-semibold">John Doe</h3>
//             <p className="text-gray-600">Head Chef</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow text-center">
//             <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
//               <span className="text-gray-500">Image</span>
//             </div>
//             <h3 className="font-semibold">Jane Smith</h3>
//             <p className="text-gray-600">Manager</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow text-center">
//             <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
//               <span className="text-gray-500">Image</span>
//             </div>
//             <h3 className="font-semibold">Emily Brown</h3>
//             <p className="text-gray-600">Pastry Chef</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }













// import React from "react";

// // Images for Our Values (put your images in src/assets folder)
// import qualityFoodImg from "../assets/quality-food.webp";
// import skillChefsImg from "../assets/skill-chefs.webp";
// import customerSatisfactionImg from "../assets/customer-satisfaction.png";

// // Team images placeholders
// import johnDoeImg from "../assets/john-doe.jpg";
// import janeSmithImg from "../assets/jane-smith.jpg";
// import emilyBrownImg from "../assets/emily-brown.jpg";

// export default function AboutPage() {
//   return (
//     <div className="w-full min-h-screen bg-gray-50 p-5">

//       {/* Hero Section */}
//       <div className="rounded-xl p-10 mb-10 text-center bg-gradient-to-r from-yellow-100 via-white to-yellow-50">
//         <h1 className="text-[#ffc554] text-4xl font-bold mb-3">Welcome to YumSphere</h1>
//         <p className="text-lg text-gray-700 max-w-xl mx-auto">
//           Experience fine dining with the freshest ingredients and modern culinary creations.
//         </p>
//       </div>

//       {/* Our Values */}
//       <div className="mb-10">
//         <h2 className="text-[#ffc554] text-2xl font-semibold mb-6 text-center">Our Values</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           {/* Quality Food */}
//           <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
//             <img
//               src={qualityFoodImg}
//               alt="Quality Food"
//               className="w-20 h-20 mx-auto mb-3 rounded-full object-cover"
//             />
//             <h3 className="text-[#ffc554] font-semibold mb-1">Quality Food</h3>
//             <p className="text-gray-700">Only the freshest ingredients for every dish.</p>
//           </div>

//           {/* Skilled Chefs */}
//           <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
//             <img
//               src={skillChefsImg}
//               alt="Skilled Chefs"
//               className="w-20 h-20 mx-auto mb-3 rounded-full object-cover"
//             />
//             <h3 className="text-[#ffc554] font-semibold mb-1">Skilled Chefs</h3>
//             <p className="text-gray-700">Our chefs craft each dish with care and passion.</p>
//           </div>

//           {/* Customer Satisfaction */}
//           <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
//             <img
//               src={customerSatisfactionImg}
//               alt="Customer Satisfaction"
//               className="w-20 h-20 mx-auto mb-3 rounded-full object-cover"
//             />
//             <h3 className="text-[#ffc554] font-semibold mb-1">Customer Satisfaction</h3>
//             <p className="text-gray-700">We prioritize your experience above all.</p>
//           </div>

//         </div>
//       </div>

//       {/* Team Section */}
//       <div>
//         <h2 className="text-[#ffc554] text-2xl font-semibold mb-6 text-center">Our Team</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {/* John Doe */}
//           <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="w-32 h-32 rounded-full mx-auto mb-3 overflow-hidden">
//               <img
//                 src={johnDoeImg}
//                 alt="John Doe"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="font-semibold">John Doe</h3>
//             <p className="text-gray-600">Head Chef</p>
//           </div>

//           {/* Jane Smith */}
//           <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="w-32 h-32 rounded-full mx-auto mb-3 overflow-hidden">
//               <img
//                 src={janeSmithImg}
//                 alt="Jane Smith"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="font-semibold">Jane Smith</h3>
//             <p className="text-gray-600">Manager</p>
//           </div>

//           {/* Emily Brown */}
//           <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="w-32 h-32 rounded-full mx-auto mb-3 overflow-hidden">
//               <img
//                 src={emilyBrownImg}
//                 alt="Emily Brown"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="font-semibold">Emily Brown</h3>
//             <p className="text-gray-600">Pastry Chef</p>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }














import React from "react";

// Images for Our Values (put your images in src/assets folder)
import qualityFoodImg from "../assets/quality-food.webp";
import skillChefsImg from "../assets/skill-chefs.webp";
import customerSatisfactionImg from "../assets/customer-satisfaction.png";

// Team images placeholders
import johnDoeImg from "../assets/john-doe.jpg";
import janeSmithImg from "../assets/jane-smith.jpg";
import emilyBrownImg from "../assets/emily-brown.jpg";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-5">

      {/* Hero Section */}
      <div className="rounded-xl p-10 mb-10 text-center bg-gradient-to-r from-yellow-100 via-white to-yellow-50">
        <h1 className=" text-[44px] font-bold text-[#0b1727] mb-3">Welcome to YumSphere</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Experience fine dining with the freshest ingredients and modern culinary creations.
        </p>
      </div>

      {/* Our Values */}
      <div className="mb-10">
        <h2 className=" text-[44px] font-bold text-[#0b1727] mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Quality Food */}
          <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={qualityFoodImg}
              alt="Quality Food"
              className="w-32 h-32 mx-auto mb-3 rounded-xl object-cover"
            />
            <h3 className="text-[#ffc554] font-semibold mb-1">Quality Food</h3>
            <p className="text-gray-700">Only the freshest ingredients for every dish.</p>
          </div>

          {/* Skilled Chefs */}
          <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={skillChefsImg}
              alt="Skilled Chefs"
              className="w-32 h-32 mx-auto mb-3 rounded-xl object-cover"
            />
            <h3 className="text-[#ffc554] font-semibold mb-1">Skilled Chefs</h3>
            <p className="text-gray-700">Our chefs craft each dish with care and passion.</p>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={customerSatisfactionImg}
              alt="Customer Satisfaction"
              className="w-32 h-32 mx-auto mb-3 rounded-xl object-cover"
            />
            <h3 className="text-[#ffc554] font-semibold mb-1">Customer Satisfaction</h3>
            <p className="text-gray-700">We prioritize your experience above all.</p>
          </div>

        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className=" text-[44px] font-bold text-[#0b1727] mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* John Doe */}
          <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-32 h-32 rounded-full mx-auto mb-3 overflow-hidden">
              <img
                src={johnDoeImg}
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-[#0b1727]">John Doe</h3>
            <p className="text-[#ffc554] font-semibold">Head Chef</p>
          </div>

          {/* Jane Smith */}
          <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-32 h-32 rounded-full mx-auto mb-3 overflow-hidden">
              <img
                src={janeSmithImg}
                alt="Jane Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-[#0b1727]">Jane Smith</h3>
            <p className="text-[#ffc554] font-semibold">Manager</p>
          </div>

          {/* Emily Brown */}
          <div className="bg-white p-5 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-32 h-32 rounded-full mx-auto mb-3 overflow-hidden">
              <img
                src={emilyBrownImg}
                alt="Emily Brown"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-[#0b1727]">Emily Brown</h3>
            <p className="text-[#ffc554] font-semibold">Pastry Chef</p>
          </div>

        </div>
      </div>

    </div>
  );
}