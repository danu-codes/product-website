import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-950 transition-colors">
      
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            We would love to hear from you. Send us a message.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-6 md:p-10">

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}