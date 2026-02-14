export default function Research() {
  return (
    <div className="space-y-24">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Research
        </h1>
        <p className="text-gray-500 max-w-2xl">
          My work focuses on multi-agent reasoning systems, interpretable machine learning,
          and large-scale experimental evaluation across real-world datasets.
        </p>
      </div>


      {/* DIMACS */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            ML Research Extern (Team Lead) — DIMACS
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Interpretable ML & Model Multiplicity
          </p>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Spearheading empirical research on whether real-world tabular datasets admit small,
            accurate, and interpretable decision trees.
          </li>
          <li>
            Benchmarking SPLIT and LicketyRESPLIT against XGBoost
            using evaluation metrics beyond accuracy.
          </li>
          <li>
            Running large-scale experiments on Rutgers' Amarel HPC cluster.
          </li>
        </ul>
      </section>

      <hr className="border-gray-800" />


      {/* Algoverse */}
      <section className="space-y-10 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            AI Researcher — Algoverse
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Project 1: DynaStride: Dynamic Stride Windowing with MMCoT
            </h3>
            <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
              <li>
                Contributed to a hierarchical scene-captioning pipeline
                integrating dynamic stride window selection and multimodal
                chain-of-thought reasoning (MMCoT).
              </li>
              <li>
                Worked with Qwen2.5, Qwen3, MiniLM, and subcaption aggregation
                for temporally coherent caption generation.
              </li>
              <li>
                Designed evaluation frameworks for BLEU-4, METEOR, CIDEr,
                BERTScore, SBERT similarity, and temporal metrics.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Project 2: Multi-Agent LLM Deliberation & Consensus Dynamics
            </h3>
            <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
              <li>
                Designing a multi-agent LLM system to analyze how consensus
                emerges on subjective global opinion questions.
              </li>
              <li>
                Leveraging GlobalOpinionsQA and OpinionsQA datasets
                for structured multi-round deliberation.
              </li>
              <li>
                Building reproducible experimental pipelines using GPT-4.1,
                DeepSeek R1, Grok 3, and Llama-3.3-70B-Instruct.
              </li>
              <li>
                Creating visualizations of results with pie charts,
                bar charts, and line plots via Matplotlib.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />


      {/* TCNJ */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Algorithms Researcher — The College of New Jersey
          </h2>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Investigated classical and modern RNA secondary structure
            prediction algorithms including Nussinov, Zuker, and LinearFold.
          </li>
          <li>
            Implemented sparse dynamic programming strategies to reduce
            computational complexity in large-sequence folding tasks.
          </li>
          <li>
            Deployed large-scale experiments on a SLURM-managed HPC cluster
            using the ViennaRNA package.
          </li>
          <li>
            Automated batch processing pipelines to benchmark folding accuracy,
            energy scores, and runtime across thousands of RNA sequences.
          </li>
        </ul>
      </section>

    </div>
  );
}
