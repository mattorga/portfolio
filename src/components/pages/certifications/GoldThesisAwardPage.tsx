import { useState } from 'react'
import goldThesisCertificate from '@/assets/gold_thesis_certificate.webp'
import dlsuSeal from '@/assets/dlsu_seal.svg'

const GoldThesisAwardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header with DLSU branding */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <img src={dlsuSeal} alt="DLSU Seal" className="w-14 h-14 shrink-0 object-contain" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Gold Thesis Award</h3>
            <p className="text-coral text-sm mt-1">De La Salle University</p>
            <p className="text-xs text-muted-foreground mt-1">May 2024</p>
          </div>
        </div>
      </div>

      {/* Certificate Image */}
      <div className="space-y-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="block w-full cursor-zoom-in"
        >
          <img
            src={goldThesisCertificate}
            alt="Gold Thesis Award Certificate"
            className="w-full rounded-lg border border-border hover:border-accent/50 transition-colors"
          />
        </button>
        <p className="text-xs text-muted-foreground text-center">Click to enlarge</p>
      </div>

      {/* What this award represents */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-accent">About the Award</h4>
        <p className="text-sm text-muted-foreground">
          The Gold Thesis Award is the highest distinction given to undergraduate
          thesis projects at DLSU, recognizing exceptional research, innovation,
          and technical excellence.
        </p>
      </div>

      {/* Key achievements */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-accent">Core Achievements</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Research Excellence</p>
            <p className="text-xs text-muted-foreground">
              Selected as Best Thesis among 50+ submissions
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Technical Innovation</p>
            <p className="text-xs text-muted-foreground">
              Developed novel solution using ML and full-stack techniques
            </p>
          </div>
          <div className="p-3 bg-accent/5 border-l-2 border-accent">
            <p className="text-xs font-medium mb-1">Practical Application</p>
            <p className="text-xs text-muted-foreground">
              Demonstrated real-world problem solving capabilities
            </p>
          </div>
        </div>
      </div>

      {/* Technologies used */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-accent">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-yellow-500/10 text-xs rounded border border-yellow-500/20">
            Python
          </span>
          <span className="px-2 py-1 bg-yellow-500/10 text-xs rounded border border-yellow-500/20">
            JavaScript
          </span>
          <span className="px-2 py-1 bg-yellow-500/10 text-xs rounded border border-yellow-500/20">
            OpenCV
          </span>
          <span className="px-2 py-1 bg-yellow-500/10 text-xs rounded border border-yellow-500/20">
            OpenPose
          </span>
          <span className="px-2 py-1 bg-yellow-500/10 text-xs rounded border border-yellow-500/20">
            Pose2Sim
          </span>
          <span className="px-2 py-1 bg-yellow-500/10 text-xs rounded border border-yellow-500/20">
            OpenSim
          </span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative flex items-center justify-center">
            <img
              src={goldThesisCertificate}
              alt="Gold Thesis Award Certificate"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GoldThesisAwardPage
