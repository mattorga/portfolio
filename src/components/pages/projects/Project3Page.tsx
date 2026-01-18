import { SiPython, SiKeras, SiGithub } from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'
import { MdOutlineVisibility } from 'react-icons/md'

const Project3Page = () => {
  return (
    <div className="space-y-6">
      {/* Header - Rank 3 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-accent/10 rounded">Team Lead</span>
          <span className="px-2 py-0.5 bg-accent/10 rounded">Developer</span>
          <span>2024</span>
        </div>
        <h3 className="text-2xl font-bold leading-tight">
          Pathological Gait Classification
        </h3>
        <p className="text-sm text-coral">Using a Hybrid CNN-LSTM</p>
        <div className="flex gap-3">
          <a href="#" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <SiGithub className="w-4 h-4" />
            View Code
          </a>
        </div>
      </div>

      {/* Description - Rank 2 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">About</h4>
        <p className="text-sm text-muted-foreground">
          Trained a Hybrid CNN-LSTM model that can classify 5 different pathological gaits
          and a normal gait. The features used are the joint angles of the hip, knee, and ankle,
          where a walk attempt contains 900 frames.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-2 py-1 bg-coral/10 border border-coral/20 rounded text-xs">Antalgic</span>
          <span className="px-2 py-1 bg-coral/10 border border-coral/20 rounded text-xs">Lurch</span>
          <span className="px-2 py-1 bg-coral/10 border border-coral/20 rounded text-xs">Steppage</span>
          <span className="px-2 py-1 bg-coral/10 border border-coral/20 rounded text-xs">Stiff-legged</span>
          <span className="px-2 py-1 bg-coral/10 border border-coral/20 rounded text-xs">Trendelenburg</span>
          <span className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-xs">Normal</span>
        </div>
      </div>

      {/* Architecture - Rank 5 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Architecture</h4>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Input:</span>
            <span>Joint angles (hip, knee, ankle) across 900 frames per walk</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Extraction:</span>
            <span>OpenPose for 2D pose estimation and joint angle calculation</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">CNN:</span>
            <span>Spatial feature extraction from joint angle patterns</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">LSTM:</span>
            <span>Temporal sequence learning across gait cycles</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Output:</span>
            <span>6-class classification (5 pathological + normal)</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded border border-accent/10">
          <p className="text-xl font-bold text-accent">99.72%</p>
          <p className="text-xs text-muted-foreground mt-1">Training Accuracy</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded border border-accent/10">
          <p className="text-xl font-bold text-accent">66.67%</p>
          <p className="text-xs text-muted-foreground mt-1">Testing Accuracy</p>
        </div>
      </div>

      {/* Tech Stack - Rank 1 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Tech Stack</h4>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <SiPython className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">Python</span>
          </div>
          <div className="flex items-center gap-2">
            <SiKeras className="w-5 h-5 text-red-500" />
            <span className="text-sm">Keras</span>
          </div>
          <div className="flex items-center gap-2">
            <TbBrain className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Deep Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineVisibility className="w-5 h-5 text-green-400" />
            <span className="text-sm">OpenPose</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project3Page
