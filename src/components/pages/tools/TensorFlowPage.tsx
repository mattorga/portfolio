import { SiTensorflow } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const TensorFlowPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-orange-600/10 rounded-lg">
          <SiTensorflow className="w-10 h-10 text-orange-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">TensorFlow</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Machine Learning Platform
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use TensorFlow For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Image Classification</p>
            <p className="text-xs text-muted-foreground mt-1">
              Building CNNs with Keras for real-world computer vision tasks
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Model Optimization</p>
            <p className="text-xs text-muted-foreground mt-1">
              Data augmentation and transfer learning for improved accuracy
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Hybrid Architectures</p>
            <p className="text-xs text-muted-foreground mt-1">
              CNN-LSTM models for sequential data classification
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="Modified VGG-19 for CIFAR10" year="2024" />
          <RelatedExperienceLink label="Pathological Gait Classification" year="2024" />
        </div>
      </div>

      {/* Related Certifications */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Certifications</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="NVIDIA Deep Learning Certification" year="2025" />
        </div>
      </div>
    </div>
  )
}

export default TensorFlowPage
