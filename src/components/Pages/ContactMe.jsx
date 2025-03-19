import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === "",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).includes(true)) {
      return;
    }

    const mailtoLink = `mailto:emmsom506@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} <${formData.email}>\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center relative py-10">
      <h3 className="text-balance font-semibold text-lg sm:text-2xl md:text-5xl max-w-[40rem] text-center">
       <span className={"font-mono"}>
          Ready to take your digital presence to the next level?
       </span>
      </h3>
      <p className="md:mt-10 my-5 text-center text-balance">
        Don't settle for "good enough" - let's make it great!
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl w-full mx-auto rounded-2xl px-8 py-14 border border-purple-400 shadow-sm mt-10 z-10 space-y-8">

        <div className="flex flex-col space-y-1 w-full mb-6">
          <label className="font-medium" htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="p-2 rounded-md text-black" placeholder="Your name..." />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>

        <div className="flex flex-col space-y-1 w-full mb-6">
          <label className="font-medium " htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="p-2 rounded-md text-black" placeholder="jondoe@gmail.com" />
          {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
        </div>

        <div className="flex flex-col space-y-1 w-full mb-6">
          <label className="font-medium" htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="p-2 rounded-md text-black" placeholder="Your subject matter..." />
          {errors.subject && <p className="text-red-500 text-sm">Subject is required</p>}
        </div>

        <div className="flex flex-col space-y-1 w-full mb-8">
          <label className="font-medium" htmlFor="message">Message</label>
          <textarea rows={3} id="message" name="message" value={formData.message} onChange={handleChange} className=" rounded-md text-black" placeholder="Your message..."></textarea>
          {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
        </div>

        <button type="submit" className="bg-gradient-to-r from-[#79096d] via-[#00d4ff] to-[#79096d] bg-[length:200%_100%] shadow-lg shadow-black-100 animate-shimmer w-full h-14 rounded-lg flex items-center justify-center group cursor-pointer">
          <span>Send a message</span>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="group-hover:translate-x-2 transition duration-500 ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
