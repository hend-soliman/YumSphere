import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import registerImg from "../assets/register-food-img.jpg";

export default function RegisterPage() {
  return (
    <div className="w-full fixed inset-0 h-dvh py-5 bg-gray-400 flex justify-center items-center">
      <div className=" w-[90%] lg:w-[35%] h-full lg:h-[90%] relative overflow-hidden rounded-2xl shadow bg-white">

        {/* Background Image */}
        <div
          className="absolute top-90 inset-0 z-0 bg-cover bg-no-repeat bg-bottom opacity-60"
          style={{ backgroundImage: `url(${registerImg})` }}
        />

       <div className="absolute inset-0 z-10 backdrop-blur-0" />

       <div
  className="
    absolute inset-0 z-20
    bg-gradient-to-b
    from-white/95
    via-white/20
    to-white/30
  "
/>


        {/* Content */}
        <div className="relative z-30 w-full h-full py-3">
          <div className="w-full pl-5 lg:pl-0   lg:w-full h-[20%] lg:h-[15%] flex flex-col gap-2 text-left lg:text-center  lg:justify-center ">
            <h2 className="text-black text-2xl font-semibold">
              Create an Account
            </h2>
            <p className="text-gray-400 text-lg">
              Join us and enjoy our delicious culinary delights!
            </p>
          </div>

          <Formik>
            <Form className="w-full h-full flex flex-col items-center gap-5">
                <span className="w-[90%] h-[10%]   flex flex-col relative  ">
                  <p className="text-black z-10 text-lg absolute top-3 left-[13px]">Full Name</p>
                <Field className="input w-full z-0 pt-7 bg-white text-gray-500 h-full border-1 flex-col items-end border-gray-300 self-center placeholder:text-lg 
                                   focus:border-orange-500
                                     focus:ring-2
                                     focus:ring-orange-500/40
                                     focus:outline-none
                                     transition
                "
                       placeholder="Your Name"
                />

                </span>

                 <span className="w-[90%] h-[10%]  flex flex-col relative  ">
                  <p className="text-black z-10 text-lg absolute top-3 left-[13px]">Email Address</p>
                <Field className="input w-full z-0 pt-7 bg-white text-gray-500 h-full border-1 flex-col items-end border-gray-300 self-center placeholder:text-lg
                                   focus:border-orange-500
                                     focus:ring-2
                                      focus:ring-orange-500/40
                                     focus:outline-none
                                     transition
                                  "
                       placeholder="example@email.com"
                />

                </span>

                <span className="w-[90%] h-[10%] flex flex-col relative  ">
                  <p className="text-black z-10 text-lg absolute top-3 left-[13px]">Password</p>
                <Field type="password" className="input w-full z-0 pt-7 bg-white text-gray-500 h-full border-1 flex-col items-end border-gray-300 self-center placeholder:text-lg
                                                   focus:border-orange-500
                                                     focus:ring-2
                                                     focus:ring-orange-500/40
                                                     focus:outline-none
                                                     transition
                "
                       placeholder="Password"
                />

                </span>

                                <span className="w-[90%] h-[10%] flex flex-col relative  ">
                  <p className="text-black z-10 text-lg absolute top-3 left-[13px]">Confirm Password</p>
                <Field type="password" className="input w-full z-0 pt-7 bg-white text-gray-500 h-full border-1 flex-col items-end border-gray-300 self-center placeholder:text-lg
                                                   focus:border-orange-500
                                                     focus:ring-2
                                                     focus:ring-orange-500/40
                                                     focus:outline-none
                                                     transition
                "
                       placeholder="Confirm Password"
                />

                </span>

                <span className="w-full flex text-center">
                  <p className="pl-3 text-neutral-900 text-lg w-[95%] font-semibold ">By signing up, you agree to our <span className="text-orange-600">Terms of service</span> and <span className="text-orange-600">Privacy Policy</span></p>
                </span>

                <button className="btn bg-orange-400 border-0 w-[90%] text-white text-xl hover:bg-orange-300">Create Account</button>
                <span className="w-full h-[30%] lg:h-[15%] flex text-center">
                  <p className="pl-3 text-neutral-900 text-lg w-[95%] font-semibold ">Already have an account? <Link to="/login" className="  text-orange-600 bg-transparent border-0">Login</Link></p>
                </span>
                
                

            </Form>
          </Formik>
        </div>

      </div>
    </div>
  );
}
