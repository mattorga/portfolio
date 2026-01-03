const AboutDetail = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-medium mb-2">About Me</h3>
        <p className="text-sm text-foreground leading-relaxed">
          Hi! I'm Matthew Orga, a Fullstack Developer specializing in backend-heavy,
          data-driven, and AI-focused solutions.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">Background</h4>
        <p className="text-sm text-foreground leading-relaxed">
          // Background story, journey into tech, interests, etc.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">What I Do</h4>
        <p className="text-sm text-foreground leading-relaxed">
          // Focus areas, what you're passionate about building, etc.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">Currently</h4>
        <p className="text-sm text-foreground leading-relaxed">
          // What I'm Currently working on or learning
        </p>
      </div>
    </div>
  )
}

export default AboutDetail
