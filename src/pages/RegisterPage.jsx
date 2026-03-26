import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/register-food-img.jpg";
import * as Yup from "yup";
import useStore from "../store/CartStore";

export default function RegisterPage() {
  const navigate = useNavigate();
  const login = useStore((state) => state.login);

  const registerUser = (values) => {
    console.log("Register values:", values);
    login({ username: values.username, email: values.email });
    navigate("/menu"); // مباشرة بعد التسجيل
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must be less than 30 characters")
      .required("Name is required"),
    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Password must contain uppercase, lowercase, number and special character"
      )
      .required("Password is required"),
    passwordconfirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
  });

  return (
    <div className="w-full fixed inset-0 h-dvh py-5 bg-gray-400 flex justify-center items-center">
      <div className="w-[90%] lg:w-[35%] h-full lg:h-[90%] relative overflow-hidden rounded-2xl shadow bg-white">

        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center opacity-60"
          style={{ backgroundImage: `url(${registerImg})` }}
        />

        <div className="absolute inset-0 z-10 backdrop-blur-0" />

        <div
          className="absolute inset-0 z-20 bg-gradient-to-b from-white/95 via-white/20 to-white/30"
        />

        <div className="relative z-30 w-full h-full py-3">
          <div className="w-full pl-5 lg:pl-0 lg:w-full h-[20%] lg:h-[15%] flex flex-col gap-2 text-left lg:text-center lg:justify-center ">
            <h2 className="text-black text-2xl font-semibold">Create an Account</h2>
            <p className="text-gray-400 text-lg">
              Join us and enjoy our delicious culinary delights!
            </p>
          </div>

          <Formik 
            initialValues={{
              username:'',
              email:'',
              password:'',
              passwordconfirmation:'',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => registerUser(values)}
          >
            <Form className="w-full h-full flex flex-col items-center gap-5">

              {/* Full Name */}
              <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="username" className="text-black font-medium">Full Name</label>
                <Field
                  id="username"
                  name="username"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="email" className="text-black font-medium">Email Address</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="password" className="text-black font-medium">Password</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="passwordconfirmation" className="text-black font-medium">Confirm Password</label>
                <Field
                  id="passwordconfirmation"
                  name="passwordconfirmation"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                />
                <ErrorMessage name="passwordconfirmation" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Terms */}
              <span className="w-full flex text-center">
                <p className="pl-3 text-neutral-900 text-lg w-[95%] font-semibold ">
                  By signing up, you agree to our <span className="text-orange-600">Terms of service</span> and <span className="text-orange-600">Privacy Policy</span>
                </p>
              </span>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-orange-400 border-0 w-[90%] text-white text-xl hover:bg-orange-300"
              >
                Create Account
              </button>

              {/* Already have account */}
              <span className="w-full h-[30%] lg:h-[15%] flex text-center">
                <p className="pl-3 text-neutral-900 text-lg w-[95%] font-semibold ">
                  Already have an account? <Link to="/login" className="text-orange-600 bg-transparent border-0">Login</Link>
                </p>
              </span>

            </Form>
          </Formik>
        </div>

      </div>
    </div>
  );
}