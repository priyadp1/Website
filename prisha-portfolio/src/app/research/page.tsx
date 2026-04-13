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
            Multimodal ML & Scene Captioning
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
  Project 2: Multi-Agent Deliberation & Consensus Dynamics (First Author)
</h3>
<ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
  <li>
    Designed a multi-agent LLM framework to study how consensus emerges 
    across subjective and objective tasks, showing that convergence 
    is often driven by model-to-model deference rather than independent reasoning.
  </li>
  <li>
    Conducted large-scale experiments on GlobalOpinionsQA, Anthropic Persona-Written Evals, and Humanity’s Last Exam 
    using 20-round deliberation with named and anonymized GPT-4.1 agents.
  </li>
  <li>
    Developed a rotation-based experimental framework to 
    disentangle the effects of model identity and answer quality in multi-agent interactions.
  </li>
  <li>
    Introduced quantitative metrics for interaction dynamics, 
    including inter-round disagreement and directional model deference.
  </li>
  <li>
    Demonstrated that system-level interventions (e.g., prompting strategies) 
    can significantly alter or disrupt consensus formation.
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
