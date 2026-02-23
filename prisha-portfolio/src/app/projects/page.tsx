export default function Projects() {
  return (
    <div className="space-y-24">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Projects
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Selected engineering and applied machine learning projects
          spanning retrieval systems, geospatial modeling, and full-stack AI deployment.
        </p>
      </div>
      
      {/* GenreBlender */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            GenreBlender
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Generative AI Music Mixer & Classifier
          </p>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
  <li>
    Built a generative AI system that blends two music genres using a 
    controllable slider (α ∈ [0,1]) and generates hybrid audio with Meta’s MusicGen.
  </li>

  <li>
    Designed a clean ML pipeline on the GTZAN dataset, including feature selection, 
    scaling, label encoding, and reproducible preprocessing for inference.
  </li>

  <li>
    Trained a 4-layer PyTorch MLP (92% validation accuracy) using 
    scikit-learn’s GroupShuffleSplit to prevent data leakage and 
    predict genre probabilities from audio features.
  </li>

  <li>
    Developed a measurable genre-blending framework by comparing predicted probabilities 
    against a weighted target distribution to quantify how well the blend worked 
    via Target = (α·A) + (1−α)·B.
  </li>

  <li>
    Built and deployed an interactive Streamlit web application enabling 
    real-time genre blending, probabilistic evaluation, and 10-second AI-generated audio output.
  </li>
</ul>
      </section>

      <hr className="border-gray-800" />

      {/* PocketRAG */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            PocketRAG
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Retrieval-Augmented Generation System
          </p>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Built a lightweight RAG web application enabling instant
            PDF summarization and document-based question answering.
          </li>
          <li>
            Implemented semantic search using FAISS vector indexing
            with embedding-based chunk retrieval.
          </li>
          <li>
            Integrated Gemini API for context-aware generation with
            dynamic prompt construction.
          </li>
          <li>
            Designed clean frontend UI for real-time query-response
            streaming and document upload.
          </li>
        </ul>
      </section>

      <hr className="border-gray-800" />


      {/* Telematics UBI */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Telematics UBI Prototype
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Usage-Based Insurance Modeling Platform
          </p>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Developed a full-stack usage-based insurance system for
            telematics risk scoring and driver behavior analysis.
          </li>
          <li>
            Built XGBoost-based risk prediction models trained on
            telematics driving data with engineered behavioral features.
          </li>
          <li>
            Implemented FastAPI backend for model serving and
            REST endpoints with secure AWS deployment.
          </li>
          <li>
            Designed React frontend dashboard visualizing driver risk
            scores and prediction outputs.
          </li>
        </ul>
      </section>
      
      <hr className="border-gray-800" />


      {/* Personal Portfolio */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            This Website!
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Personal Portfolio
          </p>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Designed and deployed a responsive personal portfolio website using Next.js, 
            Tailwind CSS, and TypeScript to showcase my work in AI/ML
          </li>
          <li>
             Implemented GitHub-based CI/CD with Vercel for 
             automated build and deployment on every commit.
          </li>
          <li>
             Leveraged modern React architecture (App Router) and 
             optimized performance using built-in Next.js font and asset optimization features
          </li>
        </ul>
      </section>


    </div>
  );
}
