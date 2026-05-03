export default function Home() {
  const faqs = [
    {
      q: "How does the AI categorization work?",
      a: "We use OpenAI's API to analyze each feedback item's content, sentiment, and urgency, then automatically route it to the correct team with a confidence score."
    },
    {
      q: "Which support platforms do you integrate with?",
      a: "FeedbackRouter AI connects via webhooks to Intercom, Zendesk, Freshdesk, and any platform that supports outbound webhooks."
    },
    {
      q: "Can I customize the routing rules?",
      a: "Yes. You can define custom routing rules, priority thresholds, and team assignments on top of the AI suggestions from your dashboard."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Customer Success
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Smart Customer Feedback{" "}
          <span className="text-[#58a6ff]">Routing & Categorization</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop triaging feedback manually. Our AI reads every submission, classifies urgency, and routes it to the right teammate — instantly.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $35/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 14-day trial.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$35</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Unlimited feedback items</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>AI categorization &amp; urgency scoring</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Automated routing rules engine</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Webhook integrations (Intercom, Zendesk…)</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Real-time team notifications</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Analytics dashboard</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
