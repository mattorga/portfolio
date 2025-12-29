import { Section } from './Section';

interface Role {
  company: string;
  position: string;
}

const roles: Role[] = [
  { company: 'SupervAIse', position: 'Fullstack Developer' },
  { company: 'ISI', position: 'Fullstack Developer Intern' },
  { company: 'DLSU ACCESS', position: 'Committee Officer' },
];

export function Experience() {
  return (
    <Section title="Experience" counter="1 of n">
      <div className="text-white text-xs space-y-3">
        {roles.map((role, index) => (
          <div key={index} className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <span>{role.position}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>@</span>
              <span className="text-right">{role.company}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
