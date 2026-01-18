import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import loginImg from "../assets/register-food-img.jpg";
import * as Yup from 'yup';

export default function LoginPage() {

  const loginUser = (values) => {
    console.log("Login values:", values);
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <div className="w-full fixed inset-0 h-dvh flex justify-center items-center bg-gray-300">
   
      <div className="relative w-[90%] lg:w-[35%] h-[80%] rounded-2xl shadow-lg overflow-hidden bg-white">
        
        <div className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center opacity-60" style={{ backgroundImage: `url(${loginImg})` }}/>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 via-white/50 to-white/30" />
        <div className="relative z-20 h-full flex flex-col justify-center py-1">
      
          <div className="px-6 text-center mb-5">
            <h2 className="text-2xl font-semibold text-black mb-3">Login</h2>
            <p className="text-black text-lg">Welcome back! Enter your details to login.</p>
          </div>

       <Formik
  initialValues={{email: '', password: '', remember: false}}
  validationSchema={validationSchema}
  onSubmit={(values) => loginUser(values)}
>
  {({ values, handleChange }) => (
    <Form className="px-6 flex flex-col gap-4">

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className=" text-black font-medium">Email Address</label>
        <Field id="email" name="email" type="email" placeholder="example@email.com"
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-black font-medium">Password</label>
        <Field id="password" name="password" type="password" placeholder="Your password"
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
      </div>

      <div className="flex items-center gap-2">
        <Field type="checkbox" name="remember" id="remember" className="w-4 h-4 accent-orange-400"/>
        <label htmlFor="remember" className="text-black">Remember me</label>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <p className="text-black text-sm text-center">
          By logging in you agree to our <span className="text-orange-500">Terms of service</span> and <span className="text-orange-500">Privacy Policy</span>
        </p>

        <button type="submit"
          className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors">Login
        </button>

        <p className="text-black text-center text-sm">
          Don't have an account? <Link to="/register" className="text-orange-500">Register</Link>
        </p>
      </div>

    </Form>
  )}
</Formik>

        </div>
      </div>
    </div>
  );
}
