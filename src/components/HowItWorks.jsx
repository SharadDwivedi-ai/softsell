
import { FaUpload, FaDollarSign, FaMoneyCheckAlt } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    { icon: <FaUpload size={30} />, title: "Upload License", description: "Submit details of your unused software licenses." },
    { icon: <FaDollarSign size={30} />, title: "Get Valuation", description: "Receive a market-based price estimate quickly." },
    { icon: <FaMoneyCheckAlt size={30} />, title: "Get Paid", description: "We handle the rest and pay you securely." }
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {steps.map((step, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <div className="text-blue-600 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
