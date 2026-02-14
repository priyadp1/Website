export default function IndustryExperience() {
  return (
    <div className="space-y-24">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Industry Experience
        </h1>
        <p className="text-gray-500 max-w-2xl">
          My industry work focuses on large-scale machine learning systems,
          geospatial modeling, and production-ready AI experimentation.
        </p>
      </div>


      {/* Regeneron */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Incoming ML Intern — Regeneron
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Summer 2026
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
          Joining Regeneron’s Machine Learning team to work on applied
          modeling and validation systems within large-scale biomedical
          and operational pipelines.
        </p>
      </section>

      <hr className="border-gray-800" />


      {/* Insurity */}
      <section className="space-y-10 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            AI Associate Developer — Insurity
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Oct 2025 – Jan 2026
          </p>
        </div>

        {/* Project 1 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Peril Prediction Project
          </h3>

          <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
            <li>
              Engineered large-scale geospatial preprocessing pipelines
              (6M+ rows) integrating climate variables with peril events
              via time alignment, spatial filtering, and feature engineering
              using Python, Pandas, and GeoPandas.
            </li>
            <li>
              Built and evaluated LightGBM-based multi-class peril classifiers,
              applying SMOTE class balancing to improve accuracy and F1 score
              by approximately 10%.
            </li>
            <li>
              Experimented with a Temporal Fusion Transformer (TFT),
              modeling seasonal dependencies via cyclical week encoding
              and training GPU-accelerated PyTorch models on NVIDIA RTX hardware.
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Computer Vision — Geospatial Change Detection
          </h3>

          <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
            <li>
              Developed a geospatial change-detection system for before/after
              satellite imagery using OpenCV and deep learning pipelines.
            </li>
            <li>
              Implemented CNN and Transformer-based architectures including
              U-Net++ for high-resolution semantic segmentation.
            </li>
          </ul>
        </div>

      </section>

    </div>
  );
}
