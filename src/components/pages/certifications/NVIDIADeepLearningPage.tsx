const NVIDIADeepLearningPage = () => {
  return (
    <div className="space-y-6">
      {/* Header with NVIDIA branding */}
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
            <p className="text-xs text-muted-foreground mt-1">Issued: 2024</p>
          </div>
        </div>
      </div>

      {/* What this certification covers */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">What I Learned</h4>
        <p className="text-sm text-muted-foreground">
          Comprehensive introduction to deep learning, covering neural network
          architectures, training techniques, and practical implementation using
          modern frameworks.
        </p>
      </div>

      {/* Key competencies */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Core Competencies</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Neural Networks</p>
            <p className="text-xs text-muted-foreground">
              Forward/backward propagation, activation and loss functions
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">CNNs</p>
            <p className="text-xs text-muted-foreground">
              Image classification, object detection, transfer learning
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">RNNs & LSTMs</p>
            <p className="text-xs text-muted-foreground">
              Sequence modeling and time series analysis
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Model Training</p>
            <p className="text-xs text-muted-foreground">
              Optimization, regularization, and hyperparameter tuning
            </p>
          </div>
        </div>
      </div>

      {/* Frameworks used */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Frameworks Used</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-green-500/10 text-xs rounded border border-green-500/20">
            TensorFlow
          </span>
          <span className="px-2 py-1 bg-green-500/10 text-xs rounded border border-green-500/20">
            Keras
          </span>
          <span className="px-2 py-1 bg-green-500/10 text-xs rounded border border-green-500/20">
            PyTorch
          </span>
          <span className="px-2 py-1 bg-green-500/10 text-xs rounded border border-green-500/20">
            CUDA
          </span>
        </div>
      </div>

      {/* Credential */}
      <div className="text-center pt-4">
        <a
          href="https://learn.nvidia.com/certificates?id=-ZQ43gWTRXClKUfxyPMTkQ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-accent border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent transition-all"
        >
          View Credential on NVIDIA
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default NVIDIADeepLearningPage
