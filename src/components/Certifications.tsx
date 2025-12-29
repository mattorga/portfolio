import { Section } from './Section';

interface Certification {
  issuer: string;
  name: string;
}

const certifications: Certification[] = [
  { issuer: 'AWS', name: 'Certified AI Practitioner' },
  { issuer: 'NVIDIA', name: 'Building LLM Applications with Prompt Engineering' },
];

export function Certifications() {
  return (
    <Section title="Certifications" counter="1 of 4">
      <div className="text-white text-xs space-y-3">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-start justify-between gap-4">
            <span className="flex-1">{cert.name}</span>
            <span className="text-right">{cert.issuer}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
