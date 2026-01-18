import { SiPython, SiJavascript, SiGit, SiFigma, SiOpencv, SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import { TbBone } from 'react-icons/tb'

const Project1Page = () => {
  return (
    <div className="space-y-6">
      {/* Header - Rank 3 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-accent/10 rounded">Team Lead</span>
          <span className="px-2 py-0.5 bg-accent/10 rounded">Developer</span>
          <span>2023-2025</span>
        </div>
        <h3 className="text-2xl font-bold leading-tight">
          Markerless Gait Analysis using 3D Human Pose Estimation
        </h3>
        <p className="text-sm text-coral">For Physical Assessment</p>
        <div className="flex gap-3">
          <a href="#" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <SiGithub className="w-4 h-4" />
            View Code
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <FiExternalLink className="w-4 h-4" />
            Publication
          </a>
        </div>
      </div>

      {/* Description - Rank 2 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">About</h4>
        <p className="text-sm text-muted-foreground">
          A full-stack desktop application that 3D simulates a patient's walk as a support
          for physical therapy diagnosis. Integrates multiple open-source software to achieve
          an intuitive gait analysis process flow.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-500">
            🥇 Gold Medal - Outstanding Thesis (DLSU)
          </span>
          <span className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-xs">
            📍 Presented at ITC-CSCC, South Korea
          </span>
        </div>
      </div>

      {/* Demo */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Demo</h4>
        <div className="relative w-full aspect-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/YI9p9W_YQfs"
            title="Project Demo"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded border border-border"
          />
        </div>
      </div>

      {/* Architecture - Rank 5 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Architecture</h4>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Input:</span>
            <span>Video capture of patient walking (RGB camera)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Detection:</span>
            <span>OpenCV for video processing → OpenPose for 2D keypoint extraction</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">3D Lift:</span>
            <span>Pose2Sim converts 2D keypoints to 3D coordinates</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Simulation:</span>
            <span>OpenSim renders biomechanical 3D model with gait analysis</span>
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
            <SiJavascript className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <SiOpencv className="w-5 h-5 text-green-500" />
            <span className="text-sm">OpenCV</span>
          </div>
          <div className="flex items-center gap-2">
            <TbBone className="w-5 h-5 text-orange-400" />
            <span className="text-sm">OpenPose</span>
          </div>
          <div className="flex items-center gap-2">
            <TbBone className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Pose2Sim</span>
          </div>
          <div className="flex items-center gap-2">
            <TbBone className="w-5 h-5 text-red-400" />
            <span className="text-sm">OpenSim</span>
          </div>
          <div className="flex items-center gap-2">
            <SiGit className="w-5 h-5 text-orange-500" />
            <span className="text-sm">Git</span>
          </div>
          <div className="flex items-center gap-2">
            <SiFigma className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Figma</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project1Page
