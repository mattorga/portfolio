const GoldThesisAwardPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with badge */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
            <span className="text-3xl">🏆</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Gold Thesis Award</h3>
            <p className="text-coral text-sm mt-1">De La Salle University</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Awarded: May 2024</p>
      </div>

      {/* About the award */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">About the Award</h4>
        <p className="text-sm text-muted-foreground">
          The Gold Thesis Award is the highest distinction given to undergraduate
          thesis projects at De La Salle University, recognizing exceptional research,
          innovation, and technical excellence.
        </p>
      </div>

      {/* Thesis details */}
      <div className="p-4 bg-accent/5 border border-accent/10 rounded-lg space-y-3">
        <div>
          <h4 className="text-sm font-semibold text-accent mb-1">Thesis Title</h4>
          <p className="text-sm text-muted-foreground">
            [Your Thesis Title Here - AI/ML/Backend Related]
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-accent mb-1">Research Focus</h4>
          <p className="text-sm text-muted-foreground">
            Developed an innovative solution addressing [problem domain], utilizing
            machine learning and full-stack development techniques.
          </p>
        </div>
      </div>

      {/* Key achievements */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Key Achievements</h4>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Selected as Best Thesis among 50+ submissions</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Presented research findings to academic panel</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Demonstrated technical innovation and practical application</span>
          </li>
        </ul>
      </div>

      {/* Technologies used */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Python</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Machine Learning</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">React</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Data Analysis</span>
        </div>
      </div>

      {/* Impact */}
      <div className="p-3 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded border-l-4 border-yellow-400">
        <h4 className="text-xs font-semibold mb-1">Impact & Recognition</h4>
        <p className="text-xs text-muted-foreground">
          This recognition validates my ability to conduct independent research and
          develop innovative technical solutions - skills crucial for backend-heavy
          and data-driven development roles.
        </p>
      </div>
    </div>
  )
}

export default GoldThesisAwardPage
