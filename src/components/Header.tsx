import githubIcon from '../assets/images/github-icon.png';
import linkedinIcon from '../assets/images/linkedin-icon.png';

export function Header() {
  return (
    <div className="mb-8">
      {/* Name - large heading */}
      <h1 className="text-4xl md:text-[40px] leading-[1.3] text-white mb-12">
        Matthew
        <br />
        Orga
      </h1>

      {/* Social links */}
      <div className="flex items-center gap-8 text-white text-xs">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <img src={githubIcon} alt="Github" className="w-6 h-6" />
          <span>Github</span>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:your.email@example.com"
          className="hover:opacity-70 transition-opacity"
        >
          Email
        </a>
      </div>
    </div>
  );
}
