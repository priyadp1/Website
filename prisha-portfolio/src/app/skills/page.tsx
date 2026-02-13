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
            Core AI & ML
          </h3>
          <p>
            PyTorch, Transformers, Hugging Face, FAISS, LightGBM, XGBoost,
            CNNs, Temporal Fusion Transformers (TFT), Retrieval-Augmented Generation (RAG)
          </p>
        </div>

         {/*Programming Languages */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Programming Languages
          </h3>
            <p>
                Python, C, C++, Java, JavaScript, MATLAB
            </p>
            </div>
        {/* Web & Frontend */}
        <div>
            <h3 className="text-lg font-medium text-white mb-3">
                Web & Frontend
            </h3>
            <p>
                React, Next.js, HTML/CSS, Tailwind CSS, GraphQL
            </p>
        </div>
        {/* Databases */}
        <div>
            <h3 className="text-lg font-medium text-white mb-3">
                Databases
            </h3>
            <p>
                SQL, PostgreSQL
            </p>
        </div>

        {/* Research Concepts */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Research Concepts
          </h3>
            <p>
                OpenAI APIs, Multi-Agent LLM Systems, Multimodal Chain-of-Thought (MMCoT)
            </p>
            </div>

        {/* Compute Tools */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Data & Scientific Computing
          </h3>
          <p>
           NumPy, Pandas, GeoPandas, Matplotlib, Seaborn
          </p>
        </div>

        {/* Cloud, Systems & MLOps */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Cloud, Systems & MLOps
          </h3>
            <p>
                Git, GitHub, Docker, AWS, Microsoft Azure,  Azure AI Foundry, CI/CD, 
                Bitbucket, Jira, RunPod, Google Colab, Anaconda
            </p>
            </div>
        
        

        {/* ... rest unchanged */}
      </div>
    </section>
  );
}
