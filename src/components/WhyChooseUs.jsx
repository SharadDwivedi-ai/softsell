
import { FaShieldAlt, FaRocket, FaHandshake } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    { icon: <FaShieldAlt size={30} />, title: "Secure & Reliable", desc: "Your data and transactions are encrypted and protected." },
    { icon: <FaRocket size={30} />, title: "Fast Payouts", desc: "Get your money quickly once your license is sold." },
    { icon: <FaHandshake size={30} />, title: "Trusted Experts", desc: "Industry veterans ready to assist every step of the way." }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {features.map((f, i) => (
          <div key={i} className="p-6 rounded-lg shadow bg-white dark:bg-gray-700">
            <div className="text-indigo-600 mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
