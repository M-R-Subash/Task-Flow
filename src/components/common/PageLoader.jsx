import React from 'react'

const PageLoader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white flex flex-col items-center justify-center">
    {/* Animated TeamFlow Logo */}
    <div className="relative mb-8">
      <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-primary to-cyan-500 animate-pulse"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-2xl font-black text-white">TF</div>
      </div>
      
      {/* Pulsing ring animation */}
      <div className="absolute -inset-4 border-4 border-primary/30 rounded-3xl animate-ping"></div>
    </div>
    
    {/* Loading text with dots animation */}
    <div className="text-center">
      <h3 className="text-xl font-bold text-text-main mb-2">Loading TeamFlow</h3>
      <p className="text-text-muted text-sm mb-6">Preparing your workspace...</p>
      
      {/* Animated dots */}
      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
    
    {/* Progress bar */}
    <div className="w-64 bg-gray-200 rounded-full h-1.5 mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-cyan-500 h-full rounded-full animate-progress"></div>
    </div>
    
    {/* Optional: Add Tailwind config for custom animation */}
    <style jsx>{`
      @keyframes progress {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-progress {
        animation: progress 1.5s ease-in-out infinite;
      }
    `}</style>
  </div>
  )
}

export default PageLoader