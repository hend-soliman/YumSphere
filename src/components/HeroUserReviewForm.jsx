
import { ErrorMessage, Field, Form, Formik } from 'formik'

export default function HeroUserReviewForm({validationSchema, giveOpenion}) {
  return (
    <div className="w-full flex flex-col mb-16 lg:mb-0 pt-0  lg:pt-5">
        <section className="w-full flex flex-col items-center  lg:px-0 gap-3 pb-10">
          <h1 className=" text-[19px] px-5 w-full lg:text-5xl text-neutral-950 font-extrabold lg:font-bold ">
            Feel free to drop us a line!
          </h1>

          <div className=" w-full  text-center lg:text-left px-3 lg:pl-6 lg:w-[100%] flex flex-col  text-lg text-gray-700 line-clamp-2">
            <p>
              Let's talk if you have any query or suggestion. We are open to learn
              from you.
            </p>
            <p>So don't hesitate to reach us anytime.</p>
          </div>
        </section>

        <div className=" bg-white flex flex-col gap-3">
          <Formik
            initialValues={{
              username: '',
              subject: '',
              email: '',
              checked: false,
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => giveOpenion(values)}
          >
            <Form className="w-full px-5 lg:px-0 h-[400px] flex flex-col gap-7 ">
              <div className='gap-5 items-center flex flex-col lg:flex-row lg:justify-between'>
                <div className="w-full lg:w-full h-full flex flex-col gap-4 order-1">
                <Field
                  name="username"
                  placeholder="Your Name"
                  className="input w-full rounded border border-gray-300
                    focus:outline-none focus:border-orange-500
                    focus:ring-2 focus:ring-orange-500/40
                    transition bg-white text-gray-600"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="subject"
                  placeholder="Subject"
                  className="input w-full rounded border border-gray-300
                    focus:outline-none focus:border-orange-500
                    focus:ring-2 focus:ring-orange-500/40
                    transition bg-white text-gray-600"
                />
                <ErrorMessage
                  name="subject"
                  component="p"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="email"
                  placeholder="Email Address"
                  className="input w-full rounded border border-gray-300
                    focus:outline-none focus:border-orange-500
                    focus:ring-2 focus:ring-orange-500/40
                    transition bg-white text-gray-600"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />


                
              </div>

              <div className="w-full lg:w-[50%] h-full flex flex-col gap-4 order-2 lg:order-2">
              <span className='w-vw justify-items-center lg:hidden'>
                
              <h2 className=' text-black text-xl font-bold'>Give Us A Review!</h2>
              </span>
  <Field
    as="textarea"
    name="message"
    placeholder="Type your message here"
    className="textarea w-full h-[150px]  lg:h-[100%] resize-none
      rounded border border-gray-300
      focus:outline-none focus:border-orange-500
      focus:ring-2 focus:ring-orange-500/40
      transition bg-white text-gray-600
      placeholder:text-lg"
  />
  <ErrorMessage
    name="message"
    component="p"
    className="text-red-500 text-sm"
  />
</div>
              </div>
              <div className="w-full lg:w-full flex flex-col gap-5 order-3 lg:order-3">
  <p className="text-xl lg:text-xl text-gray-500 font-semibold ">
                  <Field
                    type="checkbox"
                    name="checked"
                    className="checkbox border-4 border-orange-400 opacity-20
                      checked:bg-orange-500 checked:opacity-60
                      checked:border-orange-300 checked:text-white
                      
                      "
                  />
                  Send me a copy
                  <ErrorMessage
                    name="checked"
                    component="p"
                    className="text-red-500 text-sm"
                  />

                </p>
                <button
                  type="submit"
                  className="btn w-full bg-neutral-950 text-white text-xl rounded
                    lg:w-[40%] hover:bg-neutral-800"
                >
                  GIVE US A SHOT
                </button>
</div>
            </Form>
          </Formik>
        </div>
      </div>
  )
}
