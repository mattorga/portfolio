interface SectionProps {
  title: string;
  children: React.ReactNode;
  counter?: string;
}

export function Section({ title, children, counter }: SectionProps) {
  return (
    <div className="relative">
      {/* Background card with border */}
      <div className="absolute top-3 left-0 right-0 bottom-0 bg-[#D9D9D9] border border-white" />

      {/* Content container - positioned relative to overlap the background */}
      <div className="relative">
        {/* Section title badge */}
        <div className="inline-block bg-[#2D2A2E] px-5 py-1 shadow-md">
          <span className="text-white text-xs">[{title}]</span>
        </div>

        {/* Optional counter badge (top right) */}
        {counter && (
          <div className="absolute top-0 right-0 bg-[#2D2A2E] px-5 py-1 shadow-md">
            <span className="text-white text-xs">{counter}</span>
          </div>
        )}

        {/* Section content */}
        <div className="pt-4 pb-4 px-5">
          {children}
        </div>
      </div>
    </div>
  );
}
