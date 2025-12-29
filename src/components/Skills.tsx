import { Section } from './Section';

const skillColumns = [
  ['HTML', 'CSS', 'JavaScript'],
  ['TypeScript', 'Python', 'React'],
  ['NextJS', 'TailwindCSS', 'AWS'],
];

export function Skills() {
  return (
    <Section title="Tools">
      <div className="text-white text-xs">
        {/* Grid layout: 3 columns on larger screens */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-2">
          {skillColumns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-2">
              {column.map((skill, skillIndex) => (
                <div key={skillIndex}>{skill}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
