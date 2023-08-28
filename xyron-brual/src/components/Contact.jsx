import React, { useState } from 'react'

export const Contact = () => {
  return (
    <div
      name="Experience"
      className="relative w-full text-white py-20">

      <div className="flex flex-col justify-center items-center w-full h-full mx-auto px-8">
        <div className="max-w-screen-xl w-full py-4 pl-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#22272d]">
            Contact Me
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-10 max-w-screen-xl w-full py-4 pl-4'>
          <div className='col-span-1 flex flex-col gap-10 md:py-20'>
            <p className='font-bold text-md'>
              Email: xyron.brual@gmail.com
            </p>
            <p className='font-bold text-md'>
              Phone: +1 (905) 242-2946
            </p>
            <p className='text-md'>
              Feel free to contact me using the above information or use the form provided
            </p>
          </div>
          <div className='col-span-1'>
            <ContactForm />
          </div>
        </div>
      </div>

    </div>
  )
}

const ContactForm = () => {

  // form data
  const [msgData, setMsgData] = useState({
    "name": "",
    "email": "",
    "subject": "",
    "message": ""
  })

  // error messages
  const [errors, setErrors] = useState({
    "name": "",
    "email": "",
    "subject": "",
    "message": ""
  })

  // event handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setMsgData({ ...msgData, [e.target.name]: e.target.value })

    // Perform validation for the changed field
    const validationErrors = { ...errors };

    if (name === "name") {
      if (value.trim() === "") {
        validationErrors.name = "Please enter your name";
      } else {
        validationErrors.name = "";
      }
    }

    if (name === "email") {
      if (value.trim() === "") {
        validationErrors.email = "Please enter your email";
      } else if (
        name === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        validationErrors.email = "Invalid email address";
      } else {
        validationErrors.email = "";
      }
    }

    if (name === "subject") {
      if (value.trim() === "") {
        validationErrors.subject = "Please enter a subject line";
      } else {
        validationErrors.subject = "";
      }
    }

    if (name === "message") {
      if (value.trim() === "") {
        validationErrors.message = "Please enter your message";
      } else {
        validationErrors.message = "";
      }
    }

    setErrors(validationErrors)
  }

  const submitMsg = (e) => {
    e.preventDefault()
    console.log(msgData)
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={submitMsg}>
      <Field
        errorMsg={errors.name}
      >
        <input
          type="text"
          id="name"
          name='name'
          value={msgData.name}
          required={true}
          onChange={handleChange}
          placeholder='Name'
          className='text-md md:text-lg bg-transparent p-2 border-b-2 border-white focus:border-b-4 focus:outline-none ease-in-out duration-300'
        />
      </Field>
      <Field
        errorMsg={errors.email}
      >
        <input
          type="email"
          id="email"
          name='email'
          value={msgData.email}
          required={true}
          onChange={handleChange}
          placeholder='Email'
          className='text-md md:text-lg bg-transparent p-2 border-b-2 border-white focus:border-b-4 focus:outline-none ease-in-out duration-300'
        />
      </Field>
      <Field
        errorMsg={errors.subject}
      >
        <input
          type="text"
          id="subject"
          name='subject'
          value={msgData.subject}
          required={true}
          onChange={handleChange}
          placeholder='Subject'
          className='text-md md:text-lg bg-transparent p-2 border-b-2 border-white focus:border-b-4 focus:outline-none ease-in-out duration-300'
        />
      </Field>
      <Field
        errorMsg={errors.message}
      >
        <textarea
          id="message"
          name="message"
          value={msgData.message}
          onChange={handleChange}
          placeholder='Message'
          rows={4}
          className='text-md md:text-lg bg-transparent p-2 border-2 border-white focus:border-b-4 focus:outline-none ease-in-out duration-300'
        />
      </Field>
      <button
        type='submit'
        className='bg-transparent text-white text-md md:text-lg py-2 px-4 border-2 border-white rounded-md w-fit hover:bg-white hover:text-black ease-in-out duration-500'
      >
        Send Message
      </button>
    </form>
  )
}

const Field = ({ children, errorMsg }) => {
  return (
    <div className='flex flex-col gap-2 grow'>
      {children}

      <p className="text-red-500 text-sm mt-1 md:text-md">{errorMsg}</p>
    </div>
  )
}