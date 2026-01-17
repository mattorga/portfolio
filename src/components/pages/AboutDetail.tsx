

const AboutDetail = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-medium mb-2">About Me</h3>
        <p className="text-sm text-foreground leading-relaxed">
          Hi! I'm Matthew, I am a Fullstack Developer specializing in backend-heavy,
          data-driven, and AI-focused solutions.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">[Background]</h4>
        <p className="text-sm text-foreground leading-relaxed">
          {/*// Background story, journey into tech, interests, etc.*/}
          I started my journey in tech even before college. Curious about how software works, I took Harvard's CS50x in 2020.
          My first programming language was C, where along with learning syntax and logic, I had to learn about resource-management.
          Dealing with memory and pointers early on cemented my <span className="italic">personality</span> as a programmer, instilling in me
          not just the very foundations, but a gravitation towards performant, reliable, and most importantly secure code.
          Now, I bring this trait even with today's level of abstractions especially in web development.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">[What I Do]</h4>
        <p className="text-sm text-foreground leading-relaxed">
          {/*// Focus areas, what you're passionate about building, etc.*/}


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
