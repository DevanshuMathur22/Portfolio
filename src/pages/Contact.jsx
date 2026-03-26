import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="
        px-6 md:px-16 py-24
        bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50
        text-slate-800 relative 
      "
    >
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold">
          Get In{" "}
          <span className="
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
          ">
            Touch
          </span>
        </h2>

        <p className="mt-4 text-slate-600">
          Let’s discuss your ideas or build something amazing together.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
        {[
          {
            icon: <Mail size={22} />,
            text: "devanshumathur9@gmail.com",
          },
          {
            icon: <Phone size={22} />,
            text: "+91 9876544488",
          },
          {
            icon: <MapPin size={22} />,
            text: "Jaipur, Rajasthan",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="
              group p-5 rounded-2xl
              bg-white/60 backdrop-blur-xl
              border border-gray-200
              shadow-sm text-center
              hover:-translate-y-2 transition
              relative
            "
          >
            {/* Glow */}
            <div className="
              absolute inset-0 rounded-2xl opacity-0
              group-hover:opacity-100
              bg-gradient-to-r from-indigo-500/20 to-purple-500/20
              blur-xl transition
            "></div>

            <div className="relative z-10">
              <div className="text-indigo-600 mb-2 flex justify-center">
                {item.icon}
              </div>

              <p className="text-sm text-slate-700 font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FORM */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message Sent 🚀");
        }}
        className="
          mt-16 max-w-2xl mx-auto
          p-8 rounded-2xl
          bg-white/70 backdrop-blur-xl
          border border-gray-200
          shadow-lg
          space-y-5
        "
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
        ></textarea>

        <button
          type="submit"
          className="
            w-full py-3 rounded-xl font-medium text-white
            bg-gradient-to-r from-indigo-500 to-purple-500
            hover:scale-105 transition duration-300
            flex items-center justify-center gap-2
          "
        >
          <Send size={18} />
          Send Message
        </button>
      </motion.form>

      {/* SOCIAL */}
      <div className="flex justify-center gap-6 mt-10 text-slate-600">
        <Linkedin className="hover:text-indigo-500 cursor-pointer" />
        <Github className="hover:text-black cursor-pointer" />
        <Instagram className="hover:text-pink-500 cursor-pointer" />
      </div>
    </section>
  );
}