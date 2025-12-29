import { Header } from './components/Header';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-[#2D2A2E] p-4 md:p-8">
      {/* Main container - centered with max width */}
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8">
          {/* Left Sidebar - Header and sections */}
          <div className="lg:w-[350px] space-y-8">
            <Header />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
          </div>

          {/* Right Side - Main content area (currently empty) */}
          <div className="hidden lg:block bg-[#D9D9D9] border border-white min-h-[757px]">
            {/* This is the large content area on the right side of the design */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
