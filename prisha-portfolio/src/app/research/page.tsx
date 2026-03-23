export default function Research() {
  return (
    <div className="space-y-16">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Research
        </h1>
        <p className="text-gray-500 max-w-2xl">
          My research focuses on multi-agent reasoning systems, multimodal ML, interpretable ML,
          and large-scale experimental evaluation across real-world datasets. I have not only contributed to research projects in these areas,
           but also designed and executed large-scale experiments, built reproducible pipelines, and led research teams.
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
            Investigating whether real-world tabular datasets admit small, interpretable decision tree models 
            that match the predictive performance of complex black-box models.
          </li>
          <li>
            This work explores the Rashomon effect in decision trees, demonstrating that many 
            structurally distinct models can achieve near-identical accuracy 
            while differing significantly in interpretability.
          </li>
          <li>
            Implementing and benchmarking optimal and near-optimal tree algorithms (SPLIT, GOSDT with ThresholdGuessBinarizer,
             RESPLIT, LicketySPLIT/RESPLIT, TREEFARMS) against 
             XGBoost across diverse real-world datasets.
          </li>
          <li>
            Quantifying performance–interpretability tradeoffs using accuracy, 
            class-specific recall, macro F1, tree depth, leaf count (log-scale), and Rashomon set size.
          </li>
          <li>
            Analyzing how preprocessing (e.g., threshold-based binarization) and dataset properties
             (e.g., class imbalance) influence model structure, solution multiplicity, and predictive behavior.
          </li>
          <li>
            Designing reproducible experimental pipelines for scalable execution on
            Rutgers’ Amarel HPC cluster.
          </li>
          <li>
            Empirically demonstrating that large Rashomon sets correspond to multiple equally performant 
            but structurally diverse decision trees, highlighting the non-uniqueness of interpretable models.
          </li>
          <li>
            Designing reproducible experimental pipelines and 
            executing large-scale experiments on Rutgers’ Amarel HPC cluster.
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
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Multimodal ML & Multiagent Deliberation
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Project 1: DynaStride: Dynamic Stride Windowing with MMCoT (Second Author)
            </h3>
            <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
              <li>
                Contributed to a hierarchical scene-captioning pipeline
                integrating dynamic stride window selection and multimodal
                chain-of-thought reasoning (MMCoT).
              </li>
              <li>
                Implemented Qwen2.5, Qwen3, MiniLM, and subcaption aggregation
                for temporally coherent caption generation.
              </li>
              <li>
                Designed evaluation frameworks for BLEU-4, METEOR, CIDEr,
                BERTScore, SBERT similarity, and temporal metrics.
              </li>
                Achieved +17% CIDEr over GPT-4o and +14% over VLLaMA-3 on the YouCook2 dataset.
              <li>
                Accepted to NeurIPS 2025 (7HVU Workshop) and AAAI 2026 (AI4EDU Workshop).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Project 2: Multi-Agent Deliberation & Consensus Dynamics (Solo Author)
            </h3>
            <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
              <li>
                Designing a multi-agent system to analyze how consensus
                emerges on subjective global opinion questions and datasets with ground truth labels.
              </li>
              <li>
                Leveraging GlobalOpinionsQA, OpinionsQA, Antropic's Persona, and Humanity's Last Exam
                 datasets for structured multi-round deliberation.
              </li>
              <li>
                Building reproducible experimental pipelines using GPT-4.1,
                DeepSeek R1, grok-3, and Llama-3.3-70B-Instruct.
              </li>
                Conducting a variety of experiments including: system prompt engineering, 
                answer rotation, and prompt engineering for consensus facilitation.
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
            Algorithms Research Shadow — The College of New Jersey (Research Shadow)
          </h2>
        </div>
        <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Sparse Dynamic Programming for RNA Folding
          </p>

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
          <li>
            <a
              href="/RNAFoldingResearch.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              RNA Folding Research Summary
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}
