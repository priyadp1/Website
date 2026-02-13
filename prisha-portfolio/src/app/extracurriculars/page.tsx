export default function Extracurriculars() {
  return (
    <div className="space-y-24">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Extracurriculars
        </h1>
        <p className="text-gray-500 max-w-2xl">
          I have a vast range of extracurricular invovements, spanning 
          academic service, leadership, and athletics 
        </p>
      </div>


      {/* Mathematics Grader */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
           Mathematics Grader - Rutgers University - New Brunswick
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Jan 2026 - Present
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
          Grading and assisting with teaching of Multivariable Calculus
          at Rutgers University - New Brunswick.
        </p>
      </section>

      <hr className="border-gray-800" />


      {/* Peer Tutor */}
      <section className="space-y-10 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Peer Tutor — The College of New Jersey
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Sept 2024 – May 2025
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
            Tutored students in a range of subjects including Linear Algebra, Data Structures, 
            Analysis of Algorithms, General Physics I, and Statistical Inference and Probability.

        </p>
      </section>

      <hr className="border-gray-800" />

        {/* Recruitment Chair */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
           Recruitment Chair - Kappa Theta Pi Zeta Chapter (The College of New Jersey)
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Dec 2025 - May 2024
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
          Coordinated the rush process for the spring 2025 semester to 
          attract top talent to Kappa Theta Pi and brought in 10 new members to the fraternity.
        </p>
      </section>

      <hr className="border-gray-800" /> 
      
        {/* Varsity Tennis */}
        <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
           Varsity Tennis Player - The College of New Jersey
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Aug 2023 - May 2024
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
          Competed as a member of the TCNJ varsity tennis team, 
          participating in regular season matches and tournaments across the region, 
          and eventually earned All-NJAC Singles and Doubles recognition (2024) for 
          athletic and competitive excellence. 

        </p>
      </section> 

     </div>
  );
}
