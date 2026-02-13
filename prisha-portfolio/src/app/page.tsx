export default function Home() {
  return (
    <div className="space-y-28">

      {/* Hero Section */}
      <section className="space-y-8">
        <h1 className="text-6xl font-bold text-white tracking-tight">
          Prisha Priyadarshini
        </h1>

        <p className="text-xl text-gray-400">
          AI/ML Researcher · Computer Science & Mathematics · Rutgers University
        </p>

        <div className="max-w-3xl text-gray-300 leading-relaxed space-y-4 text-lg">
          <p>
            I study <span className="text-white font-medium">multi-agent consensus formation</span>, 
            <span className="text-white font-medium"> multimodal machine learning</span>, and 
            <span className="text-white font-medium"> interpretable AI</span>. 
            My work investigates how structured reasoning and reliable behavior 
            emerge in large-scale models.
          </p>

          <p>
            My research spans LLM deliberation systems, multimodal captioning architectures,
            and decision tree interpretability, combining empirical experimentation 
            with principled algorithmic analysis.
          </p>

          <p className="text-gray-400">
            AWS Certified Machine Learning – Specialty · AWS Certified Cloud Practitioner
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-white tracking-tight">
          Research Experience
        </h2>

        <div className="space-y-8">

          {/* DIMACS */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium text-white">
                Interpretable Machine Learning
              </h3>
              <p className="text-sm text-gray-400">
                DIMACS Center · Rutgers University
              </p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">
              Jan 2026 – Present
            </span>
          </div>

          {/* Multi-Agent */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium text-white">
                Multi-Agent LLM Deliberation & Consensus Dynamics
              </h3>
              <p className="text-sm text-gray-400">
                Algoverse AI Research
              </p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">
              Sept 2025 – Present
            </span>
          </div>

          {/* Multimodal */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium text-white">
                Multimodal Captioning Systems
              </h3>
              <p className="text-sm text-gray-400">
                Algoverse · NeurIPS 2025 (7HVU Oral) · AAAI 2026 (AI4EDU)
              </p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">
              June 2025 – Dec 2025
            </span>
          </div>

          {/* Algorithms */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium text-white">
                Algorithms Researcher
              </h3>
              <p className="text-sm text-gray-400">
                The College of New Jersey
              </p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">
              Jan 2025 – May 2025
            </span>
          </div>

        </div>
      </section>

      {/* Coursework Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-white tracking-tight">
          Selected Coursework
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300">

          <div>
            <h3 className="text-white font-medium mb-2">
              Algorithms & Theory
            </h3>
            <p>Data Structures · Discrete Structures I–II · Design & Analysis of Algorithms</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-2">
              Artificial Intelligence
            </h3>
            <p>Artificial Intelligence · Deep Learning · Natural Language Processing</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-2">
              Mathematics
            </h3>
            <p>Linear Algebra · Calculus I–III · Differential Equations · Probability & Statistics</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-2">
              Systems
            </h3>
            <p>Computer Architecture · Operating Systems</p>
          </div>

        </div>
      </section>

    </div>
  );
}
