import { SiOpencv } from 'react-icons/si'
import RelatedExperienceLink from '../../ui/RelatedExperienceLink'

const OpenCVPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-green-500/10 rounded-lg">
          <SiOpencv className="w-10 h-10 text-green-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">OpenCV</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Computer Vision Library
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">What I Use OpenCV For</h4>
        <div className="space-y-2">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">3D Human Pose Estimation</p>
            <p className="text-xs text-muted-foreground mt-1">
              Core component of my thesis for markerless gait analysis
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Image Processing Pipelines</p>
            <p className="text-xs text-muted-foreground mt-1">
              Video capture, frame processing, and visualization
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-sm font-medium">Exercise Pose Detection</p>
            <p className="text-xs text-muted-foreground mt-1">
              Joint angle calculation for exercise identification
            </p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Projects</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="GaitScape Thesis (Gold Medal)" year="2023-2025" />
          <RelatedExperienceLink label="ITC-CSCC Publication" year="2025" />
          <RelatedExperienceLink label="CNN-LSTM Gait Classification" year="2024" />
          <RelatedExperienceLink label="Exercise Rep Counter" year="2023" />
        </div>
      </div>

      {/* Related Certifications */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Related Certifications</h4>
        <div className="grid grid-cols-1 gap-2 text-xs">
          <RelatedExperienceLink label="Gold Medal Thesis Award" year="2025" />
        </div>
      </div>
    </div>
  )
}

export default OpenCVPage
