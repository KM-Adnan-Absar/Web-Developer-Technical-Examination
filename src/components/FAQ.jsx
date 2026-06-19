

export default function FAQSection() {
  const faqs = [
    {
      question: "Do I have to sign a long-term contract?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    },
    {
      question: "Can I pay for a whole year?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage"
    },
    {
      question: "What if I need help?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1d3a] tracking-tight mb-16">
          Common Questions
        </h2>

        {/* FAQ List Container */}
        <div className="space-y-12">
          {faqs.map((item, index) => (
            <div key={index} className="space-y-3">
              {/* Question */}
              <h3 className="text-lg sm:text-xl font-bold text-[#0f1d3a]">
                {item.question}
              </h3>
              {/* Answer Body */}
              <p className="text-base text-slate-400 font-normal leading-relaxed max-w-4xl">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Outlined Action Button */}
        <div className="mt-16">
          <button className="inline-flex items-center justify-center border border-sky-400 text-[#1e4e8c] font-bold py-3.5 px-8 rounded-2xl bg-white hover:bg-sky-50/50 transition-colors duration-200 focus:outline-none shadow-sm active:scale-98">
            More Questions
          </button>
        </div>

      </div>
    </section>
  );
}