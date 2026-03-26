import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import loginImg from "../assets/register-food-img.jpg";
import * as Yup from "yup";
import useStore from "../store/CartStore";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useStore((state) => state.login);
  const addToCart = useStore((state) => state.addToCart);

  const loginUser = (values) => {
    console.log("Login values:", values);

    login({ email: values.email });

    const from = location.state?.from || "/menu";
    const item = location.state?.item;

    if (item) addToCart(item);

    navigate(from);
  };

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
    <div className="w-full fixed inset-0 h-dvh flex justify-center items-center bg-gray-400">
      <div className="relative w-[90%] lg:w-[35%] h-[80%] rounded-2xl shadow-lg overflow-hidden bg-white">

        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center opacity-60"
          style={{ backgroundImage: `url(${loginImg})` }}/>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/95 via-white/20 to-white/30" />

        <div className="relative z-20 h-full flex flex-col justify-center py-1">

          <div className="px-6 text-center mb-5">
            <h2 className="text-2xl font-semibold text-black mb-3">Login</h2>
            <p className="text-black text-lg"> Welcome back! Enter your details to login.</p>
          </div>

          <Formik
            initialValues={{ email: "", password: "", remember: false }}
            validationSchema={validationSchema}
            onSubmit={loginUser}>

            <Form className="px-6 flex flex-col gap-4">

              <div className="flex flex-col gap-1">
                <label className="text-black font-medium">Email Address</label>
                <Field name="email" type="email"
                  className="px-4 py-2 border border-black rounded-lg"/>
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-black font-medium">Password</label>
                <Field name="password" type="password"
                  className="px-4 py-2 border border-black rounded-lg"/>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              <button className="bg-orange-400 text-white py-2 rounded-lg">
                Login
              </button>

              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/register" state={location.state} className="text-orange-500">
                  Register
                </Link>
              </p>

            </Form>
          </Formik>

        </div>
      </div>
    </div>
  );
}