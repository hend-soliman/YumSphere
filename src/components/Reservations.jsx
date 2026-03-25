import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegClock, FaCalendarAlt, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "animate.css";
import meal from "../assets/meal.png";
import toast from "react-hot-toast";

export default function Reservations({ isOpen, onClose }) {
  const dateRef = useRef(null);
  const timeSelectRef = useRef(null);

  useEffect(() => {
    const handleEsc = (el) => {
      if (el.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\u0600-\u06FF\s]+$/, "Name must contain letters only")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^(010|011|012|015)[0-9]{8}$/, "Enter a valid Egyptian phone")
      .required("Phone is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    persons: Yup.string().required("Persons is required"),

  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-175 max-w-[95%] bg-white rounded-xl overflow-hidden animate__animated animate__fadeInDown sm:w-[90%] md:w-150">
        <img src={meal} className="absolute top-0 right-0 w-50 md:w-62.5 sm:w-37.5 object-cover pointer-events-none"/>
        <button onClick={onClose} className="absolute top-3 right-3 z-20 text-white text-xl md:text-2xl hover:opacity-80 transition">
          <FaTimes />
        </button>

        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-1 h-14 bg-[#ffc554]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b1727] leading-snug">
              Make A <br /> Reservation
            </h2>
          </div>
        </div>

        <Formik
          initialValues={{
            time: "",
            date: null,
            name: "",
            phone: "",
            persons: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            toast.success("Reservation Sent ✅"); 
            onClose(); 
            }}>

          {({ setFieldValue, values }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4 md:gap-5 p-4 md:p-8">
                <div className="relative w-full">
                  <FaRegClock className="absolute left-4 top-4 text-[#748194]" />
                  <Field as="select" name="time" ref={timeSelectRef} className="w-full border border-[#d6e0f0] rounded-md pl-10 pr-10 py-2 md:py-3 text-[#9aa5b1]">
                    <option value="">Time</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>7:00 PM</option>
                  </Field>
                  <ErrorMessage name="time" component="p" className="text-red-500 text-xs mt-1" />
                </div>

                <div className="relative">
                  <FaCalendarAlt className="absolute left-4 top-4 text-[#748194] cursor-pointer" onClick={() => dateRef.current.setFocus()}/>
                  <DatePicker ref={dateRef} selected={values.date} onChange={(date) => setFieldValue("date", date)} placeholderText="mm / dd / yyyy"
                    className="w-full border border-[#d6e0f0] rounded-md pl-10 pr-4 py-2 md:py-3 text-[#9aa5b1]" popperClassName="z-[9999]"/>
                  <ErrorMessage name="date" component="p" className="text-red-500 text-xs mt-1"/>
                </div>

                <div>
                  <Field name="name" placeholder="Name" className="border border-[#d6e0f0] rounded-md p-2 md:p-3 w-full text-[#9aa5b1]"/>
                  <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1"/>
                </div>

                <div>
                  <Field name="phone" placeholder="Phone" className="border border-[#d6e0f0] rounded-md p-2 md:p-3 w-full text-[#9aa5b1]"/>
                  <ErrorMessage name="phone" component="p" className="text-red-500 text-xs mt-1"/>
                </div>

                <div className="relative col-span-2">
                  <Field as="select" name="persons" className="w-full border border-[#d6e0f0] rounded-md px-4 py-2 md:py-3 text-[#9aa5b1]">
                    <option value="">Person</option>
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>4 People</option>
                  </Field>
                  <ErrorMessage name="persons" component="p" className="text-red-500 text-xs mt-1"/>
                </div>

                <div className="col-span-2">
                  <Field name="email" placeholder="Email" className="border border-[#d6e0f0] rounded-md p-2 md:p-3 w-full text-[#9aa5b1]"/>
                  <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1"/>
                </div>
              </div>

              <div className="bg-[#FFB84C] p-4 md:p-8 text-center">
                <p className="text-sm text-[#0b1727] leading-6 md:leading-7 mb-4 md:mb-6">
                  Apparently we had reached a great height in the atmos, for the sky was
                  a dead black, and the stars had twinkle. By which lifts the light.
                </p>

                <button type="submit" className="bg-white text-[#0b1727] font-semibold py-2 px-12 md:py-3 md:px-20 rounded-md hover:bg-gray-100 transition text-sm md:text-base">
                  SUBMIT
                </button>
              </div>
            </Form>)}
        </Formik>
      </div>
    </div>
  );
}


