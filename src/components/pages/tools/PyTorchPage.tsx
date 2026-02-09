import { SiPytorch } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const PyTorchPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-orange-500/10 rounded-lg">
          <SiPytorch className="w-10 h-10 text-orange-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">PyTorch</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Deep Learning Framework
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use PyTorch For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Neural Network Training</p>
            <p className="text-xs text-muted-foreground mt-1">
              End-to-end training of deep learning models for computer vision tasks
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Model Architecture Design</p>
            <p className="text-xs text-muted-foreground mt-1">
              Building custom CNN and hybrid architectures for classification
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Transfer Learning</p>
            <p className="text-xs text-muted-foreground mt-1">
              Leveraging pre-trained models for domain-specific tasks
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="CNN-LSTM Gait Classification" year="2024" />
          <RelatedExperienceLink label="VGG-19 Image Classification" year="2024" />
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

export default PyTorchPage
