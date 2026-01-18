import { SiPython, SiKeras, SiGithub } from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'

const Project2Page = () => {
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
          Modified VGG-19 for CIFAR10 Dataset
        </h3>
        <p className="text-sm text-coral">Image Classification</p>
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
          Trained a modified VGG-19 architecture to facilitate the input size of the CIFAR10
          dataset (32x32 images). The objective is to classify images under 10 classes including
          airplanes, cars, birds, cats, deer, dogs, frogs, horses, ships, and trucks.
        </p>
      </div>

      {/* Architecture - Rank 5 */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Architecture</h4>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Input:</span>
            <span>32x32 RGB images (modified from VGG-19's standard 224x224)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Model:</span>
            <span>Modified VGG-19 with adjusted convolutional layers for smaller input</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Optimizer:</span>
            <span>SGD with learning rate of 0.06</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Training:</span>
            <span>20 epochs</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-coral min-w-[80px]">Output:</span>
            <span>10-class classification (softmax)</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded border border-accent/10">
          <p className="text-xl font-bold text-accent">94%</p>
          <p className="text-xs text-muted-foreground mt-1">Training Accuracy</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded border border-accent/10">
          <p className="text-xl font-bold text-accent">76%</p>
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
        </div>
      </div>
    </div>
  )
}

export default Project2Page
