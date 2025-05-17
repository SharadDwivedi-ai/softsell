
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", license: "", message: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4 bg-white dark:bg-gray-700 p-8 rounded-lg shadow">
        <input name="name" required placeholder="Name" className="w-full p-2 rounded border" onChange={handleChange} />
        <input name="email" type="email" required placeholder="Email" className="w-full p-2 rounded border" onChange={handleChange} />
        <input name="company" placeholder="Company" className="w-full p-2 rounded border" onChange={handleChange} />
        <select name="license" required className="w-full p-2 rounded border" onChange={handleChange}>
          <option value="">Select License Type</option>
          <option value="Windows">Windows</option>
          <option value="Office">Office</option>
          <option value="Adobe">Adobe</option>
        </select>
        <textarea name="message" rows="4" placeholder="Your message..." className="w-full p-2 rounded border" onChange={handleChange}></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
}
