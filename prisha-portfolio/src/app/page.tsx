export default function Home() {
  return (
    <div className="space-y-20">

      <section className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Prisha Priyadarshini
        </h1>

        <p className="text-xl text-gray-400">
          AI Researcher & Developer | CS & Mathematics @ Rutgers
        </p>

        <p className="max-w-2xl text-gray-300 leading-relaxed">
          I study multi-agent consensus formation, Multimodal Machine Learning ,
          and interpretable Machine Learning. My work spans LLM reasoning systems, large-scale GPU experimentation, and
          interpretable decision tree algorithms.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Current Focus
        </h2>

        <ul className="space-y-2 text-gray-300">
          <li>• Multi-Agent LLM Deliberation & Consensus Dynamics (Algoverse)</li>
          <li>• Interpretable Machine Learning (DIMACS)</li>
          <li>• Multimodal Captioning Systems (NeurIPS 2025 7HVU Oral and AAAI 2026 AI4EDU)</li>
        </ul>
      </section>

    </div>
  );
}
