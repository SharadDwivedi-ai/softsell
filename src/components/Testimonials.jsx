
export default function Testimonials() {
  const reviews = [
    { name: "Alice Johnson", role: "IT Manager", company: "TechCorp", review: "SoftSell made it incredibly easy to get value from our old licenses." },
    { name: "Michael Lee", role: "CIO", company: "InnovaSoft", review: "Fast, reliable, and hassle-free experience. Highly recommended!" }
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Customer Testimonials</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <p className="italic">"{r.review}"</p>
            <p className="mt-4 font-semibold">{r.name}</p>
            <p className="text-sm text-gray-500">{r.role} at {r.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
