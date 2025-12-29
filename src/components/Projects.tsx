import { Section } from './Section';

interface Project {
  name: string;
  techStack: string;
}

const projects: Project[] = [
  { name: 'Project 1', techStack: 'Tech Icons' },
  { name: 'Project 2', techStack: 'Tech Icons' },
  { name: 'Project 3', techStack: 'Tech Icons' },
];

export function Projects() {
  return (
    <Section title="Projects" counter="1 of n">
      <div className="text-white text-xs space-y-2">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start justify-between gap-4">
            <span>{project.name}</span>
            <span>{project.techStack}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
