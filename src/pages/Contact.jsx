import React, { useRef, useState } from "react";
// import { useHref } from "react-router-dom";
import emailjs from "@emailjs/browser"; // npm install @emailjs/browser
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
// import { arrow } from "../assets/icons";
import { express } from "../assets/icons";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // specific place to update
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Basavakiran J Koti",
          from_email: form.email,
          to_email: "basavakoti25@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setisLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        }); // show alert

        setTimeout(() => {
          hideAlert(false);
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setisLoading(false);
        console.log(error);
        showAlert({
          show: true,
          text: "I didnt recieve your message",
          type: "danger",
        }); // show alert
      });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container gap-10">
      {alert.show && <Alert {...alert} />}{" "}
      {/*if alert.show is true then render Alert and pass to all property */}
      {/* <Alert text = "test"/> only to check*/}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div>
        <img
          src={express}
          alt="myphoto"
          className="w-[100vh] h-[88vh] object-contain"
        />
      </div>
    </section>
  );
};

export default Contact;
