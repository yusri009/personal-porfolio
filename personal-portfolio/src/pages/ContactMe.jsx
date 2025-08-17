import React, { useRef, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const sendMail = (e) => {
    e.preventDefault();

    const { name, email, message } = formValues;

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending the message.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }


    emailjs
      .sendForm(
        "service_ha2h4nm",   
        "template_yp9udyt",  
        form.current,        
        { publicKey: "zO1IsqcWC53djM-5o" }
      )
      .then(() => {
        alert("Email has been sent !!!");
        setFormValues({ name: "", email: "", message: "" }); 
        form.current.reset(); 
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="lg:w-2/5">
      <div className="mt-10">
        <h1 className="font-bold underline text-5xl text-center font-headFont">
          Contact Me
        </h1>
      </div>
      <div className="m-10 grid">
        <form ref={form} onSubmit={sendMail} className="grid">
          <div className="m-10">
            <label className="font-headFont text-3xl">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="border-2 w-full rounded-sm p-2"
              required
              placeholder='Enter you name'
            />
          </div>

          <div className="m-10">
            <label className="font-headFont text-3xl">E-mail</label>
            <br />
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="border-2 w-full rounded-sm p-2"
              required
              placeholder='Enter your email'
            />
          </div>

          <div className="m-10">
            <label className="font-headFont text-3xl">Message</label>
            <br />
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              className="border-2 w-full rounded-sm p-2 min-h-32"
              required
              placeholder='Enter the message'
            />
          </div>

          <div className="grid place-items-center mb-10">
            <button
              type="submit"
              className="bg-secondaryColor text-mainColor w-2/5 rounded-lg flex justify-center p-2 hover:text-secondaryColor hover:bg-mainColor hover:border-2 cursor-pointer"
            >
              <IoIosSend className="text-3xl" />
              <p className="font-subFont text-xl"> Send</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
