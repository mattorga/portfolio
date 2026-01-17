const NVIDIADeepLearningPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-500/10 rounded-lg">
            <div className="w-12 h-12 flex items-center justify-center font-bold text-2xl text-green-500">
              N
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Fundamentals of Deep Learning</h3>
            <p className="text-coral text-sm mt-1">NVIDIA Deep Learning Institute</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full font-medium">
            Completed
          </span>
          <span className="text-xs text-muted-foreground">Issued: 2024</span>
        </div>
      </div>

      {/* Course description */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">Foundation Course</h4>
        <p className="text-sm text-muted-foreground">
          Comprehensive introduction to deep learning, covering neural network
          architectures, training techniques, and practical implementation using
          modern frameworks.
        </p>
      </div>

      {/* Core topics */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Core Topics Covered</h4>
        <div className="grid grid-cols-1 gap-2">
          <div className="p-3 bg-accent/5 rounded border-l-4 border-accent">
            <p className="text-xs font-medium">Neural Network Fundamentals</p>
            <p className="text-xs text-muted-foreground mt-1">
              Forward/backward propagation, activation functions, loss functions
            </p>
          </div>
          <div className="p-3 bg-accent/5 rounded border-l-4 border-accent">
            <p className="text-xs font-medium">Convolutional Neural Networks (CNNs)</p>
            <p className="text-xs text-muted-foreground mt-1">
              Image classification, object detection, transfer learning
            </p>
          </div>
          <div className="p-3 bg-accent/5 rounded border-l-4 border-accent">
            <p className="text-xs font-medium">Recurrent Neural Networks (RNNs)</p>
            <p className="text-xs text-muted-foreground mt-1">
              Sequence modeling, LSTMs, time series analysis
            </p>
          </div>
        </div>
      </div>

      {/* Hands-on projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Hands-On Projects</h4>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Built image classifier with 90%+ accuracy</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Trained custom object detection model</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>Implemented sentiment analysis with RNNs</span>
          </li>
        </ul>
      </div>

      {/* Frameworks */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Frameworks Used</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">TensorFlow</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">Keras</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">PyTorch</span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded">CUDA</span>
        </div>
      </div>

      {/* Foundation for AI work */}
      <div className="p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded border-l-4 border-green-500">
        <h4 className="text-xs font-semibold mb-1">Foundation for AI Development</h4>
        <p className="text-xs text-muted-foreground">
          This course provided the essential knowledge needed to understand and implement
          deep learning models - crucial for building data-driven and AI-powered backend
          systems.
        </p>
      </div>

      {/* Performance metrics */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-lg font-bold text-accent">8hrs</p>
          <p className="text-xs text-muted-foreground mt-1">Course Duration</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-lg font-bold text-accent">5</p>
          <p className="text-xs text-muted-foreground mt-1">Projects Built</p>
        </div>
        <div className="text-center p-3 bg-accent/5 rounded">
          <p className="text-lg font-bold text-accent">100%</p>
          <p className="text-xs text-muted-foreground mt-1">Completion</p>
        </div>
      </div>
    </div>
  )
}

export default NVIDIADeepLearningPage
