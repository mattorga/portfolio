import { SiPython, SiOpencv, SiGithub } from 'react-icons/si'
import { MdOutlineVisibility } from 'react-icons/md'
import { TbYoga } from 'react-icons/tb'

const Project4Page = () => {
  return (
    <div className="space-y-6">
      {/* Header - Rank 3 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-accent/10 rounded">Team Lead</span>
          <span className="px-2 py-0.5 bg-accent/10 rounded">Developer</span>
          <span>2023</span>
        </div>
        <h3 className="text-2xl font-bold leading-tight">
          Exercise Pose Identifier and Rep Counter
        </h3>
        <p className="text-sm text-coral">Real-time Fitness Tracking</p>
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
          A real-time exercise tracking application using MediaPipe for human pose estimation.
          Developed a custom algorithm to identify exercises by calculating joint angles in a
          particular instance. The GUI displays exercise name and rep counts in real-time.
        </p>
      </div>

      {/* Architecture - Rank 5 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Architecture</h4>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Input:</span>
            <span>Real-time video stream from webcam</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Detection:</span>
            <span>MediaPipe Pose for 33-point body landmark extraction</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Algorithm:</span>
            <span>Joint angle calculation (shoulder, elbow, hip, knee) for pose matching</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Tracking:</span>
            <span>State machine to detect rep transitions (up/down positions)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Output:</span>
            <span>GUI overlay with exercise name, rep count, and joint angles</span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Features</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Exercise Detection</p>
            <p className="text-xs text-muted-foreground mt-1">
              Identifies exercise type from pose
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Rep Counter</p>
            <p className="text-xs text-muted-foreground mt-1">
              Automatic repetition counting
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">Joint Angles</p>
            <p className="text-xs text-muted-foreground mt-1">
              Real-time angle display
            </p>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/10 rounded">
            <p className="text-xs font-medium">GUI Interface</p>
            <p className="text-xs text-muted-foreground mt-1">
              Clean overlay with stats
            </p>
          </div>
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
            <SiOpencv className="w-5 h-5 text-green-500" />
            <span className="text-sm">OpenCV</span>
          </div>
          <div className="flex items-center gap-2">
            <TbYoga className="w-5 h-5 text-blue-400" />
            <span className="text-sm">MediaPipe</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineVisibility className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Computer Vision</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project4Page
