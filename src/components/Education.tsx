import { Section } from './Section';

export function Education() {
  return (
    <Section title="Education">
      <div className="text-white text-xs space-y-1">
        <div className="flex flex-wrap items-start gap-2">
          <span>BS Computer Engineering</span>
          <span>@</span>
          <span>DLSU</span>
        </div>
        <div className="pl-4">
          <div>|-- Gold Thesis Awardee</div>
          <div>|-- Multiple Dean's Lister (2024)</div>
        </div>
      </div>
    </Section>
  );
}
