export default function Skills() {
  return (
    <section id="skills" className="mt-24 scroll-mt-24">
      <h2 className="text-3xl font-semibold mb-12 tracking-tight">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-400 leading-relaxed">
        {/* Core ML & AI */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Core ML & AI
          </h3>
          <p>
            PyTorch, Transformers, Hugging Face, FAISS, LightGBM, XGBoost,
            CNNs, Temporal Fusion Transformers (TFT), Retrieval-Augmented Generation (RAG)
          </p>
        </div>

        {/* Programming */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Programming Languages
          </h3>
          <p>
            Python, C, C++, Java, JavaScript, PostgreSQL, MATLAB, HTML/CSS, GraphQL
          </p>
        </div>

        {/* ... rest unchanged */}
      </div>
    </section>
  );
}
