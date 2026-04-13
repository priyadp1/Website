export default function Research() {
  return (
    <div className="space-y-16">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Research
        </h1>
        <p className="text-gray-500 max-w-2xl">
          My research focuses on multi-agent reasoning systems, multimodal ML, interpretable ML,
          and large-scale experimental evaluation across real-world datasets. 
          I have not only contributed to research projects in these areas,
          but also designed and executed large-scale experiments,
          built reproducible pipelines, and led research teams.
        </p>
      </div>


      {/* DIMACS */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Lead ML Research Extern — DIMACS / Rutgers MBS Exchange
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Interpretable ML & Model Multiplicity
          </p>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Leading an empirical study under Dr. Linda Ness on interpretable decision trees (SPLIT, GOSDT, LicketySPLIT, LicketyRESPLIT)
            against 3 boosting models (XGBoost, LightGBM, CatBoost) across 6 real-world datasets examining
            conditions where simple models can achieve near-identical accuracy to complex models, and 
            how dataset properties influence model structure and multiplicity.
          </li>
          <li>
            This work explores the Rashomon effect in decision trees, demonstrating that many 
            structurally distinct models can achieve near-identical accuracy 
            while differing significantly in interpretability.
          </li>
          <li>
            Quantifying performance–interpretability tradeoffs using accuracy, 
            class-specific recall, macro F1, tree depth, leaf count (log-scale), and Rashomon set size.
          </li>
          <li>
            Analyzing how preprocessing (SMOTE, TGB) reshapes Rashomon set size and model interpretability.
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
      Multi-Agent Reasoning & Multimodal Machine Learning
    </p>
  </div>

  <div className="space-y-8">

    {/* Project 1 — STRONGEST FIRST */}
    <div>
      <h3 className="text-lg font-semibold text-white">
        Multi-Agent Deliberation & Consensus Dynamics (First Author, Solo)
      </h3>
      <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
        <li>
          Developed a multi-agent LLM framework to investigate how consensus emerges 
          across subjective and objective tasks, identifying <span className="text-white font-medium"> model-to-model deference </span> 
          as a primary driver of convergence rather than independent reasoning.
        </li>
        <li>
          Designed and executed large-scale 20-round deliberation experiments across 
          GlobalOpinionsQA, Anthropic Persona-Written Evals, and Humanity’s Last Exam 
          using named and anonymized agents from the GPT-4.1 family (GPT-4.1, GPT-4.1-nano, GPT-4.1-mini).
        </li>
        <li>
          Introduced a <span className="text-white font-medium"> rotation-based experimental paradigm </span> 
          to disentangle the effects of model identity vs. answer quality, 
          demonstrating that response quality plays a stronger role in deference dynamics.
        </li>
        <li>
          Formalized quantitative metrics for multi-agent interaction, including inter-round disagreement, 
          pairwise disagreement, and directional model deference.
        </li>
        <li>
          Showed that system-level interventions (e.g., prompting strategies) can 
          significantly alter or destabilize consensus formation.
        </li>
        <li>
          Paper in preparation for submission to ICML workshops 
          (Pluralistic Alignment, AI4Good, Epistemic Intelligence in ML).
        </li>
      </ul>
    </div>

    {/* Project 2 */}
    <div>
      <h3 className="text-lg font-semibold text-white">
        DynaStride: Dynamic Stride Windowing with MMCoT (Second Author)
      </h3>
      <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
        <li>
          Contributed to a hierarchical video captioning pipeline combining dynamic stride window selection 
          with multimodal chain-of-thought reasoning (MMCoT) for temporally coherent scene understanding.
        </li>
        <li>
          Implemented and integrated Qwen2.5, Qwen3, and MiniLM models with 
          subcaption aggregation to improve long-range temporal consistency.
        </li>
        <li>
          Designed a comprehensive evaluation framework spanning BLEU-4, METEOR, CIDEr, 
          BERTScore, SBERT similarity, and temporal alignment metrics.
        </li>
        <li>
          Achieved <span className="text-white font-medium"> +17% CIDEr over GPT-4o 
            and +14% over VideoLLaMA-3 </span> on the YouCook2 dataset.
        </li>
        <li>
          Accepted to <span className="text-white font-medium"> NeurIPS 2025 (7HVU Workshop, Oral) </span> 
          and <span className="text-white font-medium"> AAAI 2026 (AI4EDU Workshop) </span>.
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
            Algorithms Research Shadow — The College of New Jersey
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
